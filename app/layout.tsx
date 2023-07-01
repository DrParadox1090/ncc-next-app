import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import RootComponent from "./ThemeWrapper.tsx";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "NCC | Anna University",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} selection:bg-rose-100 dark:selection:bg-slate-600`}
      >
        <RootComponent>{children}</RootComponent>
      </body>
    </html>
  );
}
