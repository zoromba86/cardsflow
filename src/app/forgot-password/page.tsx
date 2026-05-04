import React from "react";
import { Metadata } from "next";
import ForgotPasswordClient from "./ForgotPasswordClient";

export const metadata: Metadata = {
  title: "Forgot Password | CardsFlow",
  description: "Reset your CardsFlow account password.",
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordClient />;
}
