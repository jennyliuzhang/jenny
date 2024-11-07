import Image from "next/image";
import Link from "next/link";
import ProjectLayout from '../../project-layout';
import projectPage from "../../../styles/projectPage.module.css";
import projectStyles from "../../../styles/projects.module.css";
import Breadcrumbs from '../../../components/Breadcrumbs';
import Tooltip from "../../../components/Tooltip";

export default function ProjectPage() {

  const heroImage = "/projects/plot-twisters/brand-strategy/cover.jpg";

  const projectExplain = "Defining the brand positioning of the EdTech design collective and its vision of playful self-reflection products";

  const introPara = "I founded Plot Twisters in 2019 as an EdTech design collective to address gaps I observed in education and labor systems. These systems often overlook the development of healthy self-awareness and emotional literacy, especially for people of marginalized backgrounds, learning styles, and trauma exposures. Plot Twisters was conceived to be a subversive, artistic reprieve from traditional educational products, introducing tools for lifelong self-reflection through playful and engaging personal narrative building tools.";

  const projectDetails = (
    <div className={projectPage.details}>
      <div className={projectPage.team}>
        <h5>Team</h5>
        <ul>
          <li><span className={projectPage.role}>Jenny Liu Zhang</span>, founder</li>
        </ul>
      </div>

      <div className={projectPage.services}>
        <h5>Activities</h5>
        <ul>
          <li>Competitive research</li>
          <li>Narrative design</li>
          <li>Brand identity</li>
          <li>Visual identity</li>
          <li>Concept art</li>
          <li>Art direction</li>
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
          <li>4 months</li>
        </ul>
      </div>
      
    </div>
  );
  
  return (
    <ProjectLayout slug="brand-strategy" heroImage={heroImage} projectExplain={projectExplain} introPara={introPara} projectDetails={projectDetails}>
      <h2 className="centeredh2">Creative Process</h2>

      <div className={projectPage.creativeProcess}>

        <div className={projectPage.step}>
          <div className={projectPage.number}>1</div>
          <h5>Identify Gaps in Existing Education System</h5>
          <p>I observed that education structures for young people ages 5–18 rarely support self-awareness or emotional literacy, especially for people with diverse needs. This insight shaped the mission to create a brand that challenges these norms with an approach centered on individual wellbeing.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>2</div>
          <h5>Research Landscape of Reactive and Proactive Solutions</h5>
          <p>I examined existing EdTech and therapeutic tools, categorizing them as either reactive (e.g. trauma therapy) or proactive (e.g. youth programming or mindfulness practices). This analysis highlighted a gap that Plot Twisters could fill: recovery tools that also instill lifelong self-reflection practices.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>3</div>
          <h5>Position Plot Twisters as a Unique Bridge</h5>
          <p>To offer both immediate support and sustainable self-regulation tooling, I positioned Plot Twisters at the intersection of a therapeutic brand and engaging learning tool. The vision was to empower users to process challenges while building resilience and self-advocacy skills for the future.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>4</div>
          <h5>Develop Approachable and Fun Brand Ethos</h5>
          <p>Recognizing that emotional topics can feel heavy, I envisioned a lighthearted, playful tone for the brand. I sought to encourage curiosity during otherwise big experiences and normalize emotional literacy. However, I wanted to tow the line between lightness and being patronizing and over-dumbing down these topics.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>4</div>
          <h5>Invent Twisterland as a World for Self-Exploration</h5>
          <p>I envisioned Twisterland as a fictional world where animal characters guide users through various emotional topics. Concepts like “gifts” for strengths and “hats” for roles make the work of self-reflection feel engaging and fun, as though users are exploring a new, imaginative landscape.</p>
        </div>

        <div className={projectPage.step}>
          <div className={projectPage.number}>5</div>
          <h5>Create Concept Artwork and Prototypes</h5>
          <p>To convey the brand strategy to potential teammates and collaborators, I played to my artistic strengths to create illustrations, animations, and prototypes that embodied Twisterland’s playful and welcoming tone, making sure the visuals felt inclusive and relatable.</p>
        </div>


        <div className={projectPage.step}>
          <div className={projectPage.number}>7</div>
          <h5>Clarify Plot Twisters as a Subversive Alternative</h5>
          <p>On the website and written communications, I emphasized Plot Twisters as a departure from traditional EdTech, existing outside existing learning tools and practices. This non-traditional approach positions the brand as a space for genuine self-exploration, growth, and advocacy beyond conventional educational paradigms.</p>
        </div>

      </div>

      <div className={projectPage.keyFeatures}>

      <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>Bridging Reactive and Proactive Interventions</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>By equipping individuals with the self-knowledge skills to navigate their values and needs in life, they are more prepared to dialogue with others and contribute to healthy, prosocial communities. Furthermore, by supporting people from an early age to be aware of the strengths, roles, and lived experiences they bring to their social environments, we can shape future generations to think critically, empathetically, and intersectionally about the world’s toughest problems.</p>

            <p>Plot Twisters seeks to fill this narrative gap in standardized education systems, inviting young people to reimagine learning and career building as a radical act of self-discovery. The brand bridges the gap between tools that focus on reactive therapy, burnout recovery, and healing with those that cultivate lifelong healthy self-concepts and mindfulness.</p>
          </div>
        </div>


        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>Framing Life Challenges as "Plot Twists"</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>The name Plot Twisters comes from the idea that all people encounter "plot twists," or challenges and conflicts, as we navigate life. Our goal is to create products that empower young people to self-regulate and discover strategies that align with personal values during life’s plot twists. By presenting serious topics using imaginative metaphors, the brand fosters an accessible environment for young people. The language and visuals convey a sense of exploration rather than weighted therapy speak, making complex topics of emotional literacy feel inviting and natural.</p>
          </div>
        </div>

        <div className={projectPage.keyFeature}>
          <div className={projectPage.featureTitle}>
            <h4>Key Quality</h4>
            <h1>Artistic, <Tooltip text="A sci-fi subgenre that envisions collectivist, ecological futures" width="140px" marginleft="-70px"><span>Solarpunk</span></Tooltip>, and Story-Driven</h1>
          </div>
          <div className={projectPage.featureDesc}>
            <p>Plot Twisters takes a non-traditional artistic approach to technology design that subverts typical EdTech. Through product interactions, users are immersed into Twisterland—a speculative storyworld where characters live within entirely new systems built around personal and community care. Twisterland imagines a colorful solarpunk society where the emotional states and thought patterns of its residents influence the natural landscape, such as the weather and plant life.</p>
            
            <p>This act of design fiction enables Plot Twisters to introduce new ways of thinking about emotional literacy, needs, and values, encouraging them to explore self-regulation and self-advocacy playfully. The playful metaphors of “gifts” and “hats” for personal strengths and roles make deep emotional concepts approachable, making heavy topics like trauma and personal growth explorable with curiosity and levity.</p>
          </div>
        </div>

      </div>

      <h2 className="centeredh2">Project Takeaways</h2>

      <div className={projectPage.takeaways}>
        <div className={projectPage.takeaway}>
            <h3>Artistic Vision is Underutilized in Product Design</h3>
            <p>Plot Twisters reiterated to me the power of breaking away from traditional product frameworks. Building an EdTech brand that leverages fiction, art, and storytelling as its backbone proved extremely compelling for uniting diverse potential users and collaborators.</p>
        </div>

        <div className={projectPage.takeaway}>
            <h3>Playfulness as a Gateway to Self-Reflection</h3>
            <p>Approaching heavy topics with playfulness showed that emotional exploration doesn’t have to be daunting. The Plot Twisters brand reinforced the value of using lighthearted, imaginative elements to make complex topics accessible and engaging, especially for younger audiences.</p>
        </div>

        <div className={projectPage.takeaway}>
            <h3>This Is One Drop in a Big Bucket</h3>
            <p>Inspiring a more self-aware, resilient generation will take a diverse ecosystem of tools and voices. Plot Twisters' story-driven brand may not resonate with everyone, so I reiterate that it aims to be one part of that ecosystem, complementing other approaches to collectively support young people as they navigate self-discovery and growth.</p>
        </div>
      </div>
    </ProjectLayout>
  );
}