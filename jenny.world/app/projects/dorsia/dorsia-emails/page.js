import Image from "next/image";
import Link from "next/link";
import ProjectLayout from '../../project-layout';
import projectPage from "../../../styles/projectPage.module.css";
import projectStyles from "../../../styles/projects.module.css";
import Breadcrumbs from '../../../components/Breadcrumbs';
import Button from '../../../components/Button';

export default function ProjectPage() {

  const heroImage = "/projects/dorsia/dorsia-emails/cover.gif";

  const projectExplain = "Polished yet playful email designs for members-only communications";

  const introPara = "I worked with the Dorsia content team to upgrade our email communications' design and content standards. I developed the visuals, templates, and HTML builds for email campaigns in Braze, establishing a flexible illustration and design system across six primary email types. My work ensured each campaign aligns with Dorsia’s minimalist yet cheeky identity while staying organized and engaging for readers.";

  const projectDetails = (
    <div className={projectPage.details}>
      <div className={projectPage.team}>
        <h5>Team</h5>
        <ul>
          <li><span className={projectPage.role}>Jenny Liu Zhang</span>, design lead</li>
          <li>Husein Esufally, designer</li>
          <li>Isabella Koopman, designer</li>
          <li>Nate Storey, editorial lead</li>
          <li>Abby Saldana, editor</li>
        </ul>
      </div>

      <div className={projectPage.services}>
        <h5>Activities</h5>
        <ul>
          <li>Graphic design</li>
          <li>Content design</li>
          <li>Illustration</li>
          <li>Workspace organization</li>
          <li>Workflow setup</li>
        </ul>
      </div>

      <div className={projectPage.team}>
        <h5>Stakeholders</h5>
        <ul>
          <li>Dorsia Marketing Team</li>
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
  );

  const projectHighlights = (
    <Button title="See my Dorsia Style Guide" desc="" target="_blank" link="/projects/dorsia/style-guide" isExternal="false"></Button>
  );
  
  return (
    <ProjectLayout slug="dorsia-emails" heroImage={heroImage} projectExplain={projectExplain} introPara={introPara} projectDetails={projectDetails} projectHighlights={projectHighlights}>
      <h2 className="centeredh2">Creative Process</h2>

      <div className={projectPage.creativeProcess}>

        <div className={projectPage.step}>
          <div className={projectPage.number}>1</div>
          <h5>Implementing Bento Philosophy</h5>
          <p>Using the Dorsia <Link href="/projects/dorsia/style-guide/">Bento</Link> design philosophy, I designed email headers, body sections, and footers, establishing a clean and organized visual hierarchy with playful illustration touches.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>2</div>
          <h5>Mocking Up Templates</h5>
          <p>I created customized structures for six email types, including Venue Launches and The Weekend Edit, to give each campaign a clear, distinctive feel while staying true to Dorsia’s brand.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>3</div>
          <h5>HTML Development in Braze</h5>
          <p>By coding templates in Braze from scratch, I ensured that all emails rendered beautifully across platforms, enhancing both the brand’s accessibility and aesthetic appeal.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>4</div>
          <h5>Optimizing Workspace &amp; Workflow</h5>
          <p>I implemented a structured Figma workspace and streamlined workflows, making the process of creating and updating emails efficient for the team.</p>
        </div>

      </div>

      <div className={projectPage.keyFeatures}>
        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>Organized and Scannable</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>Email communications need to be "snackable," even if they are dense with information. To achieve this, I crafted visually organized emails using clean lines, ample spacing, and bold typography and imagery, enabling readers to navigate chunks of content easily and nonlinearly when necessary. Playful illustrations add a touch of Dorsia’s personalit and provide anchors for information.</p>
          </div>
        </div>

        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>Cheeky and Engaging</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>Dorsia’s editorial content—a major value proposition of the brand—is dialed-in, smart, and witty, proven by our emails' ~65% open rate. These campaign designs amplify this quality visually by supporting the tone of the writing through insider-savvy illustrations and graphics. The light customizations, from unique weekly color treatments to my niche art direction instructions for venue launch hero imagery, help make each email feel like an exclusive update, reinforcing the brand’s in-the-know appeal.</p>
          </div>
        </div>

        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>Customizable and Scalable Templates</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>I created unique email templates in Braze for all six email types. Each design had subtle differences in their hero image setup and content sections, but remained visually consistent. To accommodate quick adaptations—or cases when a limited-edition email needed to be published—my template system was scalable so the marketing team could easily repurpose templates. This system also set the pattern for other transactional emails like welcome messages and birthday notifications, emppowering cohesion across all member touchpoints.</p>
          </div>
        </div>

      </div>

      <h2 className="centeredh2">Project Takeaways</h2>

      <div className={projectPage.takeaways}>
        <div className={projectPage.takeaway}>
            <h3>The Art of Aligning Visuals to Editorial Voice</h3>
            <p>Crafting emails that reflect the wit and sharpness of Dorsia’s editorial voice reminded me of the power of visual design to strengthen written content, making every touchpoint feel intentional and aligned.</p>
        </div>

        <div className={projectPage.takeaway}>
            <h3>Commit to Aesthetic Excellence</h3>
            <p>We decided to focus on high-quality aesthetics in our email templates, even if it meant more development work and team training. This commitment ensured each email matched Dorsia’s visual standards, reinforcing brand integrity.</p>
        </div>

        <div className={projectPage.takeaway}>
            <h3>Organized Systems Foster Brand Consistency</h3>
            <p>To maintain brand integrity in practice, I had to help upskill the marketing team and set up systems in Figma and Braze to streamline the process for future email creation, ensuring that email designs are maintained consistently as Dorsia scales.</p>
        </div>

      </div>
    </ProjectLayout>
  );
}