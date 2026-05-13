import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BurnoutRadar – Predict Employee Burnout Before It Happens",
  description: "Analyzes Slack activity, calendar density, and response times to identify burnout risk before employees quit. Built for HR teams and engineering managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="545c767b-f800-4b1b-aabd-19b24684e8d4"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
