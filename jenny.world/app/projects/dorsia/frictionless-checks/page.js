import Image from "next/image";
import Link from "next/link";
import ProjectLayout from '../../project-layout';
import projectPage from "../../../styles/projectPage.module.css";
import projectStyles from "../../../styles/projects.module.css";
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function ProjectPage() {

  const heroImage = "/projects/dorsia/frictionless-checks/cover.jpg";

  const projectExplain = "View, track, and manage the check for your meal in real time in your Dorsia app";

  const introPara = "Frictionless Checks is an innovative Dorsia product that allows members to manage their check in real time during their dining experience. It automatically tracks minimum spend requirements, applies available credits, and facilitates an automatic end-of-meal charge, freeing users from the typical check-waiting process. This proto-version of Dorsia Pay introduced a novel, streamlined dining experience for Dorsia members.";

  const projectDetails = (
    <div className={projectPage.details}>
            
            <div className={projectPage.team}>
              <h5>Team</h5>
              <ul>
                <li><span className={projectPage.role}>Jenny Liu Zhang</span>, design lead</li>
                <li>Joshua Stern, product lead</li>
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
  );

  return (
    <ProjectLayout slug="frictionless-checks" heroImage={heroImage} projectExplain={projectExplain} introPara={introPara} projectDetails={projectDetails}>
      <h2 className="centeredh2">Creative Process</h2>

      <div className={projectPage.creativeProcess}>

        <div className={projectPage.step}>
          <div className={projectPage.number}>1</div>
          <h5>Build Off Familiar Check Heuristics</h5>
          <p>I developed initial wireframes that mimicked a traditional check structure, introducing the minimum spend in a way that would feel familiar and logical to users. These mockups helped set the foundation for a simple, linear check design that still conveyed essential information about spend requirements and real-time updates.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>2</div>
          <h5>Iterative Prototyping &amp; Design Reviews</h5>
          <p>I built interactive prototypes and conducted iterative design reviews to assess usability, refining elements like spend tracking, tip options, and automatic charges. These reviews ensured the design remained user-friendly and visually aligned with Dorsia’s brand.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>3</div>
          <h5>Accommodate Edge Cases &amp; QA</h5>
          <p>Working closely with engineering, I addressed technical edge cases, such as failed connections, missed minimum spend targets, and manual charge scenarios (not all restaurants had check integration capability). This ensured that every possible scenario was considered.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>4</div>
          <h5>Polish for Business Feedback</h5>
          <p>Business stakeholders provided input on features like the default 20% tip to promote positive dining experiences and not overselling the idea of "hitting the minimum" to maintain luxury branding. This feedback guided design decisions that reflected Dorsia’s elevated brand positioning.</p>
        </div>

      </div>

      <div className={projectPage.keyFeatures}>
        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>Automatic Card Charge</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>The automatic charge feature represents a significant shift in user behavior, allowing members to leave the restaurant without waiting for the final bill. To support this, clear messaging—“We’ll automatically charge your card”—was prominently placed at the bottom of the check, reassuring users that everything was handled seamlessly, creating a unique Dorsia benefit that reinforces white-glove hospitality and convenience.</p>
          </div>
        </div>

        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>Familiar Check Anatomy</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>Frictionless Checks adopts the familiar structure of a traditional dining check, with a linear layout that places the total amount at the bottom. This design helps members intuitively understand the interface, while discreetly introducing features like minimum spend tracking. By balancing familiarity with new elements, the design provides clarity without overwhelming the user with additional math or details.</p>
          </div>
        </div>

        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>Real-Time Updates</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>The check dynamically updates in real time as orders are added in the POS, displaying the latest spend total, remaining minimum balance, and itemizations throughout the dining experience. This live transparency instills user confidence by providing up-to-the-moment accuracy, making it easy for members to monitor their dining status without having to request updates from staff.</p>
          </div>
        </div>
      </div>

      <h2 className="centeredh2">Project Takeaways</h2>

      <div className={projectPage.takeaways}>
        <div className={projectPage.takeaway}>
            <h3>Real-Time Updates Are Luxurious</h3>
            <p>A live-updating check in the member’s app was crucial in cultivating a sense of transparency and trust, which in turn feels like a privilege, especially in complicated restaurant environments where transactions and communications can easily be subject to error. Immediate feedback can deepen engagement and elevate the dining experience.</p>
        </div>

        <div className={projectPage.takeaway}>
            <h3>Build On Familiar Heuristics</h3>
            <p>Designing Frictionless Checks required blending familiar UX elements with Dorsia’s unique features like minimum spend tracking and automatic end-of-meal payments. This experience underscored the value of grounding innovative products in familiar frameworks, making it easier for users to embrace new behaviors.</p>
        </div>

        <div className={projectPage.takeaway}>
            <h3>Being Direct Supports Behavior Change</h3>
            <p>The design literally says, "We'll automatically charge your card. You can just leave when you’re done." By giving direct instruction that members could simply leave without asking for a check, we effectively facilitated behavior shift, underscoring how straightforward messaging may be the best route for novel product features.</p>
        </div>
      </div>
    </ProjectLayout>
  );
}