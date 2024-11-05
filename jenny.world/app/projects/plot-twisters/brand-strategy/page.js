import Image from "next/image";
import Link from "next/link";
import ProjectLayout from '../../project-layout';
import projectPage from "../../../styles/projectPage.module.css";
import projectStyles from "../../../styles/projects.module.css";
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function ProjectPage() {

  const heroImage = "/projects/plot-twisters/brand-strategy/cover.jpg";

  const projectExplain = "Defining the narrative, identity, and aesthetic of a global brand in the hospitality tech space";

  const introPara = "Most Dorsia restaurant bookings require a member to prepay a minimum spend in the app to secure the reservation. Through this exclusive partnership, Dorsia members can now opt into purchasing a bottle of Dom Perignon as their form of prepayment, replacing the minimum spend requirement and promoting cross-brand awareness.";

  const projectDetails = (
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
  );
  
  return (
    <ProjectLayout slug="brand-strategy" heroImage={heroImage} projectExplain={projectExplain} introPara={introPara} projectDetails={projectDetails}>
      <h2 className="centeredh2">Creative Process</h2>

      <div className={projectPage.creativeProcess}>

        <div className={projectPage.step}>
          <div className={projectPage.number}>1</div>
          <h5>Identify Business Opportunity</h5>
          <p>Dorsia and Dom Perignon share a luxury-valuing audience, revealing a mutually beneficial co-brand opportunity. Dorsia also had an existing UX issue: the challenge of meeting the minimum spend. </p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>2</div>
          <h5>UX Design with Stakeholder</h5>
          <p>Through 2 rounds of iterations, we integrated the Dom Perignon product via in-app marketing and conversion, creating reusable product infrastructure for future collaborations.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>3</div>
          <h5>Product Design &amp; QA</h5>
          <p>Created user education, visual assets, and interface components. Worked with engineers to accommodate edge cases and conditionals, including smaller tables and custom reservations.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>4</div>
          <h5>Marketing Campaign</h5>
          <p>Collaborated with Dom Perignon marketing team on product artwork to co-promote the feature across in-app channels, email, and social media. Helped create the go-to-market launch strategy.</p>
        </div>

      </div>

      <div className={projectPage.keyFeatures}>
        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>Champagne as Payment</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>Replacing the Dorsia minimum spend with a bottle of Dom Perignon offers users a unique and luxurious payment alternative. This solution introduces a new paradigm for paying to secure a reservation, transforming a transactional requirement into an invitation for a celebration.</p>
          </div>
        </div>

        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>Ethos of Elevation</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>A prime example of strategic co-branding, the alignment of the prestige of Dom Perignon with Dorsia's high-end hospitality experience reinforces the image of both brands in user minds. Every piece of marketing and user interaction showcased the luxury lifestyle valued by both audiences.</p>
          </div>
        </div>

        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>Operational Ease</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>The product was seamlessly integrated into Dorsia's existing booking flow and infrastructure. Close collaboration with engineers ensured all components could be reused for similar payment alternatives down the line, easing internal adoption of the feature and making it a new selling point for future brand partners.</p>
          </div>
        </div>
      </div>

      <h2 className="centeredh2">Project Takeaways</h2>

      <div className={projectPage.takeaways}>
        <div className={projectPage.takeaway}>
            <h3>Behavior Shifts Require User Education</h3>
            <p>A good experience is made of little memories that bring happiness. I strive to design the way I give gifts to friends: with attention to the details. Whether through a clever interaction or beautiful visual detail, I like to invite wonder and joy into my work.</p>
        </div>

        <div className={projectPage.takeaway}>
            <h3>Consider Operational Constraints Early</h3>
            <p>A good experience is made of little memories that bring happiness. I strive to design the way I give gifts to friends: with attention to the details. Whether through a clever interaction or beautiful visual detail, I like to invite wonder and joy into my work.</p>
        </div>

        <div className={projectPage.takeaway}>
            <h3>Future-Proofing Product Upgrades</h3>
            <p>A good experience is made of little memories that bring happiness. I strive to design the way I give gifts to friends: with attention to the details. Whether through a clever interaction or beautiful visual detail, I like to invite wonder and joy into my work.</p>
        </div>
      </div>
    </ProjectLayout>
  );
}