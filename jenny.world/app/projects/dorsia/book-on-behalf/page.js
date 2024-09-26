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
        <span>Book on Behalf</span>
      </Breadcrumbs>
      
      <Image
        className={projectPage.projectHero}
        src="/projects/dorsia/book-on-behalf/cover.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={projectPage.projectIntro}>
        <div className={projectPage.introContent}>
        <h1>Book on Behalf</h1>
          <h2>Secure a hard-to-get reservation by buying a bottle for the table beforehand</h2>

          <div className="tags">
            <span className="tag">Web App Design</span>
            <span className="tag">Responsive Design</span>
            <span className="tag">Modular Design</span>
            <span className="tag">Payments</span>        
          </div>

          <div className={projectPage.introPara}>
            <p>Most Dorsia restaurant bookings require a member to prepay a minimum spend in the app to secure the reservation. Through this exclusive partnership, Dorsia members can now opt into purchasing a bottle of Dom Perignon as their form of prepayment, replacing the minimum spend requirement and promoting cross-brand awareness.</p>
          </div>

          <div className={projectPage.details}>
            
            <div className={projectPage.team}>
              <h5>Team</h5>
              <ul>
                <li><span className={projectPage.role}>Jenny Liu Zhang</span>, designer</li>
                <li>Mitchell Hart, designer</li>
                <li>Joshua Stern, product lead</li>
                <li>Mark Armenderiz, engineering lead</li>
              </ul>
            </div>

            <div className={projectPage.services}>
              <h5>Activities</h5>
              <ul>
                <li>Competitive research</li>
                <li>Product strategy</li>
                <li>Journey mapping</li>
                <li>User flows</li>
                <li>Prototyping</li>
              </ul>
            </div>

            <div className={projectPage.team}>
              <h5>Stakeholders</h5>
              <ul>
                <li>Dorsia Hospitality Team</li>
                <li>Dorsia Restaurant Partners</li>
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