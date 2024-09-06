import NextAuthProvider from "@/providers/NextAuthProvider";
import Layout from "@/layout/Layout";

import { ToastContainer } from "react-toastify";

import { yekan } from "@/utils/fonts";
import "./globals.css";

export const metadata = {
  title: "املاک | پروژه بوتواستارت",
  description: "سایت خرید و فروش املاک",
  icons: { icon: "./favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <NextAuthProvider>
          <Layout>
            {children}
            <ToastContainer />
          </Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
