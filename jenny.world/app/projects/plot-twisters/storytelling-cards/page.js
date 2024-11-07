import Image from "next/image";
import Link from "next/link";
import ProjectLayout from '../../project-layout';
import projectPage from "../../../styles/projectPage.module.css";
import projectStyles from "../../../styles/projects.module.css";
import Breadcrumbs from '../../../components/Breadcrumbs';
import Button from "../../../components/Button";

export default function ProjectPage() {

  const heroImage = "/projects/plot-twisters/storytelling-cards/cover.jpg";

  const projectExplain = "Defining the narrative, identity, and aesthetic of a global brand in the hospitality tech space";

  const introPara = "The Plot Twisters team has developed a unique internal cultlure around emotionally literate, values-based communication. The Plot Twisters Storytelling Cards, a 48-card deck with suits of Feelings, Needs, Ways of Caring, and Structures, embody these principles. Designed to support mutual understanding and trust, the cards are used by our own team members to reflect on life and build connections when we collaborate on projects. Beyond community use, we are implementing these cards as foundational language elements in Twisterland's game mechanics.";

  const projectDetails = (
    <div className={projectPage.details}>
      <div className={projectPage.team}>
        <h5>Team</h5>
        <ul>
          <li><span className={projectPage.role}>Jenny Liu Zhang</span>, design lead</li>
          <li>Cat Chang, researcher/designer</li>
          <li>Avery Lim, researcher/designer</li>
        </ul>
      </div>

      <div className={projectPage.services}>
        <h5>Activities</h5>
        <ul>
          <li>Content design</li>
          <li>Prototyping</li>
          <li>Graphic design</li>
        </ul>
      </div>

      <div className={projectPage.team}>
        <h5>Stakeholders</h5>
        <ul>
          <li>Plot Twisters team</li>
          <li>MEDLab at University of Colorado Boulder (via Governance Archaeology Fellowship)</li>
        </ul>
      </div>

      <div className={projectPage.team}>
        <h5>Timeline</h5>
        <ul>
          <li>12 weeks</li>
        </ul>
      </div>
      
    </div>
  );

  const projectHighlights = (
    <div>
    <Button title="Prototype generator" desc="" target="_blank" link="https://www.plottwisters.org/play/cards" image="/projects/logos/pt.png" isExternal="true"></Button>
    <Button title="UN Exhibition" desc="" target="_blank" link="https://excavations.digital/projects/designing-dialogue/" image="https://excavations.digital/assets/img/explore.png" isExternal="true"></Button>
    </div>
  );
  
  return (
    <ProjectLayout slug="storytelling-cards" heroImage={heroImage} projectExplain={projectExplain} introPara={introPara} projectDetails={projectDetails} projectHighlights={projectHighlights}>
      <h2 className="centeredh2">Creative Process</h2>

      <div className={projectPage.creativeProcess}>

        <div className={projectPage.step}>
          <div className={projectPage.number}>1</div>
          <h5>Create Rearrangeable Language of Self-Reflection and Care</h5>
          <p>We conceived the concept of a deck of cards based on literature about combinatory play as a useful cognitive tool. For our cards, we aimed to codify language around expressing values and emotional states.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>2</div>
          <h5>Research Themes for Suits</h5>
          <p>We drew on influences like Nonviolent Communication, Love Languages, and Routes of Safety to identify key suits to reflect emotional states, cognitive theories, personality frameworks, and storytelling traditions. This culminated into four suits: Feelings, Needs, Ways of Caring, and Structures.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>3</div>
          <h5>Refine Card Gameplay</h5>
          <p>Figma and physical paper prototypes were internally tested and externally shared during our residency at <a href="https://www.colorado.edu/lab/medlab/" target="_blank">MEDLab</a>. Playtesting exercises helped shape flexible games like “Unraveling” and “Silent Stories” that encourage open-ended storytelling.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>4</div>
          <h5>Playtest Research Interviews</h5>
          <p>My team member Cat conducted 12 playtests with individuals in our network to see how people would use the cards to tell personal stories or communicate matters when given few instructions. People invented diverse spreads and reflection techniques, revealing the value of nonlinear and combinatorial exploration of meaning.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>5</div>
          <h5>Present at UN Internet Governance Forum</h5>
          <p>These cards, developed during our residency at the MEDLab at University of Colorado Boulder, demonstrated use cases for internal team communication and general personal storytelling. We presented these findings as a part of an exhibition at the <a href="https://excavations.digital/" target="_blank">UN Internet Governance Forum</a>.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>6</div>
          <h5>Integration into Twisterland Game Mechanics</h5>
          <p>To extend the cards' usability, we have now focused on integrating the combinatory behavior and content of the suits into our sentiment analysis algorithm. We still conduct occasional physical cardplay sessions as desired by our community.</p>
        </div>

      </div>

      <div className={projectPage.keyFeatures}>
        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>A Flexible Language for Communicating Abstract Experiences</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>The Plot Twisters Storytelling Cards is a deck that contains 48 cards divided into four suits: Feelings, Needs, Strategies, and Structures. Each card contains a keyword and 4-6 synonyms or supplementary words to aid clarity of meaning.</p>
            <p>Like tarot, the Storytelling Cards provide a nuanced language for emotional expression, offering users the tools to articulate and explore their feelings, needs, and relational dynamics by placing and rearranging cards into spreads, stacks, or positions that make sense to them. Each suit serves as one pathway into self-reflection and mutual understanding, and each card acts like a word in a sentence, enabling open-ended dialogue possibilities.</p>
          </div>
        </div>

        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>Interdisciplinary and Cross-Cultural Perspectives</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>The deck’s structure reflects a rich blend of cognitive science, social theory, and storytelling traditions, making it a versatile tool for introspection and connection. Drawing on concepts like <a href="https://www.amazon.com/Nonviolent-Communication-Language-Life-Changing-Relationships/dp/189200528X" target="_blank">Nonviolent Communication</a> and <a href="https://assets.website-files.com/6041732f1d681c54a3687046/607bbdd65186a2f399c8cfa7_Routes%20of%20Safety.pdf" target="_blank">Routes of Safety</a>, the cards address common emotional and relational experiences, helping users find shared language and values across diverse backgrounds.</p>
          </div>
        </div>

        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>Open-Ended Use Cases</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>From individual journaling and personal narrative reflection to deep group exploration and conflict resolution, the Storytelling Cards can be adapted to the needs of its users. We are even implementing the cards in algorithm design for the Twisterland game, underscoring their potential as a versatile language for introspection and collaborative development.</p>
          </div>
        </div>
      </div>

      <h2 className="centeredh2">Project Takeaways</h2>

      <div className={projectPage.takeaways}>
        <div className={projectPage.takeaway}>
            <h3>The Power of Playful Tools to Facilitate Communication</h3>
            <p>Direct communication around feelings, self-reflections, and experiences can be difficult or inaccessible. The Storytelling Cards demonstrate that a shared language can make this process easier. By developing cards that articulate needs, feelings, and values, we equipped our community to navigate challenging discussions through an informed yet playful buffer.</p>
        </div>

        <div className={projectPage.takeaway}>
            <h3>Balance Structure with Open-Ended Exploration</h3>
            <p>While the deck is designed with specific suits and categories, the gameplay remains flexible to support varied interpretations and personal interpretations. This balance allows the cards to be meaningful across diverse contexts, encouraging players to draw from their own experiences and find new insights each time.</p>
        </div>

        <div className={projectPage.takeaway}>
            <h3>Meaning Making Can Be Collaborative</h3>
            <p>Especially through our use in groups and pairs, the Storytelling Cards demonstrated that making sense of experiences and feelings can be a playful and social process. Unlike traditional journaling, the cards engage players in a shared experience where they name the world together, making emotional literacy an active, collaborative process.</p>
        </div>
      </div>
    </ProjectLayout>
  );
}