"use client";

import Image from "next/image";
import Link from "next/link";
import indexStyles from "./styles/index.module.css";
import Masonry from 'react-masonry-css';

const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    900: 2,
    480: 1
  };

export default function Home() {
  return (
    <main className={indexStyles.main}>
    
    <div className={indexStyles.topIntro}>
      <Image
              src="/jenny-world-curved.svg"
              alt="jenny.world"
              className={indexStyles.jennyWorldCurved}
              width={130}
              height={48}
              priority
            />

        <p className={indexStyles.aka}>a.k.a</p>
        <p className={indexStyles.TheWorldOf}>The World of</p>
        <p className={indexStyles.JennyLiuZhang}>Jenny Liu Zhang</p>
      </div>

      <div className={indexStyles.logo}></div>

      <div className={indexStyles.bottomIntro}>
        <p className={indexStyles.DigitalDesigner}>Design Leader</p>
      </div>

      <div className={indexStyles.indexNav}>
        <Link className={indexStyles.about} href="/about">About</Link>
        <Link className={indexStyles.projects} href="/projects">Projects</Link>
        <Link className={indexStyles.cv} href="/cv">CV</Link>     
        <Link className={indexStyles.bookshelf} href="/bookshelf">Bookshelf</Link>
        {/* <Link className={indexStyles.journal} href="/journal">Journal</Link>
        <Link className={indexStyles.contact} href="mailto:jenny@jenny.world">Guestbook</Link>    */}
      </div>

      <div className="wrap" style={{paddingTop: '0px'}}>
        <hr style={{margin: '1em 0 2em'}}></hr>
      <Masonry
                breakpointCols={breakpointColumnsObj}
                className={`my-masonry-grid ${indexStyles.tiles}`}
                columnClassName={`my-masonry-grid_column ${indexStyles.tilesColumn}`}>

        <Link href="/about">
          <div className={`${indexStyles.tile} ${indexStyles.position1}`}>
          <div className={indexStyles.position1wrap}>
              <h1>I&rsquo;m Jenny, an<br></br>end-to-end designer.</h1>
              <span className={`${indexStyles.tileCTA}`}>About Me</span>
            </div>
            <video
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/home-graphics/cover-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Link>
        
        <Link href="/cv">
          <div className={`${indexStyles.tile} ${indexStyles.position2}`}>
            <div className={indexStyles.position2wrap}>
              {/* <p>I craft both the <em style={{fontWeight: '600'}}>function</em> and <em style={{fontWeight: '600'}}>form</em> of digital projects.</p> */}
              {/* <p>My creative practice <em style={{fontWeight: '600'}}>integrates</em> design, technology, and product.</p> */}
              {/* <p>I thrive at the <em style={{fontWeight: '600'}}>intersection</em> of design, technology, and product.</p> */}
              <p>My skills integrate design, technology, and product.</p>
              <span className={`${indexStyles.tileCTA}`}>My Skills &amp; CV</span>
            </div>
          </div>
        </Link>

        <Link href="/projects/dorsia">
          <div className={`${indexStyles.tile} ${indexStyles.position3}`}>
            <div className={indexStyles.position3wrap}>
              <h1>Dorsia &#x2192;</h1>
              <p>Senior Designer</p>
              <p>2022–2024</p>
            </div>
            <video
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/home-graphics/laptop.mov" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
          </div>
        </Link>

        <Link href="/projects/plottwisters">
          <div className={`${indexStyles.tile} ${indexStyles.position4}`}>
            <div className={indexStyles.position4wrap}>
              <h1>Plot Twisters &#x2192;</h1>
              <p>Founder &amp; Director</p>
              <p>2019–present</p>
            </div>
          </div>
        </Link>

        <Link href="/projects/plottwisters">
          <div className={`${indexStyles.tile} ${indexStyles.position5}`}>
            <span className={`${indexStyles.tileCTA}`}>See All Projects</span>
          </div>
        </Link>

        <Link href="/cv/testimonials">
          <div className={`${indexStyles.tile} ${indexStyles.position6}`}>
            <div className={indexStyles.position6wrap}>
              <blockquote>
              “Jenny brings a perfect balance of research and intuition to every project she is involved in.”
              </blockquote>
              <p>Matthew Manos</p>

              <blockquote>
              “She has a knack for conveying language in an extremely effective and engaging way.”
              </blockquote>
              <p>Sahar Rohani</p>
              <span className={`${indexStyles.tileCTA}`}>My Testimonials</span>
            </div>
          </div>
        </Link>

        <div className={`${indexStyles.tile} ${indexStyles.gapPosition}`}></div>

        <Link href="/bookshelf">
          <div className={`${indexStyles.tile} ${indexStyles.position7}`}>
            <div className={indexStyles.position7wrap}>
              <Image className={indexStyles.position7book} src="/home-graphics/patternlanguage.png" alt="A Pattern Language by Christopher Alexander" width='100' height='150'></Image>
              <h1>Books<br></br>I Like &#x2192;</h1>
            </div>
          </div>
        </Link>

        {/* <Link href="about">
          <div className={`${indexStyles.tile} ${indexStyles.position8}`}>
            <h1>My Creative<br></br>Principles &#x2192;</h1>
          </div>
        </Link> */}

      </Masonry>
      </div>

    </main>
  );
}
