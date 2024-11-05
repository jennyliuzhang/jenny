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
                {/* Re-enable later <Link href="/colophon" className="colophon">Colophon</Link> */}
            </div>
            
            <div className="social">
                <a href="https://www.instagram.com/jennyliuzhang/" target="_blank"><Image src="/social-icons/instagram.png" width={25} height={25} alt="Instagram"></Image></a>
                <a href="https://x.com/jennyliuzhang" target="_blank"><Image src="/social-icons/x.png" width={25} height={25} alt="X/Twitter"></Image></a>
                <a href="https://www.linkedin.com/in/jennyliuzhang/" target="_blank"><Image src="/social-icons/linkedin.png" width={25} height={25} alt="LinkedIn"></Image></a>
                <a href="https://github.com/jennyliuzhang" target="_blank"><Image src="/social-icons/github.png" width={25} height={25} alt="GitHub"></Image></a>
                <a href="https://www.tiktok.com/@badparkjob" target="_blank"><Image src="/social-icons/tiktok.png" width={25} height={25} alt="TikTok"></Image></a>
                <a href="https://letterboxd.com/jennyliuzhang/" target="_blank"><Image src="/social-icons/letterboxd.png" width={25} height={25} alt="Letterboxd"></Image></a>
                <a href="https://open.spotify.com/user/1257176056?si=c1a5e7c8acbf4201" target="_blank"><Image src="/social-icons/spotify.png" width={25} height={25} alt="Spotify"></Image></a>
            </div>
            
        </footer>

        );
    }