
import Image from "next/image";
import Link from "next/link";
import ProjectLayout from '../../project-layout';
import projectPage from "../../../styles/projectPage.module.css";
import projectStyles from "../../../styles/projects.module.css";
import Breadcrumbs from '../../../components/Breadcrumbs';
import Tooltip from "../../../components/Tooltip";
import Button from "../../../components/Button";


export default function ProjectPage() {
  const heroImage = "/projects/dorsia/restaurant-profiles/cover.jpg";

  const projectExplain = "Showcasing Dorsia restaurants and venues through a scalable and editorial lens";

  const introPara = "A key touchpoint in the Dorsia user journey, the restaurant profile page showcases branded and logistical details about a venue to prepare members for booking. This project aimed to increase booking velocity through implementing table stakes features like menus and bookmarking, as well as a facelift to the UI of the profile.";

  const projectDetails = (
    <div className={projectPage.details}>
            
            <div className={projectPage.team}>
              <h5>Team</h5>
              <ul>
                <li><span className={projectPage.role}>Jenny Liu Zhang</span>, design lead</li>
                <li>Pat White, designer</li>
                <li>Mitchell Hart, designer</li>
                <li>Matthew Rosenberg, product lead</li>
              </ul>
            </div>

            <div className={projectPage.services}>
              <h5>Activities</h5>
              <ul>
                <li>Product strategy</li>
                <li>Journey mapping</li>
                <li>User flows</li>
                <li>Prototyping</li>
                <li>Visual design</li>
                <li>Design documentation</li>
                <li>Design QA</li>
              </ul>
            </div>

            <div className={projectPage.team}>
              <h5>Stakeholders</h5>
              <ul>
                <li>Dorsia Leadership</li>
                <li>Dorsia Content Team</li>
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
    <Button title="App Store" desc="" target="_blank" link="https://apps.apple.com/ca/app/dorsia-members-club/id1589267208" image="/projects/logos/dorsia-app.png" isExternal="true"></Button>
  );

  return (
    <ProjectLayout slug="restaurant-profiles" heroImage={heroImage} projectExplain={projectExplain} introPara={introPara} projectDetails={projectDetails} projectHighlights={projectHighlights}>


<h2 className="centeredh2">Creative Process</h2>

<div className={projectPage.creativeProcess}>

  <div className={projectPage.step}>
    <div className={projectPage.number}>1</div>
    <h5>Unpacking Business Motives</h5>
    <p>Leaders sought to encourage the <Tooltip text="We thought of this as engagement, growth, and retention." width="150px" marginleft="-75px">growth loop</Tooltip>, specifically increasing engagement through browsing and booking inventory.</p>
  </div>

  <div className={projectPage.step}>
    <div className={projectPage.number}>2</div>
    <h5>Journey Mapping</h5>
    <p>Audited user journey through browsing and booking, including friction points, action paths, and user desires.</p>
  </div>

  <div className={projectPage.step}>
    <div className={projectPage.number}>3</div>
    <h5>Problem Framing</h5>
    <p>The user journey touched inventory display, filtering, and booking conversion. To scope down, we focused on inventory display.</p>
  </div>


  <div className={projectPage.step}>
    <div className={projectPage.number}>4</div>
    <h5>Wireframing for Modularity</h5>
    <p>Inventory ranged in available information, so restaurant profiles needed to be modular in what they could display.</p>
  </div>

  <div className={projectPage.step}>
    <div className={projectPage.number}>5</div>
    <h5>Stylistic Iteration</h5>
    <p>Within modules, design team iterated on interface solutions that conveyed unique restaurant details and brand perspectives.</p>
  </div>

  <div className={projectPage.step}>
    <div className={projectPage.number}>6</div>
    <h5>Integrating Marketing Functions</h5>
    <p>A key module was made to natively feature Dorsia content. The overall design was also tested for other purposes, like event profiles.</p>
  </div>

  <div className={projectPage.step}>
    <div className={projectPage.number}>7</div>
    <h5>QA & Feature Launch</h5>
    <p>Delivered design with rigorous documentation and edge cases. Created feature launch email to promote to new members.</p>
  </div>

</div>

<div className={projectPage.keyFeatures}>
  <div className={projectPage.keyFeature}>
    <div className={projectPage.featureTitle}>
      <h4>Key Quality</h4>
      <h1>&ldquo;House of Brands&rdquo; Aesthetic</h1>
    </div>
    <div className={projectPage.featureDesc}>
      <p>The restaurant profile perfectly captures how Dorsia's branding allows its venue partners to uniquely shine, but with a subtle Dorsia stamp that ties them all together. In our iterations, we attempted a variety of inventory stylings, from bespoke artwork to cinematic video formats. However, the most scalable option was the most minimalist one: by focusing on <em>the way</em> restaurants are displayed—set on white, snapshot animations, and centered white logos—we were able to achieve a branded look without being too obvious.</p>
    </div>
  </div>

  <div className={projectPage.keyFeature}>
    <div className={projectPage.featureTitle}>
      <h4>Key Quality</h4>
      <h1>Flexible Modules</h1>
    </div>
    <div className={projectPage.featureDesc}>
      <p>Due to the range of information available about our restaurants, it was crucial for the profile to gracefully degrade when restaurants lacked components like menus, awards, and editorial content. We designed each module independently and intentionally considered various conditional states by removing sparse descriptions, mixing Dorsia content with press features to obscure any lack of coverage, and redirecting to seasonal menus when available. This way, the Dorsia restaurant profile could uniquely highlight the strengths of a restaurant and resist feeling "empty."</p>
      <p>Still, the design ensures architectural consistency in the sticky navigation. Always a maximum of four links, they direct the user to key informational points and highlight booking.</p>
    </div>
  </div>

  <div className={projectPage.keyFeature}>
    <div className={projectPage.featureTitle}>
      <h4>Key Quality</h4>
      <h1>An &ldquo;IYKYK&rdquo; Angle</h1>
    </div>
    <div className={projectPage.featureDesc}>
      <p>From the marquee of cuisine and vibe tags to in-app menus and the fun fact footer, the Dorsia restaurant profile emphasizes its exclusive and curated access to its venue partners. Designed to show off our inventory in ways that competing platforms like Resy and OpenTable can't, users can discover a venue through a Dorsia-specific lens, inspiring a sense of intimacy with the brands. Our editorial and luxury in-the-know angle is a key value proposition, so we wanted this to sing in the UX.</p>
    </div>
  </div>

</div>

<h2 className="centeredh2">Project Takeaways</h2>

<div className={projectPage.takeaways}>
  <div className={projectPage.takeaway}>
      <h3>The Power of Assumptive Journey Mapping</h3>
      <p>Due to concerns around member privacy and fast launch timelines, our team relied our preliminary journey map based on inferred insights to drive problem framing and design focus areas. This helped us stay agile while better understanding our knowledge gaps, for which we were then able to defer to quantitative usage data.</p>
  </div>

  <div className={projectPage.takeaway}>
      <h3>Design for Graceful Degradation</h3>
      <p>Our inventory of 120+ restaurants was inconsistently covered in our database, with some containing more context than others. To ensure design resilience, we prioritized core points of information in the UX and creatively reconceived any "empty" states. Especially when working with inputs of varying informational quality, scalable solutions are crucial.</p>
  </div>

  <div className={projectPage.takeaway}>
      <h3>The Importance of a Facelift</h3>
      <p>This project was a major quality-of-life improvement, integrating basic functions like menus, bookmarking, and press features. It was also an aesthetic revisioning and branding moment. After one year of being out in the wild, Dorsia's booking velocity was beginning to plateau. Simple table stakes features and repackaging the beauty of our house of brands proved crucial for conversion.</p>
  </div>
</div>
</ProjectLayout>
);
}