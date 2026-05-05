'use client';

import React from 'react';
import type { DeliveryStatus } from '../types';
import { Package, Truck, CheckCircle2 } from 'lucide-react';

interface DeliveryStatusTimelineProps {
  status: DeliveryStatus;
  trackingNumber?: string;
  estimatedDelivery?: string;
  shippedAt?: string;
  deliveredAt?: string;
}

const steps = [
  { key: 'pending', label: 'Order Placed', icon: Package },
  { key: 'shipped', label: 'Shipped', icon: Truck },
  { key: 'delivered', label: 'Delivered', icon: CheckCircle2 },
] as const;

const statusIndex: Record<DeliveryStatus, number> = { pending: 0, shipped: 1, delivered: 2 };

export function DeliveryStatusTimeline({ status, trackingNumber, estimatedDelivery, shippedAt, deliveredAt }: DeliveryStatusTimelineProps) {
  const currentIdx = statusIndex[status];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
      <h3 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider mb-6">Delivery Status</h3>
      <div className="flex items-start gap-4">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isDone = idx <= currentIdx;
          const isCurrent = idx === currentIdx;
          return (
            <div key={step.key} className="flex-1 flex flex-col items-center text-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${isDone ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'} ${isCurrent ? 'ring-2 ring-emerald-500 ring-offset-2' : ''}`}>
                <Icon size={18} />
              </div>
              <p className={`text-xs font-bold ${isDone ? 'text-slate-900' : 'text-slate-400'}`}>{step.label}</p>
              {idx < steps.length - 1 && (
                <div className={`absolute h-0.5 w-full ${isDone ? 'bg-emerald-400' : 'bg-slate-200'}`} />
              )}
            </div>
          );
        })}
      </div>
      {/* Extra info */}
      <div className="mt-6 space-y-2 text-sm">
        {trackingNumber && (
          <div className="flex justify-between"><span className="text-slate-500">Tracking</span><span className="font-bold text-slate-900">{trackingNumber}</span></div>
        )}
        {estimatedDelivery && status !== 'delivered' && (
          <div className="flex justify-between"><span className="text-slate-500">Estimated Delivery</span><span className="font-bold text-slate-900">{estimatedDelivery}</span></div>
        )}
        {shippedAt && (
          <div className="flex justify-between"><span className="text-slate-500">Shipped</span><span className="font-bold text-slate-900">{shippedAt}</span></div>
        )}
        {deliveredAt && (
          <div className="flex justify-between"><span className="text-slate-500">Delivered</span><span className="font-bold text-slate-900">{deliveredAt}</span></div>
        )}
      </div>
    </div>
  );
}
