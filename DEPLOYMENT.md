# Backend Integration & Deployment Guide

This guide is intended for the backend developer inheriting the `zoromba86/cardsflow` repository to connect the APIs and deploy to an Ubuntu VPS.

## Current State

The frontend is complete and production-ready. It uses:
- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Framer Motion (Optimized)

### What works
- All UI, responsive layouts, and scroll animations
- Static SEO, dynamic sitemap generation, robots.txt
- Security headers (HSTS, CSP, X-Frame-Options) via Next.js Middleware
- Form components and validation (ready for `onSubmit` handlers)

### What needs to be connected
- **Authentication**: Connect the `/register` and `/login` (to be created) flows to your Auth provider (e.g., NextAuth, Clerk, or custom JWT).
- **Payment Processing**: Integrate the fiat/crypto deposit flows.
- **Card Issuance API**: Connect to the Visa BIN sponsor / card issuance API.
- **ZK Verification**: Connect the eligibility verification flow.

## Deployment on Ubuntu VPS (Node.js)

Since you are deploying to an Ubuntu VPS rather than a managed service like Vercel, follow these steps to run Next.js in production.

### Prerequisites

1.  **Node.js**: Next.js 16 requires Node.js 20 or later.
2.  **PM2**: For process management and keeping the app alive.
3.  **Nginx**: As a reverse proxy and SSL terminator.

```bash
# Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 globally
sudo npm install -g pm2
```

### 1. Build the Application

Clone the repository to your VPS (e.g., `/var/www/cardsflow`).

```bash
cd /var/www/cardsflow
npm ci

# The build script allocates 4GB of RAM to prevent OOM errors during static generation
npm run build
```

### 2. Start the Server with PM2

Instead of running `npm start` directly, use PM2 to manage the Node.js process.

```bash
# Start the Next.js production server on port 3000
pm2 start npm --name "cardsflow-frontend" -- start

# Save the PM2 process list and configure it to start on boot
pm2 save
pm2 startup
```

### 3. Configure Nginx Reverse Proxy

Next.js will run on `http://localhost:3000`. You need Nginx to listen on port 80/443 and forward traffic to Node.js.

Create an Nginx configuration file: `/etc/nginx/sites-available/cardsflow`

```nginx
server {
    listen 80;
    server_name cardsflow.net www.cardsflow.net;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name cardsflow.net www.cardsflow.net;

    # SSL Certificates (managed by Certbot/Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/cardsflow.net/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/cardsflow.net/privkey.pem;

    # Security Headers (Important!)
    # Note: Next.js middleware sets most of these, but HSTS must be set here
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
    add_header X-Frame-Options "DENY" always;

    # Proxy to Next.js
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Static assets caching
    location /_next/static {
        proxy_pass http://127.0.0.1:3000;
        proxy_cache_valid 200 365d;
        expires 365d;
        access_log off;
    }
}
```

Enable the site and reload Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/cardsflow /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 4. Environment Variables

Create a `.env.production` file in the root of your project:

```env
# Define the base URL for absolute linking and OG images
NEXT_PUBLIC_BASE_URL=https://cardsflow.net

# Add your backend API endpoints here
NEXT_PUBLIC_API_URL=https://api.cardsflow.net/v1
```

## Critical Notes for Backend Developer

1.  **Strict Security**: The application has a `middleware.ts` file that generates a cryptographic nonce for every request and injects a strict Content Security Policy (CSP). If you add external scripts (e.g., Stripe.js), you MUST add their domains to the `script-src` and `connect-src` directives in `middleware.ts`.
2.  **API Requests**: Ensure your backend API handles CORS correctly if it's hosted on a separate subdomain (e.g., `api.cardsflow.net`).
3.  **Hero Image Sequence**: The homepage hero uses a 40-frame image sequence. These are heavily cached using `Cache-Control: public, max-age=31536000, immutable`. Do not alter the asset paths (`/frames/*`) without updating the Next.js config cache rules.
