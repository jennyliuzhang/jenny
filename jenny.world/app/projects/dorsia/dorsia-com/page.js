import Image from "next/image";
import Link from "next/link";
import ProjectLayout from '../../project-layout';
import projectPage from "../../../styles/projectPage.module.css";
import projectStyles from "../../../styles/projects.module.css";
import Breadcrumbs from '../../../components/Breadcrumbs';
import Button from '../../../components/Button';

export default function ProjectPage() {

  const heroImage = "/projects/dorsia/dorsia-com/cover.jpg";

  const projectExplain = "Simple and elegant website for the exclusive platform at the intersection of luxury hospitality and tech";

  const introPara = "Dorsia.com serves as the public-facing website for Dorsia’s exclusive, members-only platform. This elegant and minimalist website communicates the basics of membership, showcases restaurant partners, and directs visitors to download the app or connect with the Dorsia team.";

  const projectDetails = (
    <div className={projectPage.details}>
      <div className={projectPage.team}>
        <h5>Team</h5>
        <ul>
          <li><span className={projectPage.role}>Jenny Liu Zhang</span>, design lead</li>
          <li>Mitchell Hart, designer</li>
          <li>Nate Storey, editorial lead</li>
          <li>Abby Saldana, editor</li>
        </ul>
      </div>

      <div className={projectPage.services}>
        <h5>Activities</h5>
        <ul>
          <li>Product strategy</li>
          <li>Website design</li>
          <li>Front-end development</li>
          <li>Content design</li>
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
          <li>4 weeks</li>
        </ul>
      </div>
      
    </div>
  );

  const projectHighlights = (
    <Button title="dorsia.com" desc="" target="_blank" link="https://dorsia.com/" image="/projects/logos/dorsia.png" isExternal="true"></Button>
  );
  
  return (
    <ProjectLayout slug="dorsia-com" heroImage={heroImage} projectExplain={projectExplain} introPara={introPara} projectDetails={projectDetails} projectHighlights={projectHighlights}>
      <h2 className="centeredh2">Creative Process</h2>

      <div className={projectPage.creativeProcess}>

        <div className={projectPage.step}>
          <div className={projectPage.number}>1</div>
          <h5>Simplify Goals and Message</h5>
          <p>The website project changed hands a few times and grew increasingly complex in scope. When it came across my plate, my product lead and I stripped the site down to the essentials to convey the purpose and offerings of the members-only platform.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>2</div>
          <h5>Direct Design and Development in Webflow</h5>
          <p>I designed and developed the original site directly in Webflow, bypassing lengthy design processes by building directly in the platform. This helped expedite the initial launch and removed the need for engineering.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>3</div>
          <h5>Stakeholder Iteration</h5>
          <p>I reviewed the website with company leadership to ensure that it met their aims of communicating Dorsia's value proposition without revealing too much information. The insight was to keep an air of mystery in the content design..</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>4</div>
          <h5>CMS Implementation</h5>
          <p>To manage the restaurant partners on the platform, I built a CMS that mirrored the internal database of partners maintained by our hospitality team. Restaurants were organized by their city market.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>5</div>
          <h5>Transition to Framer in 2023</h5>
          <p>By 2023, Framer became known as a stronger tool for marketing websites, so a fellow designer and I migrated the site, retaining the original design and CMS data to ensure an uninterrupted experience. We implemented other improvements like component-based responsiveness and animated page transitions.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>6</div>
          <h5>Team Maintenance</h5>
          <p>The website continued being maintained by the design team through my departure from the company. In downtime between other projects, we also explored solutions to house other content, like Dorsia's weekly newsletter, on the platform and CMS automation.</p>
        </div>

      </div>

      <div className={projectPage.keyFeatures}>
        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>Minimalism to Enhance Mystery</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>The website’s minimalist approach reflects Dorsia’s brand ethos, creating an air of secrecy that aligns with its members-only nature. By keeping content and visuals intentionally sparse, the design strengthens the allure of exclusivity and lets key messaging, such as the introductory tagline and direct CTAs, take center stage.</p>
          </div>
        </div>

        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>Direct Calls-to-Action</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>Dorsia.com prioritizes a simple user journey, directing visitors to either connect with the team or download the app. This clarity in navigation minimizes distractions, ensuring that potential members can take action easily and are only exposed to essential brand information.</p>
          </div>
        </div>

        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>Restaurant Inventory</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>The CMS-driven structure allows Dorsia.com to display restaurant partners by city and manage seasonal markets effortlessly. This functionality supports a flexible browsing experience, helping visitors explore available locations and enhancing the site’s scalability as the Dorsia inventory grows.</p>
          </div>
        </div>
      </div>

      <h2 className="centeredh2">Project Takeaways</h2>

      <div className={projectPage.takeaways}>
        <div className={projectPage.takeaway}>
            <h3>Direct-to-Development Can Be Efficient</h3>
            <p>By designing and building the initial site directly in Webflow and later Framer, we bypassed an extended design phase, allowing for a faster launch and iteration. This approach was crucial for Dorsia's stage at the time—leadership, sales, and our hospitality team were actively pitching and closing deals, so a web presence was imperative.</p>
        </div>

        <div className={projectPage.takeaway}>
            <h3>Tradeoffs in Designer-Led Development</h3>
            <p>Building and maintaining Dorsia.com in tools like Webflow and Framer allowed for quick iteration and design control. However, without integration into the engineering database, updates required some manual maintenance by our team. This projects underscores the tradeoffs of managing marketing websites outside of product; streamlined design control can sometimes come at the cost of long-term operational efficiency.</p>
        </div>

        <div className={projectPage.takeaway}>
            <h3>Simplicity Can Amplify Brand Appeal</h3>
            <p>The original project kickoffs tried to integrate sales materials, partnership information, and tutorials when in reality, keeping it simple was actually desirable. Simplifying the website’s content to only the essentials created a sense of mystery that heightened the appeal of Dorsia’s exclusive membership. This project reinforced that sometimes, less really is more when it comes to high-end branding.</p>
        </div>
      </div>
    </ProjectLayout>
  );
}