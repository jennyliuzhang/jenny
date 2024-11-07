import Image from "next/image";
import Link from "next/link";
import ProjectLayout from '../../project-layout';
import projectPage from "../../../styles/projectPage.module.css";
import projectStyles from "../../../styles/projects.module.css";
import Breadcrumbs from '../../../components/Breadcrumbs';

export default function ProjectPage() {

  const heroImage = "/projects/plot-twisters/game-design/cover.jpg";

  const projectExplain = "Creating a first-person, responsive journaling game to nurture self-reflection and personal narrative building in young people ages 10–18";

  const introPara = "For the last four years, Plot Twisters has been focused on creating Twisterland, our flagship product. An immersive online game to support reflecting on our life stories, Twisterland aims to integrate R&D in psychology, mental health, game mechanics, and algorithm design into an artful and fun digital experience through self-exploration.";

  const projectDetails = (
    <div className={projectPage.details}>
      <div className={projectPage.team}>
        <h5>Team</h5>
        <ul>
          <li><span className={projectPage.role}>Jenny Liu Zhang</span>, founder</li>
          <li>Cat Chang, designer</li>
          <li>Avery Lim, artist/researcher</li>
          <li>Melissa Regalado, artist/researcher</li>
          <li>Hadasa Bogatean, designer</li>
          <li>Jesse Parent, researcher</li>
          <li>Young-Kyung Kim, researcher</li>
          <li>Aditya Aggarwal, engineer</li>
        </ul>
      </div>

      <div className={projectPage.services}>
        <h5>Activities</h5>
        <ul>
          <li>Business development</li>
          <li>User research</li>
          <li>Narrative design</li>
          <li>User flows</li>
          <li>Prototyping</li>
          <li>Content design</li>
          <li>Concept art</li>
          <li>Design fiction</li>
          <li>Illustration</li>
        </ul>
      </div>

      <div className={projectPage.team}>
        <h5>Stakeholders</h5>
        <ul>
          <li>Plot Twisters team</li>
        </ul>
      </div>

      <div className={projectPage.team}>
        <h5>Timeline</h5>
        <ul>
          <li>Since 2020</li>
        </ul>
      </div>
      
    </div>
  );
  
  return (
    <ProjectLayout slug="game-design" heroImage={heroImage} projectExplain={projectExplain} introPara={introPara} projectDetails={projectDetails}>
      <h2 className="centeredh2">Creative Process</h2>

      <div className={projectPage.creativeProcess}>

        <div className={projectPage.step}>
          <div className={projectPage.number}>1</div>
          <h5>Forming Core Team</h5>
          <p>I built a team of like-minded individuals interested in exploring design fiction and prototyping to nurture self-reflection skills in youth. Plot Twisters operated as a part-time volunteer organization, with contributors joining and departing organically, until we came upon our core team of eight.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>2</div>
          <h5>Creating Research Foundation</h5>
          <p>I established the “Plot Twisters Think Tank,” a public Notion research database where we logged readings on topics like psychology, game design, social theory, and collective action. Our bi-monthly reading sessions ranged from discussions on non-western and decolonial framings of emotion to the importance of role models.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>3</div>
          <h5>Testing Design Hypotheses Through Collaborations</h5>
          <p>To prototype insights, I initiated partnerships with civic organizations (e.g. <a href="https://www.thehonestmajority.org/" target="_blank">The Honest Majority</a>) and psychology labs (e.g. <a href="https://www.drishametzger.com/research" target="_blank">The EMPOWER Lab</a>). Through mutually beneficial projects, we explored frameworks for self-reflection and game mechanics in mutually beneficial projects to validate or evolve our thinking.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>4</div>
          <h5>Engaging Academic And Expert Feedback</h5>
          <p>Participating in residencies (e.g. <a href="https://www.disi.org/" target="_blank">DISI</a>), fellowships (e.g. <a href="https://www.colorado.edu/lab/medlab/" target="_blank">MEDLab</a>), and presentations (e.g. <a href="https://www.oii.ox.ac.uk/news-events/events/inclusive-gaming-conference/" target="_blank">Oxford University</a>, <a href="https://www.cdh.cam.ac.uk/" target="_blank">Cambridge University</a>) allowed us to get feedback on prototypes like our Storytelling Cards and concept artwork and fill research gaps.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>5</div>
          <h5>Securing Funding and Formalizing Org Charter</h5>
          <p>Winning the <Link href="/projects/plot-twisters/openideo">$50K IDEO grant</Link> in 2022 inspired us to formally establish internal governance, codifying our values, writing policies for money management, and forging circles-based operating teams. This helped restructure Plot Twisters into a more consensual organization that didn't wholly rely on my implicit benevolent dictatorship.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>6</div>
          <h5>Ongoing Game Design and Algorithm Development</h5>
          <p>Currently, we are synthesizing our research into the game’s core mechanics, focusing on designing Twisterland’s interactive game loop and sentiment analysis algorithm. We meet bimonthly to work on prototypes in our design and research circles, aiming to finalize the game structure in 2025.</p>
        </div>

      </div>

      <div className={projectPage.keyFeatures}>
        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>An Invite into an Imagination</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>The game is a first-person experience set in Twisterland, a world where the emotional states and thought patterns of its residents affect its natural landscape, including the weather and the plant life. To live harmoniously with their landscape, residents prioritize personal and community care, and all of Twisterland’s cultural, labor, and governance structures are built around these priorities. Plot Twisters immerses you, a visitor to Twisterland, into the world’s 10 neighborhoods, guided by non-player animal characters with their own quirky backstories and self-narratives. The game world is playable individually and socially, and each location is dedicated to a different topic in self-regulation and wellbeing, from emotional awareness to role model discovery.</p>
            <p>Arriving to Twisterland is arriving to a new world, and the world and game are intentionally designed to enable contrast with Earth. Twisterland’s speculative world therefore offers alternative and imaginative thinking through the use of fiction, inspiring questions about "what could be instead" in our personal stories and collective structures.</p>
          </div>
        </div>

        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>Refractive vs. Prescriptive Algorithm Design</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>While both therapy and Twisterland aim to help individuals explore meaning, the former does so through prescriptive, loaded diagnoses. By contrast, we intend Twisterland to simply refract players’ inputs through subtle changes in character storylines and environmental updates. These narrative changes are open to players’ own interpretation rather than projecting labels or decisions onto the player.</p>
            <p>Our in-progress adaptive algorithm will update the game state and available journaling exercises based on player choices and session history. However, it will do so collaboratively with the player: the player can still freely explore the world despite its changing nature, and each input will continue the refraction process. This creates a feedback loop that reinforces personal agency and ensures that each player’s experience feels unique, transforming emotional learning into an interactive, self-directed journey.</p>
          </div>
        </div>

        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>Infinitely Revisitable and Repeatable</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>Emotions are complex and layered, and a linear, time-restricted, step-by-step program may not always be effective in understanding or resolving them. Twisterland enables players to work through their experiences at their own pace, in their own direction through revisitable game scenarios and repeatable self-reflection exercises. These are designed to support gradual and non-linear growth and are accessible whenever players are ready to engange or re-engage, making Twisterland a flexible tool for building self-knowledge and emotional literacy skills.</p>
          </div>
        </div>
      </div>

      <h2 className="centeredh2">Project Takeaways</h2>

      <div className={projectPage.takeaways}>
        <div className={projectPage.takeaway}>
            <h3>Design Fiction Can Foster Emotional Connection</h3>
            <p>Twisterland’s speculative, responsive world shows the impact of using design fiction to deepen emotional engagement and therefore availability to the potentially deep and sensitive topics at hand. Through visual and narrative metaphor, we can represent challenging, abstract concepts in rich and emotionally compelling ways that are open to interpretation.</p>
        </div>

        <div className={projectPage.takeaway}>
            <h3>Balancing Creative Intuition With External Feedback</h3>
            <p>As creators with firsthand experience of the self-reflection problem in youth, we have strong instincts about Twisterland’s direction. However, we understand that we must temper this with insights from existing interventions and research. This cyclical process involves receiving feedback, refining our stance in response to it, and creating prototypes to gain further input. Being keyed into this push-and-pull allows us to remain grounded while pushing Twisterland’s design in mutually meaningful directions.</p>
        </div>

        <div className={projectPage.takeaway}>
            <h3>Tension Between Fixed Structure and Player Agency</h3>
            <p>By embedding our own values in the game design (e.g. via types of activities, characters, etc.), we shape the pathways and outcomes players encounter. This may constrain self-exploration. However, this is also the nature of design: to guide users through a premeditated experience rooted in an intentional vision. The challenge moving forward is to refine this balance between a guiding structure and empowering open-ended journeys.</p>
        </div>
      </div>
    </ProjectLayout>
  );
}