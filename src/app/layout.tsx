import type {Metadata, Viewport} from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS Task Manager",
  description: "A NextJS task manager PWA",
  generator: "NextJS",
  manifest: "/manifest.json",
  keywords: ["NextJS", "PWA", "Task Manager"],
  // themeColor
  authors: [{name: "Janssens Robin"},
            {name: "Janssens Robin",
            url: "janssensrobin.be"}],
  // viewport
  icons: [
  ],
};
export const viewport: Viewport = {
  themeColor: "#10216577",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
