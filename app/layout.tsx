"use client";
import Navbar from "./Navbar";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head />

            <body className="bg-themedarkgray grid-parent h-screen">
                <Header />
                <Navbar />
                <ToastContainer />
                <main className="grid-main relative">{children}</main>
            </body>
        </html>
    );
}
