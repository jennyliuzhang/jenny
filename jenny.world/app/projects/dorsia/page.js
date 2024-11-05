"use client";

import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Masonry from 'react-masonry-css';
import Breadcrumbs from '../../components/Breadcrumbs';
import Button from "../../components/Button";
import parentProjects from "../../styles/featuredProject.module.css";
import projectPage from "../../styles/projectPage.module.css";
import projectStyles from "../../styles/projects.module.css";

const breakpointColumnsObj = {
  default: 4,
  1600: 4,
  1100: 3,
  900: 2,
  600: 1
};

export default function Page() {
  const [projects, setProjects] = useState([]);
  const [featuredProjects, setFeaturedProjects] = useState([]);

  // Fetch projects on component mount
  useEffect(() => {
    fetch('/data/projects.json')
      .then((response) => response.json())
      .then((data) => {
        const filtered = data.filter(project => project.parentProject === "dorsia");
        setProjects(filtered); // Only Dorsia projects
        setFeaturedProjects(filtered); // Initialize with Dorsia projects
      })
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);



  return (
    <main className={parentProjects.projectPage}>
      
      <Breadcrumbs>
        <Link href="/projects">Projects</Link>
        <span>Dorsia</span>
      </Breadcrumbs>

      <div className={parentProjects.hero} style={{background: '#fffdf9'}}>
        <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                position: 'absolute',
                width: 'auto',
                height: '100%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)'
              }}
            >
              <source src="/projects/dorsia/full-hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
      </div>

      <div className={projectPage.projectIntro}>
        <div className={projectPage.introContent}>
          <h1>Dorsia</h1>
          <h2>Founding designer of the reservation platform for top dining and nightlife experiences</h2>

          <p><a href="https://www.dorsia.com/" target="_blank">Dorsia</a> is a members-only app for booking impossible reservations, tables, and invite-only cultural moments. As the founding designer, I owned early product and marketing design. I worked closely with senior leadership to strategically facilitate expansion from zero to 60K users, 12 global markets, and five additional designers.</p>

          {/* <div className={projectPage.introPara}>
            <p>I was the first design hire at Dorsia, owning early product and marketing design for the $35M-backed hospitality and culture tech startup. During my two-year tenure, I worked closely with senior leadership to strategically facilitate expansion from zero to 60K users, 12 global markets, and five additional designers.</p>
          </div> */}

        </div>

        <div className={projectPage.highlights}>
          <Button title="dorsia.com" desc="" target="_blank" link="https://dorsia.com/" image="/projects/logos/dorsia.png" isExternal="true"></Button>

          <Button title="App Store" desc="" target="_blank" link="https://apps.apple.com/ca/app/dorsia-members-club/id1589267208" image="/projects/logos/dorsia-app.png" isExternal="true"></Button>
          
          {/* <a href="https://dorsia.com/" target="_blank"><Image src="/projects/dorsia/website.jpg" alt="Website" width={1500} height={937} style={{ display: 'inline', margin: '0 auto 0.75em', width: '100%', height: 'auto', borderRadius: '10px'}}></Image></a> */}

          {/* <p>Visit the website to learn more.</p> */}

        </div>
        
      </div>

      <h2 className="centeredh2">Metrics &amp; Impact</h2>

        <div className={projectPage.creativeProcess}>

        <div className={projectPage.step}>
          <div className={projectPage.number}>User Growth</div>
          <h5 className={parentProjects.metricStat}>0 to 60K Users</h5>
          <p>Over 2-year tenure</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>Global Expansion</div>
          <h5 className={parentProjects.metricStat}>12 Global Markets</h5>
          <p>6 domestic, 6 international</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>Team Size</div>
          <h5 className={parentProjects.metricStat}>5 Additional Designers</h5>
          <p>Oversaw 3 junior designers</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>Revenue Impact</div>
          <h5 className={parentProjects.metricStat}>~$40M Total GMV</h5>
          <p>Over 2-year tenure</p>
        </div>

      </div>
      

      <h2 className="centeredh2">Featured Dorsia Subprojects</h2>

        <Masonry
        breakpointCols={breakpointColumnsObj}
        className={`my-masonry-grid ${projectStyles.allProjects}`}
        columnClassName={`my-masonry-grid_column ${projectStyles.allProjectsColumn}`}
      >
        {featuredProjects.map((project, index) => (
          <Link
            href={`/projects/dorsia/${project.projectSlug}`}
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
                {project.projectDeliverables.map((deliverable, idx) => (
                  <span className={`tag ${projectStyles.tag}`} key={idx}>
                    {deliverable}
                  </span>
                ))}
                {project.projectOwnership >= 90 && (
                    <span className={`tag ${projectStyles.tag} ${projectStyles.ownershipLabel}`}>
                      {project.projectOwnership === 100
                        ? "💡 100% created by me"
                        : "💡 90% created by me"}
                    </span>
                  )}
              </div>
            </div>
          </Link>
        ))}
      </Masonry>


      <h2 className="centeredh2" style={{marginBottom: '0.25em'}}>Role Breakdown</h2>

        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>

          <Image
            className={parentProjects.roleBreakdown}
            src="/projects/dorsia/s-roles-breakdown.png"
            alt="Project"
            width={1455}
            height={991}
            style={{ width: '100%', height: 'auto' }}
            quality={100} 
            priority
          />
          </div>

          <div className={projectPage.featureDesc}>
            <p>I began my tenure in 2022 as a design-product generalist, filling the gap of the designer and helping with product management. I also led a team of junior designers to rapidly iterate on everything from app features to new market launches.</p>

            <p>Year 1 saw many early-stage business opportunities, so I helped workshop product and go-to-market ideas with company leaders. As both a technical design executor and project facilitator, each day was a hands-on collaboration between product, marketing, and engineering.</p>

            <p>By Year 2, we hired more designers and our individual functions became more siloed. Toward the end of my time, I focused mostly on executing products to help elevate our brand and strategic partnerships, aided by my longstanding literacy in the company vision and DNA.</p>          
          </div>
        </div>

    </main>
  );
}