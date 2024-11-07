import Image from "next/image";
import Link from "next/link";
import ProjectLayout from '../../project-layout';
import projectPage from "../../../styles/projectPage.module.css";
import projectStyles from "../../../styles/projects.module.css";
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function ProjectPage() {

  const heroImage = "/projects/plot-twisters/openideo/cover.jpg";

  const projectExplain = "$50,000 Grand Prize Winner of an OpenIDEO call for projects at the intersection of wellbeing and technology";

  const introPara = "In 2022, Plot Twisters responded to IDEO’s “Designing for Digital Thriving” challenge by proposing Twisterland as an immersive, story-driven adventure journaling game that empowers young people to engage in self-reflection and self-advocacy through play. Our proposal earned the highest $50,000 award, reflecting its potential to create inclusive and thriving digital spaces. As a remote design collective, Plot Twisters has also built the digital infrastructure and internal practices to support emotional wellness and mutual aid virtually—our own digitally-mediated governance and creative processes inform the values system underlying the game.";

  const projectDetails = (
    <div className={projectPage.details}>
      <div className={projectPage.team}>
        <h5>Team</h5>
        <ul>
          <li><span className={projectPage.role}>Jenny Liu Zhang</span>, founder</li>
          <li>Cat Chang, designer</li>
          <li>Avery Lim, artist</li>
          <li>Hadasa Bogatean, designer</li>
          <li>Jesse Parent, researcher</li>
        </ul>
      </div>

      <div className={projectPage.services}>
        <h5>Activities</h5>
        <ul>
          <li>Narrative design</li>
          <li>Market research</li>
          <li>Content design</li>
          <li>Project roadmapping</li>
          <li>Graphic design</li>
          <li>Illustration</li>
        </ul>
      </div>

      <div className={projectPage.team}>
        <h5>Stakeholders</h5>
        <ul>
          <li>OpenIDEO and IDEO</li>
          <li>Riot Games</li>
          <li>Sesame Workshop</li>
          <li>Joan Ganz Cooney Center</li>
          <li>Fair Play Alliance</li>
        </ul>
      </div>

      <div className={projectPage.team}>
        <h5>Timeline</h5>
        <ul>
          <li>2.5 weeks</li>
        </ul>
      </div>
      
    </div>
  );
  
  return (
    <ProjectLayout slug="openideo" heroImage={heroImage} projectExplain={projectExplain} introPara={introPara} projectDetails={projectDetails}>
      <h2 className="centeredh2">Creative Process</h2>

      <div className={projectPage.creativeProcess}>

        <div className={projectPage.step}>
          <div className={projectPage.number}>1</div>
          <h5>Align Research to Challenge Themes</h5>
          <p>We examined IDEO’s themes of supporting underrepresented voices and cultivating resilient spaces to position Twisterland as a tool for inclusive digital thriving. We focused on accessibility through playfulness and trauma-informed design strategies—something often missing in online spaces.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>2</div>
          <h5>Highlight Organizational Strengths</h5>
          <p>Plot Twisters is diverse in skills as well as in its walks of life; most of our team is non-binary/women of color in the U.S., Australia, and Europe. As such, we have invented governance and creative processes for our specific needs, exemplifying healthy online collaboration and making us well-versed in values-sensitive design.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>3</div>
          <h5>Emphasize Twisterland's Unique Therapeutic Approach</h5>
          <p>We outlined Twisterland’s integration of trauma-informed therapy, diverse research inputs including non-western, indigenous, and decolonial ontologies, and design fiction. This blend of strategies enables the project to bridge both reactive and proactive approaches to wellness.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>4</div>
          <h5>Describe Theory of Change and Impact Scale</h5>
          <p>Finally, we emphasized Twisterland’s goal of reaching 10,000 active monthly users through targeting school-aged youth, local youth programming, libraries, career counselors, and therapists. We emphasized an iterative process of co-design within our own team and playtests with our target market.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>5</div>
          <h5>Submission Video &amp; Deck</h5>
          <p>In addition to completing the written application, I also put together a video submission explaining the key factors of our game and its creative genesis. Our proposal materials also included early prototypes, concept artwork, a Twisterland map and brochure, and a presentation.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>6</div>
          <h5>Engage in Public Discussion</h5>
          <p>Throughout the challenge, our proposal materials were public on the OpenIDEO website and anyone could comment on the project. We took this opportunity to reflect on questions around success metrics and build plans.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>7</div>
          <h5>Winning and Beyond</h5>
          <p>We were notified of our grand prize status in December 2022 and given our funds in 2023. Since then, our team has been actualizing our proposal and upskilling our team. We are also collaborating with research and design advisors in the IDEO network.</p>
        </div>

      </div>

      <div className={projectPage.keyFeatures}>
        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>A Vision of Digitally-Mediated Self-Regulation</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>Our proposal emphasizes how digital products are exclusively capable of creating narrative-driven user experiences that are repeatable and responsive to user inputs. Through online minigames and reflection exercises that have session memory, Twisterland can be an interactive partner for processing emotions and unpacking cognitive patterns.</p>
          </div>
        </div>

        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>Living in Twisterland as We Build It</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>Plot Twisters’ internal practices reflect our commitment to thriving digital spaces. As a remote design collective, we’ve developed governance and creative processes that emphasize mutual respect, open dialogue, and emotional support. This digital-first yet values-sensitive structure serves as a model for how positive collective regulation and collaboration can emerge from the bottom up. In this way, Twisterland is not only a speculative imagining but a fictional manifestation of values our team has already explored practically.</p>
        </div>
        </div>

        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>Centering Diverse Bodies and Minds</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>Plot Twisters is committed to celebrating diverse experiences, making Twisterland a digital space where all users, including marginalized and disabled people, feel seen and valued. We recognize that mainstream environments often exclude these voices, so we propose Twisterland as an alternative space that empathizes with and validates a range of life experiences. Twisterland characters are coded with different abilities, disabilities, and neurotypes, inviting players to interact with narratives that reflect their own needs or those of others. Game mechanics model anti-oppressive, needs-literate dialogue, supporting players in navigating life’s complexities without stigma or judgment. Twisterland also reimagines infrastructure and public spaces to accommodate different physical abilities, offering a speculative vision of how our world could be more inclusive. This approach makes Plot Twisters a champion of diverse narratives, encouraging empathy and respect for all walks of life.</p>
          </div>
        </div>
      </div>

      <h2 className="centeredh2">Project Takeaways</h2>

      <div className={projectPage.takeaways}>
        <div className={projectPage.takeaway}>
            <h3>Creations Reflect Their Creators</h3>
            <p>Twisterland reflects our team’s collaborative practices, where our values of mutual aid, inclusivity, and upskilling manifest in a product that also prioritizes collective care and personal growth. This alignment between creator and creation makes Twisterland a true extension of our ethos, demonstrating how a team’s value system can shape the digital tools it creates.</p>
        </div>

        <div className={projectPage.takeaway}>
            <h3>The Unique Affordances of Digital User Experiences</h3>
            <p>Twisterland’s digital, interactive nature offers unique possibilities for cultivating emotional literacy that analog tools like journaling cannot. Its narrative-driven, repeatable format allows users to explore self-reflection affords session memory, dynamic character relationships, and long-term use.</p>
        </div>

        <div className={projectPage.takeaway}>
            <h3>Ground Big Visions in Practical MVPs</h3>
            <p>A well-defined plan of action was essential to our proposal, allowing us to ground Twisterland’s ambitious goals in clear, actionable steps. By outlining a phasal MVP focused on design fiction, then game mechanics, then algorithm design, and finally game artwork, we demonstrated a clear pathway to actualization—a necessary north star for our team.</p>
        </div>
      </div>
    </ProjectLayout>
  );
}