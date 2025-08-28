import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export const metadata = {
  title: "Medi-Snap",
  description: "A.I Powered Medcines Details",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body

      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
