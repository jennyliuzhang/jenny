import Image from "next/image";
import Link from "next/link";
import projectPage from "../../../styles/projectPage.module.css";
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function Page() {
  return (
    <main className={projectPage.projectPage}>
      
      <Breadcrumbs>
        <Link href="/journal">Projects</Link>
        <Link href="/journal">Dorsia</Link>
        <span>Dorsia Style Guide</span>
      </Breadcrumbs>
      
      <Image
        className={projectPage.projectHero}
        src="/projects/dorsia/style-guide/cover.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={projectPage.projectIntro}>
        <div className={projectPage.introContent}>
        <h1>Dorsia Style Guide</h1>
          {/* <h2>Innovating on minimum spend payments through a co-branded product offering</h2> */}
          <h2>Defining the narrative, identity, and aesthetic of a global brand in the culture &amp; hospitality tech space</h2>

          <div className="tags">
            <span className="tag">Brand Design</span>
            <span className="tag">Storytelling</span>
            <span className="tag">Design System</span>            
          </div>

          <div className={projectPage.introPara}>
            <p>Dorsia is a </p>
          </div>

          <div className={projectPage.details}>
            
            <div className={projectPage.team}>
              <h5>Team</h5>
              <ul>
                <li><span className={projectPage.role}>Jenny Liu Zhang</span>, design lead</li>
                <li>Nate Storey, editorial lead</li>
                <li>Abby Saldana, editor</li>
              </ul>
            </div>

            <div className={projectPage.services}>
              <h5>Activities</h5>
              <ul>
                <li>Narrative design</li>
                <li>Content design</li>
                <li>Visual identity</li>
                <li>Illustration</li>
              </ul>
            </div>

            <div className={projectPage.team}>
              <h5>Stakeholders</h5>
              <ul>
                <li>Dorsia Leadership</li>
                <li>Dorsia Marketing Team</li>
              </ul>
            </div>

            <div className={projectPage.team}>
              <h5>Timeline</h5>
              <ul>
                <li>5 weeks</li>
              </ul>
            </div>
            
          </div>

          
        </div>
      </div>

      <hr></hr>

      <h1>Creative Process</h1>

          
          <div className={projectPage.labels}>
            <span className={projectPage.label}>Mobile App</span>
            <span className={projectPage.label}>UX/UI</span>
          </div>

      

    </main>
  );
}