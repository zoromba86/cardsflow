import React from "react";
import { Metadata } from "next";
import ForgotPasswordClient from "./ForgotPasswordClient";

export const metadata: Metadata = {
  title: "Forgot Password | CardsFlow",
  description: "Reset your CardsFlow account password.",
  robots: { index: false, follow: false, nocache: true },
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordClient />;
}
