import "@/app/ui/global.css";
import { inter } from "@/components/ui/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Pado Dashboard",
    default: "Pado App Dashboard",
  },
  description:
    "Comprehensive management dashboard for Pado, CodeWave's social communication app. Monitor user metrics, track app performance, and manage application features.",
  metadataBase: new URL("https://www.codepado.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
