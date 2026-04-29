import type { Metadata } from "next";
import "./globals.css";
import LayoutShell from "@/components/LayoutShell";

export const metadata: Metadata = {
  title: "KL Plomb Service Futur SARL | Plomberie à Douala",
  description:
    "Installation, dépannage et maintenance de plomberie au Cameroun avec KL Plomb Service Futur SARL.",
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
