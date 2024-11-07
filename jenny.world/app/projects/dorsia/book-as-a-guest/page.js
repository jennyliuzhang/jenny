
import Image from "next/image";
import Link from "next/link";
import ProjectLayout from '../../project-layout';
import projectPage from "../../../styles/projectPage.module.css";
import projectStyles from "../../../styles/projects.module.css";
import Breadcrumbs from '../../../components/Breadcrumbs';
import Button from '../../../components/Button';


export default function ProjectPage() {
  const heroImage = "/projects/dorsia/book-as-a-guest/cover.jpg";

  const projectExplain = "A web app and widget for booking reservations without a standard Dorsia membership";

  const introPara = "The Book as a Guest product allows non-members of Dorsia to book reservations without having access to the app. I led the creation of the foundational UX and the creation of two distinct resulting products: a web-based booking widget for restaurants to install on their own websites, and a direct booking link for concierges and guest relations teams to book on behalf of their clientele. I also created user education portal to teach concierges and restauranteurs how to use the operator interface.";

  const projectDetails = (
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
          <li>Product strategy</li>
          <li>User flows</li>
          <li>Prototyping</li>
          <li>Website design</li>
          <li>Design QA</li>
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
          <li>6 weeks</li>
        </ul>
      </div>
      
    </div>
  );

  const projectHighlights = (
    <div>
      <Button title="See concierge portal" desc="" target="_blank" link="https://www.dorsia.com/bookonbehalf" isExternal="true"></Button>

      <p>This was a user education website I created for a downstream product of this project.</p>
    </div>
  );

  return (
    <ProjectLayout slug="book-as-a-guest" heroImage={heroImage} projectExplain={projectExplain} introPara={introPara} projectDetails={projectDetails} projectHighlights={projectHighlights}>

      <h2 className="centeredh2">Creative Process</h2>

      <div className={projectPage.creativeProcess}>

        <div className={projectPage.step}>
          <div className={projectPage.number}>1</div>
          <h5>Define Platform-Agnostic UX</h5>
          <p>I mapped a straightforward process for non-members to book a reservation, enter contact details, and commit a payment method. I also designed responsive error states, verification contingencies, and conditions for recognized phone numbers.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>2</div>
          <h5>Deliver Web-Based Widget</h5>
          <p>Partnering with the engineering lead, I helped implement a flexible, widget-based design that restaurants could embed on their sites. I assisted with CSS writing and design QA, ensuring quality and functionality across all stages.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>3</div>
          <h5>Deliver Booking Link Product</h5>
          <p>We also implemented a booking link that concierges and executive assistants could share directly with clients, who could then confirm reservations with their payment information. This approach empowered end-users and introduced a new B2B market for Dorsia.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>4</div>
          <h5>User Education & Support</h5>
          <p>I developed an informational portal for concierges and restaurant managers, providing step-by-step tutorials and benefits information, supporting user adoption and engagement with the tool.</p>
        </div>

      </div>

      <div className={projectPage.keyFeatures}>
        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>Reusable UX</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>At the core of the Book as a Guest tool is a simple, three-step process: select a reservation, verify contact details, and confirm payment. This UX, while intuitive, accommodated unique contingencies for both members and non-members, such as error handling and loyalty credit application. This efficient structure provided the foundation for multiple product applications, including the web widget and booking link.</p>
          </div>
        </div>

        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>Seamless Integration for Restaurants</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>The web widget allowed restaurant partners to offer exclusive Dorsia reservations directly on their websites. Working closely with engineering, I ensured the widget functioned smoothly across platforms and aligned with each restaurant’s branding. This integration contributed to a 19% increase in average check size for the TAO Group, showing the product’s impact on client engagement and revenue.</p>
          </div>
        </div>

        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>Empowering Concierge Bookings</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>The direct booking link is a simple solution within an existing user journey that helps concierges facilitate reservations while keeping payment for the end-user. The product helps concierges stay empowered to source reservations while removing the hassle of minimum spend commitments, opening new channels for Dorsia in a previously unexplored B2B opportunity.</p>
          </div>
        </div>
      </div>

      <h2 className="centeredh2">Project Takeaways</h2>

      <div className={projectPage.takeaways}>
        <div className={projectPage.takeaway}>
            <h3>Design-Development Collaboration is Crucial</h3>
            <p>Working closely with engineering from the start ensured that all design elements, from error handling to triggered texts, were thoroughly addressed. This lockstep communication resulted in a high-quality, resilient product that covered edge cases effectively.</p>
        </div>

        <div className={projectPage.takeaway}>
            <h3>Responsive, Reusable Design Expands Reach</h3>
            <p>Creating a flexible, reusable UX allowed us to develop multiple tools from a single design foundation. Ensuring the product was fully responsive also allowed seamless bookings across all devices and browsers. This approach not only saved time but also proved that simplicity and scalability can coexist.</p>
        </div>

        <div className={projectPage.takeaway}>
            <h3>Simple UX Adaptations Can Unlock Market Potential</h3>
            <p>By repurposing the Dorsia reservation experience for non-members and concierges, we discovered a valuable B2B opportunity. This simple UX adjustment—designing for a different type of user—expanded Dorsia’s reach into the hospitality sector, creating a scalable new avenue for brand engagement and business growth.</p>
        </div>
      </div>
    </ProjectLayout>
  );
}