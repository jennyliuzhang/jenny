import Image from "next/image";
import Link from "next/link";

import year from "./year";

export default function Footer({ children, topBorder }) {
    const currentYear = year();
    return (

        <footer style={{ borderTop: topBorder, }}>
            <Image src="/signature.gif" width={140} height={91} alt="jenny.world"></Image>

            <div className="footerInfo">
                <span className="copyright">© {currentYear} Jenny Liu Zhang</span>
                <Link href="/colophon" className="colophon">Colophon</Link>
            </div>
            
            <div className="social">
                <a href="#" target="_blank"><Image src="/social-icons/instagram.png" width={25} height={25} alt="instagram.com/flowerpuppy444"></Image></a>
                <a href="#" target="_blank"><Image src="/social-icons/x.png" width={25} height={25} alt="instagram.com/flowerpuppy444"></Image></a>
                <a href="#" target="_blank"><Image src="/social-icons/linkedin.png" width={25} height={25} alt="instagram.com/flowerpuppy444"></Image></a>
                <a href="#" target="_blank"><Image src="/social-icons/github.png" width={25} height={25} alt="instagram.com/flowerpuppy444"></Image></a>
                <a href="#" target="_blank"><Image src="/social-icons/letterboxd.png" width={25} height={25} alt="instagram.com/flowerpuppy444"></Image></a>
                <a href="#" target="_blank"><Image src="/social-icons/spotify.png" width={25} height={25} alt="instagram.com/flowerpuppy444"></Image></a>
            </div>
            
        </footer>

        );
    }