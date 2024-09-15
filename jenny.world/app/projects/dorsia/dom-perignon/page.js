import Image from "next/image";
import Link from "next/link";
import projectPage from "../../../styles/projectPage.module.css";

export default function Page() {
  return (
    <main className={projectPage.projectPage}>
      <h2 className="breadcrumbh2"><Link href="/projects" className="breadcrumb">Projects</Link><Link href="/projects/dorsia" className="breadcrumb">Dorsia</Link>Reserve with Dom Perignon</h2>
      
      <Image
        className={projectPage.projectHero}
        src="/projects/dorsia/dom-perignon/cover.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={projectPage.projectIntro}>
        <div className={projectPage.introContent}>
        <h1>Reserve with Dom Perignon</h1>
          <h2>Innovating on minimum spend payments through a co-branded alternative</h2>
          {/* <h2>Secure a hard-to-get reservation by buying a bottle of Dom Perignon for the table beforehand</h2> */}

          <div className="tags">
            <span className="tag">Mobile App Design</span>
            <span className="tag">Payments</span>
            <span className="tag">User Education</span>
            <span className="tag">Co-branding</span>
            <span className="tag">Pitch Deck</span>
          </div>

          <div className={projectPage.introPara}>
            <p>Most Dorsia restaurant bookings require a member to prepay a minimum spend in the app to secure the reservation. Through this exclusive partnership, Dorsia members can now opt into purchasing a bottle of Dom Perignon as their form of prepayment, replacing the minimum spend requirement and promoting cross-brand awareness.</p>
          </div>

          <div className={projectPage.details}>
            
            <div className={projectPage.team}>
              <h5>Team</h5>
              <ul>
                <li><span className={projectPage.role}>Jenny Liu Zhang</span> (design lead)</li>
                <li>Catie Case (BD lead)</li>
                <li>Ophra Werde (product lead)</li>
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
              </ul>
            </div>

            <div className={projectPage.team}>
              <h5>Stakeholders</h5>
              <ul>
                <li>Dorsia Leadership</li>
                <li>Dorsia Marketing Team</li>
                <li>Dom Perignon</li>
              </ul>
            </div>

            <div className={projectPage.team}>
              <h5>Timeline</h5>
              <ul>
                <li>3 weeks</li>
              </ul>
            </div>
            
          </div>

          
        </div>
      </div>

      <h2 className={`centeredh2 ${projectPage.projectPageh2}`}>Creative Process</h2>

      <div className={projectPage.creativeProcess}>

        <div className={projectPage.step}>
          <div className={projectPage.number}>1</div>
          <h5>Identify Business Opportunity</h5>
          <p>Dorsia and Dom Perignon share an audience that values luxury, enabling a strategic collaboration that aligns with both brands' values. Simultnaeously, and existing UX issue was the challenge of meeting the minimum spend. </p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>2</div>
          <h5>UX Design with Stakeholder</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel magna diam. Suspendisse et mollis odio. Vestibulum at felis mollis, rutrum enim ac, porta massa.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>3</div>
          <h5>Product Design QA</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel magna diam. Suspendisse et mollis odio. Vestibulum at felis mollis, rutrum enim ac, porta massa.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>4</div>
          <h5>Marketing Campaign</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel magna diam. Suspendisse et mollis odio. Vestibulum at felis mollis, rutrum enim ac, porta massa.</p>
        </div>

      </div>

      <div className={projectPage.keyFeatures}>
        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Feature</h4>
            <h1>Ethos of Elevation</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel magna diam. Suspendisse et mollis odio. Vestibulum at felis mollis, rutrum enim ac, porta massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel magna diam. Suspendisse et mollis odio. Vestibulum at felis mollis, rutrum enim ac, porta massa.</p>
          </div>
        </div>
      </div>

      <h2 className={`centeredh2 ${projectPage.projectPageh2}`}>Project Takeaways</h2>

      <div className={projectPage.takeaways}>
        <div className={projectPage.takeaway}>
            <h3>Surprise and Delight</h3>
            <p>A good experience is made of little memories that bring happiness. I strive to design the way I give gifts to friends: with attention to the details. Whether through a clever interaction or beautiful visual detail, I like to invite wonder and joy into my work.</p>
        </div>

        <div className={projectPage.takeaway}>
            <h3>Surprise and Delight</h3>
            <p>A good experience is made of little memories that bring happiness. I strive to design the way I give gifts to friends: with attention to the details. Whether through a clever interaction or beautiful visual detail, I like to invite wonder and joy into my work.</p>
        </div>

        <div className={projectPage.takeaway}>
            <h3>Surprise and Delight</h3>
            <p>A good experience is made of little memories that bring happiness. I strive to design the way I give gifts to friends: with attention to the details. Whether through a clever interaction or beautiful visual detail, I like to invite wonder and joy into my work.</p>
        </div>
      </div>

    </main>
  );
}