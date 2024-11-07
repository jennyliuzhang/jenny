import Image from "next/image";
import Link from "next/link";
import ProjectLayout from '../../project-layout';
import projectPage from "../../../styles/projectPage.module.css";
import projectStyles from "../../../styles/projects.module.css";
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function ProjectPage() {

  const heroImage = "/projects/dorsia/shift-editor/cover.jpg";

  const projectExplain = "A web app and widget for booking reservations without a standard Dorsia membership";

  const introPara = "I designed a restaurant availability shift editor for Dorsia, enabling our hospitality team to manage and update booking availability seamlessly. This tool streamlines shift creation, duplication, and edits, providing a top-level view of seatings across restaurant shifts and simplifying a previously complex and manual process.";

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
    <ProjectLayout slug="shift-editor" heroImage={heroImage} projectExplain={projectExplain} introPara={introPara} projectDetails={projectDetails}>
      <h2 className="centeredh2">Creative Process</h2>

      <div className={projectPage.creativeProcess}>

        <div className={projectPage.step}>
          <div className={projectPage.number}>1</div>
          <h5>Competitive Research</h5>
          <p>I analyzed similar interfaces from industry leaders like SevenRooms and Resy OS, identifying best practices, removing complexity, and pinpointing areas unique to Dorsia, such as its minimum spend feature.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>2</div>
          <h5>User Context Gathering</h5>
          <p>I collaborated closely with the hospitality team to understand their primary pain points, learning about the specific inventory management challenges they faced daily.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>3</div>
          <h5>First Principles UX Design</h5>
          <p>By iterating on a calendar layout, I adapted the interface to work within the day-of-week template structure that restaurants commonly use, creating a system that felt intuitive and easy to navigate.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>2</div>
          <h5>User Walkthroughs</h5>
          <p>I conducted detailed walkthroughs to address edge cases like holiday shifts and small yet critical edits, ensuring the tool could handle complex, real-world scenarios effectively.</p>
        </div>

      </div>

      <div className={projectPage.keyFeatures}>
        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>Visual and Quick-to-Use Calendar Layout</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>The shift editor interface is a calendar-based layout, allowing users to see availability across shifts and make edits on individual or bulk days with ease. Shifts are visually segmented, enabling the Hospitality team to track availability, including critical details like seating times and minimum spends, at a glance. This view gives the team a real-time understanding of availability status, simplifying efforts to market or promote open time slots.</p>
          </div>
        </div>

        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>Shift-Based Editing to Reflect Existing Heuristics</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>By grouping seatings under top-level shifts (e.g., “Lunch” and “Dinner”), the tool aligns with the restaurant’s natural scheduling rhythm, making it straightforward to edit, duplicate, or override shifts in bulk. This approach not only eases updates but also enhances consistency across repeated seatings, allowing the team to handle recurring availabilities without duplicating manual work each time they need to make a minor update.</p>
          </div>
        </div>

        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>Attention to Edge Cases</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>Edge cases like holiday scheduling and other unique variations are often the most challenging aspects of availability management. My design addresses this by offering flexible, granular controls, allowing the team to adjust for non-standard days effortlessly. The editor also supports nuanced updates to minimize the need for complete re-entry, enhancing both the team’s speed and confidence in handling special requests.</p>
          </div>
        </div>
      </div>

      <h2 className="centeredh2">Project Takeaways</h2>

      <div className={projectPage.takeaways}>
        <div className={projectPage.takeaway}>
            <h3>Lockstep Cross-Functional Collaboration is Possible</h3>
            <p>Working directly with the hospitality team was key to understanding the full scope of their needs. Having structured conversations early on helped avoid assumptions, allowing me to design a tool truly adapted to their workflow.</p>
        </div>

        <div className={projectPage.takeaway}>
            <h3>Design for the Novice User</h3>
            <p>By anticipating the potential for a restaurant-facing interface, I ensured that every design choice remained adaptable for future audiences. This forward-thinking approach helps the product remain valuable as Dorsia grows its partnerships and product capabilities.</p>
        </div>

        <div className={projectPage.takeaway}>
            <h3>Follow Your Intuition</h3>
            <p>Creating a shift-based organization allowed for a clearer, more intuitive interface, empowering users to manage availability quickly. This project reinforced the importance of designing around natural workflows to improve both user experience and operational efficiency.</p>
        </div>
      </div>
    </ProjectLayout>
  );
}