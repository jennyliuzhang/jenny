import Image from "next/image";
import Link from "next/link";
import ProjectLayout from '../../project-layout';
import projectPage from "../../../styles/projectPage.module.css";
import projectStyles from "../../../styles/projects.module.css";
import Breadcrumbs from '../../../components/Breadcrumbs';
import Button from '../../../components/Button';

export default function ProjectPage() {

  const heroImage = "/projects/dorsia/style-guide/cover.jpg";

  const projectExplain = "Defining the narrative, identity, and aesthetic of a global brand in the hospitality tech space";

  const introPara = "The Dorsia Style Guide is a comprehensive 100-page manual that sets the tone and visual identity for all Dorsia brand touchpoints. It provides foundational guidelines and patterns around tone, voice, and visuals, ensuring brand consistency across all platforms and communications for both consumer and business audiences.";

  const projectDetails = (
    <div className={projectPage.details}>
      <div className={projectPage.team}>
        <h5>Team</h5>
        <ul>
          <li><span className={projectPage.role}>Jenny Liu Zhang</span>, design lead</li>
          <li>Husein Esufally, designer</li>
          <li>Mitchell Hart, designer</li>
          <li>Pat White, designer</li>
          <li>Isabella Koopman, designer</li>
          <li>Nate Storey, editorial lead</li>
          <li>Abby Saldana, editor</li>
        </ul>
      </div>

      <div className={projectPage.services}>
        <h5>Activities</h5>
        <ul>
          <li>Narrative design</li>
          <li>Graphic design</li>
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
          <li>10 weeks</li>
        </ul>
      </div>
      
    </div>
  );

  const projectHighlights = (
    <Button title="View 100-page PDF" desc="" target="_blank" link="/projects/dorsia/style-guide/style-guide.pdf" isExternal="true"></Button>
  );
  
  return (
    <ProjectLayout slug="style-guide" heroImage={heroImage} projectExplain={projectExplain} introPara={introPara} projectDetails={projectDetails} projectHighlights={projectHighlights}>
      <h2 className="centeredh2">Creative Process</h2>

      <div className={projectPage.creativeProcess}>

        <div className={projectPage.step}>
          <div className={projectPage.number}>1</div>
          <h5>Gather Brand Essence Insights</h5>
          <p>I analyzed Dorsia’s core identity and aspirations, distilling its essence into stories and narratives that resonate with diverse audiences while grounding the brand’s unique positioning.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>2</div>
          <h5>Define Story, Voice, and Tone</h5>
          <p>I worked closely with the content team to outline a tone continuum and context-specific guidelines, developing an adaptable voice that aligns with Dorsia's identity.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>3</div>
          <h5>Developing Visual Philosophy</h5>
          <p>I established "Bento" as Dorsia’s design framework, inspired by Japanese bento box aesthetics to convey structure and elegance through clean lines, hierarchy, and spacing.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>4</div>
          <h5>Examples in Context</h5>
          <p>Through platform-specific guidelines, I outlined consistent applications for product design, marketing, and corporate communications, creating a unified brand experience across mediums.</p>
        </div>

      </div>

      <div className={projectPage.keyFeatures}>
        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>Story-Driven Identity</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>The "Story" section of the guide defines Dorsia’s narrative foundation, including mission, vision, and brand stories that speak to B2C and B2B audiences. This story-driven approach aligns the brand's purpose with its public image, helping designers and creators convey a consistent identity. By laying out messaging pillars, it allows Dorsia to maintain a coherent voice across various communications while leaving room for flexibility as the brand evolves.</p>
          </div>
        </div>

        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>Introducing Bento</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>Central to the visual section, the "Bento" design philosophy captures the essence of Dorsia's style with an emphasis on structure and simplicity. Like a well-composed bento box, the visual identity relies on clean lines, bordered frames, and intentional spacing, providing an organized yet dynamic layout. This aesthetic framework serves as the backbone for all visual materials, ensuring that Dorsia’s content feels cohesive, premium, and accessible.</p>
          </div>
        </div>

        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>Detailed Practical Examples</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>The "In Practice" section provides in-depth guidance for applying the Dorsia brand across platforms and formats, from digital product design to marketing and business communications. Each context includes tailored rules for visual layout, tone, and messaging, with examples for email campaigns, social media, and presentations. By covering both member-focused and public-facing touchpoints, this guide empowers teams to make consistent, brand-aligned choices in any context.</p>
          </div>
        </div>
      </div>

      <h2 className="centeredh2">Project Takeaways</h2>

      <div className={projectPage.takeaways}>
        <div className={projectPage.takeaway}>
            <h3>The Power of Narrative in Branding</h3>
            <p>The Dorsia voice and visual identity are manifestations of the brand story, which is the north star of the style guide project. By crafting Dorsia’s story as a culture tech company clearly and with purpose, the rest of the guide was able ot unravel meaningfully and naturally.</p>
        </div>

        <div className={projectPage.takeaway}>
            <h3>Philosophies Are Flexible</h3>
            <p>Rather than a rigid rule set for the visual identity, I put forth a design philosophy focused on guiding principles instead. The Bento philosophy empowers thoughtful interpretation of the principles in practice, nurturing creativity rather than stifling it and allowing the brand to evolve naturally as applications and contexts shift.</p>
        </div>

        <div className={projectPage.takeaway}>
            <h3>Speak to Practitioners</h3>
            <p>This style guide codifies a shared language for the craftspeople of the brand, specifically designers and copywriters. While it's smart to convey stylistic principles to laypeople, it's also important for experts to be on the same page, in all the nuances of their crafts. Not everyone will need an encyclopedia, but it's important for one to exist.</p>
        </div>
      </div>
    </ProjectLayout>
  );
}