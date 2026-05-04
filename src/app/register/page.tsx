import React from "react";
import { Metadata } from "next";
import RegisterPageClient from "./RegisterPageClient";

export const metadata: Metadata = {
  title: "Create Account | CardsFlow",
  description:
    "Create a CardsFlow account to start issuing virtual and physical Visa cards with cryptocurrency funding.",
};

export default function RegisterPage() {
  return <RegisterPageClient />;
}
