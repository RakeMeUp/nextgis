import Navbar from "./Navbar";
import Header from "./Header";
import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head />

            <body className="bg-themedarkgray grid-parent h-screen">
                <Header />
                <Navbar />
                <main className="grid-main relative">{children}</main>
            </body>
        </html>
    );
}
