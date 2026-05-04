import React from "react";
import { Metadata } from "next";
import LoginPageClient from "./LoginPageClient";

export const metadata: Metadata = {
  title: "Sign In | CardsFlow",
  description:
    "Sign in to manage wallets, deposits, withdrawals, cards, and transaction activity from your CardsFlow workspace.",
};

export default function LoginPage() {
  return <LoginPageClient />;
}
