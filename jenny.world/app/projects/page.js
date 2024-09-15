"use client";

import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Masonry from 'react-masonry-css';
import projectStyles from "../styles/projects.module.css";

const breakpointColumnsObj = {
  default: 3,
  1600: 3,
  1100: 3,
  900: 2,
  600: 1
};

export default function Page() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/data/projects.json')
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  return (
    <main>
      <h2>Featured Work</h2>

      <div className={projectStyles.featured}>
        <div className={projectStyles.featuredTile}>
          <div className={projectStyles.featuredTileDesc}>
              <Link className={projectStyles.linkedTile} href="/projects/dorsia">
                <Image
                    src="/projects/logos/dorsia.png"
                    alt="Dorsia"
                    className={projectStyles.projectLogo}
                    width={79}
                    height={11}
                    style={{opacity: '0.4'}}
                    priority
                  />
                <h3>Dorsia</h3>
                <p>I led early product and marketing design as the first design hire of this $35M-backed hospitality startup.</p>
              </Link>

              <h5>12 subprojects</h5>
              <div className={projectStyles.subprojectPreviews}>
                <Link href="/projects/dorsia/restaurant-profiles" className={projectStyles.subprojectPreview}>
                  <Image
                    src="/projects/thumbnails/restaurant-profiles.png"
                    alt="Project"
                    width={100}
                    height={100}
                    style={{ width: '100%', height: 'auto' }}
                    priority
                  />
                </Link>
                <Link href="/projects/dorsia/shift-editor/" className={projectStyles.subprojectPreview}>
                  <Image
                    src="/projects/thumbnails/restaurant-scheduler.png"
                    alt="Project"
                    width={100}
                    height={100}
                    style={{ width: '100%', height: 'auto' }}
                    priority
                  />
                </Link>
                <Link href="/projects/dorsia/dom-perignon" className={projectStyles.subprojectPreview}>
                  <Image
                    src="/projects/thumbnails/dom-perignon.png"
                    alt="Project"
                    width={100}
                    height={100}
                    style={{ width: '100%', height: 'auto' }}
                    priority
                  />
                </Link>
                <Link href="/projects/dorsia" className={projectStyles.moreSubprojects}>+ 9 more</Link>
              </div>
          </div>

          <Link href="/projects/dorsia" className={projectStyles.featuredTileImage}>
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: 'auto',
                height: '100%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)'
              }}
            >
              <source src="/projects/dorsia-featured.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Link>

        </div>

        <div className={projectStyles.featuredTile}>
          <div className={projectStyles.featuredTileDesc}>

            <Link className={projectStyles.linkedTile} href="/projects/plottwisters">
              <Image
                  src="/projects/logos/pt.png"
                  alt="Dorsia"
                  className={projectStyles.projectLogo}
                  width={40}
                  height={40}
                  priority
                />
              <h3>Plot Twisters</h3>
              <p>I founded this award-winning EdTech design collective, focused on making playful self-reflection products.</p>
            </Link>

            <h5>6 subprojects</h5>
            <div className={projectStyles.subprojectPreviews}>
              <div className={projectStyles.subprojectPreview}>
                <Image
                  src="/projects/thumbnails/brand-strategy.png"
                  alt="Project"
                  width={100}
                  height={100}
                  style={{ width: '100%', height: 'auto' }}
                  priority
                />
              </div>
              <div className={projectStyles.subprojectPreview}>
                <Image
                  src="/projects/thumbnails/org-design.png"
                  alt="Project"
                  width={100}
                  height={100}
                  style={{ width: '100%', height: 'auto' }}
                  priority
                />
              </div>
              <div className={projectStyles.subprojectPreview}>
                <Image
                  src="/projects/thumbnails/openideo.png"
                  alt="Project"
                  width={100}
                  height={100}
                  style={{ width: '100%', height: 'auto' }}
                  priority
                />
              </div>
              <div className={projectStyles.moreSubprojects}>+ 3 more</div>
            </div>
          </div>

          <Link href="/projects/plottwisters" className={projectStyles.featuredTileImage}>
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: 'auto',
                height: '100%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)'
              }}
            >
              <source src="/projects/dorsia-featured.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Link>

        </div>
      </div>

      {/* <h2 className="centeredh2">Skill Portfolios</h2> */}

      <h2 className="centeredh2">More Projects</h2>

      <div className={projectStyles.moreProjects}>

        <div className={projectStyles.filters}>
            <h4>Filter</h4>
        </div>
      
        <Masonry
                breakpointCols={breakpointColumnsObj}
                className={`my-masonry-grid ${projectStyles.allProjects}`}
                columnClassName={`my-masonry-grid_column ${projectStyles.allProjectsColumn}`}>

        {projects.map((project, index) => (
          
          <Link
          href={`/projects/${project.parentProject ? project.parentProject + '/' : ''}${project.projectSlug}`}
          key={index}
          className={projectStyles.project}
        >
          <Image
            className={projectStyles.projectThumbnail}
            src={project.projectCoverURL}
            alt={project.projectName}
            width={960}
            height={675}
            style={{ width: '100%', height: 'auto' }}
            quality={100}
            priority
          />
          <div className={projectStyles.projectDesc}>
            <h3>{project.projectName}</h3>
            <p>{project.projectDesc}</p>

            <div className={`tags ${projectStyles.tags}`}>
              {project.projectDeliverables.map((deliverable, index) => (
                <span className={`tag ${projectStyles.tag}`} key={index}>
                  {deliverable}
                </span>
              ))}
            </div>
          </div>
        </Link>
        ))}

        </Masonry>

      </div>

      <h2 className="centeredh2">The Archive</h2>

      <h1>Older projects, unfinished projects, and just-for-fun projects.</h1>


      {/* <h1 style={{marginTop: "40px"}}>Testimonials</h1>

      <div className={projectStyles.testimonials}>
        <div className={projectStyles.testimonial}>
          <blockquote className={projectStyles.testimonialContent}>Jenny possesses the very rare combination of having an incredibly strong aesthetic, a deep understanding of how product design influences business strategy, and a way of intuiting how the design of a product can change the behavior of those who interact with it. You want her on your founding team!”</blockquote>
          <div className={projectStyles.testimonialAuthor}>
            Jared Morgenstern, former COO of Raya and 3rd Designer at Facebook
          </div>
        </div>

        <div className={projectStyles.testimonial}>
          <blockquote className={projectStyles.testimonialContent}>It was important for us to work with someone that was flexible, agile and diligent. Jenny blew us away with her ability to create curated, clear webflows — her talents go beyond that of web development. She has a knack for conveying language in an extremely effective and engaging way. Jenny was brilliant to work alongside.”</blockquote>
          <div className={projectStyles.testimonialAuthor}>
            Sahar Rohani, Co-Founder of SOSHE Beauty
          </div>
        </div>

        <div className={projectStyles.testimonial}>
          <blockquote className={projectStyles.testimonialContent}>Jenny is my go-to person for creative and consumer. She has the unique ability to bring her own direction to the table while iterating on feedback with intention and speed.”</blockquote>
          <div className={projectStyles.testimonialAuthor}>
            Suraya Shivji, Designer at Snap and former Founder of HAGS
          </div>
        </div>

        <div className={projectStyles.testimonial}>
          <blockquote className={projectStyles.testimonialContent}>I can't think of anyone else that embodies the word 'curiosity' more than Jenny. She has a natural ability to ask the right questions at the right time, and brings a perfect balance of research and intuition to every project she is involved in.”</blockquote>
          <div className={projectStyles.testimonialAuthor}>
            Matthew Manos, Founder of verynice
          </div>
        </div>
      </div> */}

    </main>
  );
}