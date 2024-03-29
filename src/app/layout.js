import { Sora } from "next/font/google";
import "./globals.css";

const font = Sora({ 
  weight: ['500'],
  subsets: ["latin"] 
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
