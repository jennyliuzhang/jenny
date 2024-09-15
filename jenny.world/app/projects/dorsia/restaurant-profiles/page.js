import Image from "next/image";
import Link from "next/link";
import projectPage from "../../../styles/projectPage.module.css";

export default function Page() {
  return (
    <main className={projectPage.projectPage}>
      <h2 className="breadcrumbh2"><Link href="/projects" className="breadcrumb">Projects</Link><Link href="/projects/dorsia" className="breadcrumb">Dorsia</Link>Restaurant Profiles</h2>
      
      <Image
        className={projectPage.projectHero}
        src="/projects/dorsia/restaurant-profiles/cover.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={projectPage.projectIntro}>
        <div className={projectPage.introContent}>
        <h1>Restaurant Profiles</h1>
          {/* <h2>Innovating on minimum spend payments through a co-branded product offering</h2> */}
          <h2>Showcasing Dorsia restaurants and venues through a scalable and editorial lens</h2>

          <div className="tags">
            <span className="tag">Mobile App Design</span>
            <span className="tag">Modular Design</span>
            <span className="tag">User Education</span>
          </div>

          <div className={projectPage.introPara}>
            <p>Most Dorsia restaurant bookings require a member to prepay a minimum spend in the app to secure the reservation. Through this exclusive partnership, Dorsia members can now opt into purchasing a bottle of Dom Perignon as their form of prepayment, replacing the minimum spend requirement and promoting cross-brand awareness.</p>
          </div>

          <div className={projectPage.details}>
            
            <div className={projectPage.team}>
              <h5>Team</h5>
              <ul>
                <li><span className={projectPage.role}>Jenny Liu Zhang</span>, design lead</li>
                <li>Pat White, designer</li>
                <li>Mitchell Hart, designer</li>
                <li>Matthew Rosenberg, product lead</li>
              </ul>
            </div>

            <div className={projectPage.services}>
              <h5>Activities</h5>
              <ul>
                <li>Product strategy</li>
                <li>Journey mapping</li>
                <li>User flows</li>
                <li>Prototyping</li>
                <li>Visual design</li>
                <li>Design documentation</li>
                <li>Design QA</li>
              </ul>
            </div>

            <div className={projectPage.team}>
              <h5>Stakeholders</h5>
              <ul>
                <li>Dorsia Leadership</li>
                <li>Dorsia Content Team</li>
              </ul>
            </div>

            <div className={projectPage.team}>
              <h5>Timeline</h5>
              <ul>
                <li>4 weeks</li>
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