import { Inter } from "next/font/google";
import { Jost } from "next/font/google";
import "./styles/globals.css";
import "./styles/masonry.css";
import "./styles/fonts.css";
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "The World of Jenny Liu Zhang",
  description: ":)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        {children}

        <Footer />
      </body>
    </html>
  );
}
