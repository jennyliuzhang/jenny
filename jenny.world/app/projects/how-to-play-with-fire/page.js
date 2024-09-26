import Image from "next/image";
import Link from "next/link";
import projectPage from "../../styles/projectPage.module.css";
import Breadcrumbs from '../../components/Breadcrumbs';

export default function Page() {
  return (
    <main className={projectPage.projectPage}>
      
      <Breadcrumbs>
        <Link href="/journal">Projects</Link>
        <span>How to Play With Fire</span>
      </Breadcrumbs>
      
      <Image
        className={projectPage.projectHero}
        src="/projects/how-to-play-with-fire/cover.gif"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={projectPage.projectIntro}>
        <div className={projectPage.introContent}>
        <h1>How to Play With Fire</h1>
          {/* <h2>Innovating on minimum spend payments through a co-branded product offering</h2> */}
          <h2>Co-founding an interdisciplinary research collective about human flourishing in the digital era</h2>

          <div className="tags">
            <span className="tag">Website Design</span>
            <span className="tag">Front-End Development</span>
            <span className="tag">Brand Design</span>
            <span className="tag">Research Writing</span>
            <span className="tag">Tech Studies</span>
          </div>

          <div className={projectPage.introPara}>
            <p>Most Dorsia restaurant bookings require a member to prepay a minimum spend in the app to secure the reservation. Through this exclusive partnership, Dorsia members can now opt into purchasing a bottle of Dom Perignon as their form of prepayment, replacing the minimum spend requirement and promoting cross-brand awareness.</p>
          </div>

          <div className={projectPage.details}>
            
            <div className={projectPage.team}>
              <h5>Team</h5>
              <ul>
                <li>Ryan Haecker, co-founder</li>
                <li><span className={projectPage.role}>Jenny Liu Zhang</span>, co-founder</li>
                <li>Brandon Yip, co-founder</li>
                <li>Olivia Thomas, co-founder</li>
              </ul>
            </div>

            <div className={projectPage.services}>
              <h5>Activities</h5>
              <ul>
                <li>Narrative design</li>
                <li>Visual identity</li>
                <li>Front-end development</li>
              </ul>
            </div>

            <div className={projectPage.team}>
              <h5>Stakeholders</h5>
              <ul>
                <li>Diverse Intelligences Summer Institute</li>
                <li>University of Cambridge, Digital Humanities</li>
              </ul>
            </div>

            <div className={projectPage.team}>
              <h5>Timeline</h5>
              <ul>
                <li>Ongoing, founded in 2022</li>
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