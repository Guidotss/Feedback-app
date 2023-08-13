import { Metadata } from "next";
import { Jost } from "next/font/google";
import { Providers } from "@/providers";
import "./globals.css";

export const metadata:Metadata = {
  title: "Feedback App",
  description: "Feedback App built with Next.js and TypeScript",
  authors:{ 
    name: "Guido Olguin"
  },
  icons: 'favicon.ico'
};

const jost = Jost({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jost.className} bg-bg_app`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
