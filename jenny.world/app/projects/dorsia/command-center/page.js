import Image from "next/image";
import Link from "next/link";
import ProjectLayout from '../../project-layout';
import projectPage from "../../../styles/projectPage.module.css";
import projectStyles from "../../../styles/projects.module.css";
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function ProjectPage() {

  const heroImage = "/projects/dorsia/command-center/cover.jpg";

  const projectExplain = "Equipping hosts, servers, and maitre d's to manage Dorsia reservations quickly on the floor";

  const introPara = "The Reservation Command Center is a B2B tool created for restaurant hosts, maitre ds, and servers to manage Dorsia reservations seamlessly. This tool consolidates complex reservation details—including minimum spend requirements, party sizes, and point-of-sale (POS) connections—into a direct interface designed for use in fast-paced restaurant environments.";

  const projectDetails = (
    <div className={projectPage.details}>
      <div className={projectPage.team}>
        <h5>Team</h5>
        <ul>
          <li><span className={projectPage.role}>Jenny Liu Zhang</span>, design lead</li>
          <li>Joshua Stern, product lead</li>
          <li>Jessica Demakos, hospitality partner</li>
          <li>J.B. Krishner, hospitality partner</li>
        </ul>
      </div>

      <div className={projectPage.services}>
        <h5>Activities</h5>
        <ul>
          <li>User research</li>
          <li>Product strategy</li>
          <li>User flows</li>
          <li>Prototyping</li>
          <li>Visual design</li>
        </ul>
      </div>

      <div className={projectPage.team}>
        <h5>Stakeholders</h5>
        <ul>
          <li>Dorsia Hospitality Team</li>
          <li>Restaurant Partners of Dorsia</li>
        </ul>
      </div>

      <div className={projectPage.team}>
        <h5>Timeline</h5>
        <ul>
          <li>3 weeks</li>
        </ul>
      </div>
      
    </div>
  );
  
  return (
    <ProjectLayout slug="command-center" heroImage={heroImage} projectExplain={projectExplain} introPara={introPara} projectDetails={projectDetails}>
      <h2 className="centeredh2">Creative Process</h2>

      <div className={projectPage.creativeProcess}>

        <div className={projectPage.step}>
          <div className={projectPage.number}>1</div>
          <h5>Unpack System Limitations for POS Integration</h5>
          <p>Close collaboration with the hospitality, product, and engineering teams allowed me to understand the POS connection process for in-app check management. It was crucial that I mastered the functional requirements of an operator dashboard.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>2</div>
          <h5>On-Site Observation</h5>
          <p>I visited One White Street in NYC to shadow the floor staff and gain a firsthand understanding of the complexities they face in managing reservations. Speed and transactional accuracy are imperative in restaurant environments. This insight helped to inform an intuitive interface.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>3</div>
          <h5>Design a Responsive, Real-Time Dashboard</h5>
          <p>I structured the Command Center as a color-coded iPad interface with auto-refresh and manual refresh options, ensuring that incoming reservations and their status updates are immediately visible to the user.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>4</div>
          <h5>Develop Clear Visual Cues for Urgent Actions</h5>
          <p>Color coding, with blinking tiles for urgent cases, were also implemented to simplify the tracking of unconnected or modified checks, making it easy for staff to spot and prioritize reservations needing attention.</p>
        </div>

      </div>

      <div className={projectPage.keyFeatures}>
        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>Color-Coding for Urgency</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>The Command Center’s interface uses color and blinking animations to highlight reservations requiring action. For example, unconnected checks are displayed in red and blink if urgent, allowing staff to quickly identify and resolve issues with minimal screen interaction. This visual hierarchy ensures that essential information stands out, supporting efficient floor management.</p>
          </div>
        </div>

        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>Scannable Groupings for Complex Check Details</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>Each check in the Command Center displays a range of essential information—party size, guest name, connection status, reservation time, minimum spend per person, total minimum, and POS tab name—in clearly defined visual groupings. While simplifying all these details was challenging, strategic grouping made each reservation scannable, helping staff absorb and act on critical information efficiently.</p>

            <p>This design pattern remained consistent through the check editing journey if the server needed to update table's party size, for example, and also led to how check details were grouped in future iterations of member-facing check designs.</p>
          </div>
        </div>

        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>Real-Time Tracking</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>The dashboard offers both auto-refresh and manual refresh options, keeping incoming and updated reservations immediately visible. This real-time functionality is crucial in a fast-paced setting, allowing hosts and servers to maintain an accurate view of reservation statuses, even during peak times. The real-time nature also enabled live editing of reservation details to maintain accuracy both on the floor and in the Dorsia system.</p>
          </div>
        </div>
      </div>

      <h2 className="centeredh2">Project Takeaways</h2>

      <div className={projectPage.takeaways}>
        <div className={projectPage.takeaway}>
            <h3>Empathy Can Drive Usability Design</h3>
            <p>Visiting a live restaurant environment provided valuable insights into the challenges faced by floor staff, enabling me to create a tool that addresses their specific pain points. This experience reinforced the value of on-site observation in designing effective, user-centered solutions.</p>
        </div>

        <div className={projectPage.takeaway}>
            <h3>Fast-Paced Usage Requires Strict Visual Hierarchy</h3>
            <p>Using color and motion as visual cues proved instrumental in managing urgent and complex reservation requirements. This approach underscored the importance of a clear visual hierarchy to support quick and accurate actions, especially in high-stakes B2B products.</p>
        </div>

        <div className={projectPage.takeaway}>
            <h3>Working with Practitioners Ensures Practical Solutions</h3>
            <p>Working closely with the product, hospitality, and engineering enabled the Command Center’s interface to directly translate needs and functions of the POS systems. By considering technical constraints early, the design process eliminated any misunderstandings.</p>
        </div>
      </div>
    </ProjectLayout>
  );
}