import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/src/contexts/AuthContext";
import { CartProvider } from "@/src/contexts/CartContext";
import Header from "@/src/components/Header";
import WhatsAppButton from "@/src/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "BungoEats - Food Delivery in Bungoma",
  description: "Premium food delivery service in Bungoma, Kenya. Order from your favorite local restaurants.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AuthProvider>
          <CartProvider>
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <WhatsAppButton />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
