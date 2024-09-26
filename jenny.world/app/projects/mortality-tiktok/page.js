import Image from "next/image";
import Link from "next/link";
import projectPage from "../../styles/projectPage.module.css";
import Breadcrumbs from '../../components/Breadcrumbs';

export default function Page() {
  return (
    <main className={projectPage.projectPage}>
      
      <Breadcrumbs>
        <Link href="/journal">Projects</Link>
        <span>Mortality Awareness on TikTok</span>
      </Breadcrumbs>
      
      <Image
        className={projectPage.projectHero}
        src="/projects/mortality-tiktok/cover.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={projectPage.projectIntro}>
        <div className={projectPage.introContent}>
        <h1>Mortality Awareness on TikTok</h1>
          {/* <h2>Innovating on minimum spend payments through a co-branded product offering</h2> */}
          <h2>Research on how long-term artworks like Oslo’s &ldquo;Future Library&rdquo; can inspire futures thinking*</h2>

          <div className="tags">
            <span className="tag">Research Writing</span>
            <span className="tag">Published Article</span>
            <span className="tag">Digital Social Science</span>
            <span className="tag">Futures Studies</span>
          </div>

          <div className={projectPage.introPara}>
            <p>Most Dorsia restaurant bookings require a member to prepay a minimum spend in the app to secure the reservation. Through this exclusive partnership, Dorsia members can now opt into purchasing a bottle of Dom Perignon as their form of prepayment, replacing the minimum spend requirement and promoting cross-brand awareness.</p>
          </div>

          <div className={projectPage.details}>
            
            <div className={projectPage.team}>
              <h5>Team</h5>
              <ul>
                <li>Rachel Cranmer, co-author</li>
                <li><span className={projectPage.role}>Jenny Liu Zhang</span>, co-author</li>
              </ul>
            </div>

            <div className={projectPage.services}>
              <h5>Activities</h5>
              <ul>
                <li>Qualitative research coding</li>
                <li>Thematic analysis</li>
                <li>Causal layered analysis</li>
                <li>Literature review</li>
                <li>Social science writing</li>
              </ul>
            </div>

            <div className={projectPage.team}>
              <h5>Stakeholders</h5>
              <ul>
                <li>Journal of Futures Studies</li>
              </ul>
            </div>

            <div className={projectPage.team}>
              <h5>Timeline</h5>
              <ul>
                <li>9 months</li>
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