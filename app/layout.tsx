"use client";
import Navbar from "./Navbar";
import Header from "./Header";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
    children,
    session,
}: {
    children: React.ReactNode;
    session: any;
}) {
    return (
        <html>
            <head />

            <body className="bg-themedarkgray grid-parent h-screen">
                <SessionProvider session={session}>
                    <Header />
                    <Navbar />
                    <ToastContainer />
                    <main className="grid-main relative">{children}</main>
                </SessionProvider>
            </body>
        </html>
    );
}
