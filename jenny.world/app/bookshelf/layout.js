import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";
import "../styles/fonts.css";
import bookshelfStyles from "../styles/bookshelf.module.css";
import Footer from "../components/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bookshelf | The World of Jenny Liu Zhang",
  description: ":)",
};

export default function RootLayout({ children }) {
  return (
    <>
      <header className="header">
    
          <Link className="logoset" href="/">
          <Image
                  src="/jenny-world-curved.svg"
                  alt="jenny.world"
                  className="jennyWorldCurved"
                  width={130}
                  height={48}
                  priority
                  />

              <div className="logo"></div>
          </Link>

          <div className="pageNav">
              <div className="leftNav">
                <Link className="about" href="/about">About</Link>
                <Link className="projects" href="/projects">Projects</Link>
                <Link className="cv" href="/cv">CV</Link>   
              </div>
              <div className="rightNav">
                <Link className={bookshelfStyles.bookshelfActive} href="/bookshelf">Bookshelf</Link>   
                <Link className="journal" href="/journal">Journal</Link>
                <Link className="guestbook" href="/guestbook">Guestbook</Link>
              </div>
          </div>
      </header>

        <div className="wrap">
          {children}
        </div>
        
  </>
  );
}
