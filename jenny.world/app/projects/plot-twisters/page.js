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
        const filtered = data.filter(project => project.parentProject === "plot-twisters");
        setProjects(filtered);
        setFeaturedProjects(filtered); 
      })
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  return (
    <main className={parentProjects.projectPage}>
      
      <Breadcrumbs>
        <Link href="/projects">Projects</Link>
        <span>Plot Twisters</span>
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
              <source src="/projects/plot-twisters/hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
      </div>

      <div className={projectPage.projectIntro}>
        <div className={projectPage.introContent}>
          <h1>Plot Twisters</h1>
          <h2>Founder and managing director of an EdTech design collective creating self-reflection tools</h2>

          <p><a href="https://www.plottwisters.org/" target="_blank">Plot Twisters</a> is a design collective of designers, researchers, artists, and technologists passionate about creating playful tools to help us to better understand personal narratives and build our journeys toward wellbeing.</p>
          
          <p>I founded the part-time volunteer organization in 2019 and have grown it to a core team of eight, with strategic collaborators helping along the way. I serve as the managing director of the collective but am heavily hands-on, leading the creation of the brand, concept artwork, digital prototypes, and written communications.</p>

          {/* The name is inspired by the idea that all people encounter "plot twists," or challenges in life—our goal is to create products that empower young people to build resilience through them. */}

          {/* The name Plot Twisters comes from the idea that all people encounter "plot twists," or challenges and conflicts, as we navigate life—our goal is to create products that empower young people to self-regulate and discover strategies that align with personal values during life’s plot twists. */}

          {/* <p>As the founder, I conceived Plot Twisters based on my own observations of how existing education and labor systems don’t intentionally support healthy self-awareness, especially with respect to different backgrounds, learning styles, and trauma exposures.</p> */}
          
          <p>Since 2020, we have been creating our flagship product, <Link href="plot-twisters/game-design">Twisterland</Link>. An immersive online game for nurturing emotional literacy, personal narrative building, and self-advocacy skills in young people, Twisterland will help players learn to compassionately self-regulate and critically contribute to their communities in consensual, strengths-based ways.</p>
          
        </div>

        <div className={projectPage.highlights}>
          <Button title="plottwisters.org" desc="" target="_blank" link="https://plottwisters.org/" image="/projects/logos/pt.png" isExternal="true"></Button>

          
          <Image src="/projects/plot-twisters/oxford-workshop.jpg" alt="Workshop at Oxford University" width={1600} height={1119} style={{ display: 'inline', margin: '0 auto 0.75em', width: '100%', height: 'auto', borderRadius: '10px'}}></Image>

          <Image src="/projects/plot-twisters/st-andrews-workshop.jpg" alt="Workshop at St Andrews University" width={1600} height={932} style={{ display: 'inline', margin: '0 auto 0', width: '100%', height: 'auto', borderRadius: '10px'}}></Image>

          <p>Photos from workshops at Oxford University and St Andrews University respectively.</p>

        </div>
        
        
      </div>

      <h2 className="centeredh2">Metrics &amp; Impact</h2>

        <div className={projectPage.creativeProcess}>

        <div className={projectPage.step}>
          <div className={projectPage.number}>Team Size</div>
          <h5 className={parentProjects.metricStat}>8 core members</h5>
          <p>16 occasional contributors, all involved in a part-time and voluntary basis</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>Funding</div>
          <h5 className={parentProjects.metricStat}>$50K Grant Award</h5>
          <p>Funded by <a href="https://ideo.com/" target="_blank">IDEO</a> and <a href="https://www.riotgames.com/" target="_blank">Riot Games</a> through OpenIDEO grand prize since 2022</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>Strategic Relationships</div>
          <h5 className={parentProjects.metricStat}>10 Partnerships</h5>
          <p>Georgia State University, Diverse Intelligences Summer Institute, Sesame Workshop, and <a href="https://www.plottwisters.org/" target="_blank">more</a></p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>Presentations &amp; Workshops</div>
          <h5 className={parentProjects.metricStat}>13 Workshops</h5>
          <p>Online and in-person playtests, focus groups, and presentations in USA and UK</p>
        </div>

        </div>
      

      <h2 className="centeredh2">Featured Plot Twisters Subprojects</h2>

        <Masonry
        breakpointCols={breakpointColumnsObj}
        className={`my-masonry-grid ${projectStyles.allProjects}`}
        columnClassName={`my-masonry-grid_column ${projectStyles.allProjectsColumn}`}
      >
        {featuredProjects.map((project, index) => (
          <Link
            href={`/projects/plot-twisters/${project.projectSlug}`}
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
            src="/projects/plot-twisters/s-roles-breakdown.png"
            alt="Project"
            width={1347}
            height={1173}
            style={{ width: '100%', height: 'auto' }}
            quality={100} 
            priority
          />
          </div>

          <div className={projectPage.featureDesc}>
            <p>I conceived Plot Twisters in 2019 for my undergraduate capstone at the <a href="https://iovine-young.usc.edu/" target="_blank">USC Iovine and Young Academy</a>. I developed the idea over the first year individually, visiting local middle and high schools and youth organizations in Los Angeles to test worksheets and conduct research.</p>

            <p>Years 1–2</p>

            <p>By Year 2, we hired more designers and our individual functions became more siloed. Toward the end of my time, I focused mostly on executing products to help elevate our brand and strategic partnerships, aided by my longstanding literacy in the company vision and DNA.</p>          
          </div>
        </div>

    </main>
  );
}