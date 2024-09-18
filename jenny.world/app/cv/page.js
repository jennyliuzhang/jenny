import Image from "next/image";
import Link from "next/link";
import cvStyles from "../styles/cv.module.css";
import ScrollingTabs from '../components/ScrollingTabs';

export default function Page() {
  return (
    <main>
      <h2>Curriculum Vitae</h2>

      {/* <p>See Resume or read my Testimonials.</p> */}

      {/* <ScrollingTabs>
        <Link href="/resume.pdf" style={{background: '#FFF8D7', border: '1px solid #FFF9F5'}}>
          Résumé<span className="external" style={{fontSize: '1em', lineHeight: '1em'}}></span>
        </Link>
        <Link href="/cv/testimonials" style={{background: '#FFF8D7', border: '1px solid #FFF9F5'}}>
          Testimonials
        </Link>
        <Link href="#skills">Skill Areas</Link>
        <Link href="#education">Education</Link>
        <Link href="#professional">Professional Experience</Link>
        <Link href="#grants">Awarded Grants</Link>
        <Link href="#residencies">Awarded Residencies &amp; Fellowships</Link>
        <Link href="#honors">Awarded Honors</Link>
        <Link href="#writing">Published Writing</Link>
        <Link href="#presentations">Presentations &amp; Exhibitions</Link>
        <Link href="#teaching">Teaching Experience</Link>
        <Link href="#other">Other Projects &amp; Volunteer Service</Link>
      </ScrollingTabs> */}

      <div className={cvStyles.cvWrap}>

        {/* <div className={cvStyles.cvSubNav}>
          <Link href="#skills">Skill Areas</Link>
          <Link href="#education">Education</Link>
          <Link href="#professional">Professional Experience</Link>
          <Link href="#grants">Awarded Grants</Link>
          <Link href="#residencies">Awarded Residencies &amp; Fellowships</Link>
          <Link href="#honors">Awarded Honors</Link>
          <Link href="#writing">Published Writing</Link>
          <Link href="#presentations">Presentations &amp; Exhibitions</Link>
          <Link href="#teaching">Teaching Experience</Link>
          <Link href="#other">Other Projects &amp; Service Work</Link>
          <Link href="/resume.pdf">Résumé</Link>
          <Link href="/cv/testimonials">Testimonials</Link>
        </div> */}

        <div className={cvStyles.cvContent}>

      <h1 id="skills">Skill Areas</h1>
      <div className={cvStyles.skills}>
        <div className={cvStyles.designWrap}>
          <h3>Design</h3>
          <div className={cvStyles.designGraph}></div>
        </div>

        <div className={cvStyles.technologyWrap}>
          <h3>Technology</h3>
          <div className={cvStyles.technologyGraph}></div>
        </div>

        <div className={cvStyles.productWrap}>
          <h3>Product</h3>
          <div className={cvStyles.productGraph}></div>
        </div>
      </div>

      <div className={cvStyles.tools}>
        <h4>Specialty Tools &amp; Software</h4>
        <p><span className={cvStyles.level}>Expert:</span> Photoshop, Figma, HTML, CSS, Illustrator, InDesign, Notion</p>
        <p><span className={cvStyles.level}>Advanced:</span> JavaScript (jQuery, React, Next.js), Framer, After Effects, Webflow, WordPress, Shopify, MailChimp, Braze</p>
        <p><span className={cvStyles.level}>Proficient:</span> Python, MySQL, command line, Linear, Google Analytics, ProtoPie, Audacity, Logic</p>
        <p><span className={cvStyles.level}>Intermediate:</span> Rive, spaCy, TextaCy</p>
      </div>

      <div className={cvStyles.tools}>
        <h4>Metholodogies &amp; Frameworks</h4>
        <p><span className={cvStyles.level}>Expert:</span> Design thinking (d.school, IDEO, Double Diamond), mind mapping, affinity diagramming, moodboarding, storyboarding, rapid ethnography, interview design, survey design, user journey mapping, empathy mapping, wireframing, responsive design</p>
        <p><span className={cvStyles.level}>Advanced:</span> Participatory design, strategic foresight (scenario planning, signals and trends mapping, backcasting, Three Horizons), causal layered analysis (CLA), competitive analysis, SWOT Analysis, Business Model Canvas, Lean Canvas, RACI matrix, agile development, kanban, Gantt charts, heuristic evaluation</p>
        <p><span className={cvStyles.level}>Proficient:</span> Usability testing, functional programming, Root Cause Analysis (RCA), Eisenhower Matrix, Internal Press Release</p>
        <p><span className={cvStyles.level}>Intermediate:</span> Benchmarking, OKR, PEST Analysis, object-oriented programming</p>
      </div>

      <h1 id="education">Education</h1>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Master of Science in Narrative Futures: Art, Data, Society</span>
        <span className={cvStyles.place}>University of Edinburgh, Edinburgh Futures Institute</span>
        <span className={cvStyles.dates}>2022–2025</span>
      </div>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Bachelor of Science in Arts, Technology and the Business of Innovation</span>
        <span className={cvStyles.place}>University of Southern California, Iovine and Young Academy</span>
        <span className={cvStyles.dates}>2015–2019, Trustee Scholar (full-tuition merit scholarship), magna cum laude</span>
        <ul className={cvStyles.bullets}>
          <li>One of 22 students selected for the 2nd cohort of the Iovine and Young Academy for integrated studies in art, technology and entrepreneurship.</li>
          <li>Capstone: “Plot Twisters: Personal storytelling interfaces for students in the 21st century.”</li>
          <li>Personalized concentrations in Interface Design and Narrative Research Methods</li>
          <li>Minor in Narrative Structure, Department of English</li>
        </ul>
      </div>

      <h1 id="professional">Professional Experience</h1>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Senior Designer</span>
        <span className={cvStyles.place}>Dorsia</span>
        <span className={cvStyles.dates}>2022–2024</span>
        <ul className={cvStyles.bullets}>
          <li>One of 3 cross-functional designers creating and scaling the flagship mobile booking platform (60K+ users), the restaurant and concierge-facing web apps, and the multi-channel editorial and brand presence.</li>
          <li>Designed end-to-end UX/UI and worked with engineers to launch over 36 app features in 2 years, including Dorsia Payments, Split Pay, the Dorsia OS for restaurants, and the Book on Behalf concierge dashboard.</li>
          <li>Managed and operated marketing design strategy for 8 markets, including New York, Miami, London, and the French Riviera.</li>
          <li>Led speculative product and pitch deck design to enable strategic partnerships with Dom Pérignon and TAO Group Hospitality.</li>
          <li>Worked closely with the CEO, leadership, and business development on a variety of presentations, supporting 4 key brand partnerships and a successful fundraising round led by Index Ventures.</li>
        </ul>
      </div>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Founder, Managing Director</span>
        <span className={cvStyles.place}>Plot Twisters</span>
        <span className={cvStyles.dates}>2019–present, grant funded by IDEO and Riot Games as of 2023</span>
        <ul className={cvStyles.bullets}>
          <li>Leading a design organization of 8 artists, researchers, designers, and technologists to create an online game world for nurturing personal narrative building in youth.</li>
          <li>Winner of $50,000 top grant prize for OpenIDEO Designing for Digital Thriving.</li>
          <li>Spearheaded presentations and exhibitions at 4 conferences hosted by the Oxford Internet Institute, Cambridge Digital Humanities, and the Diverse Intelligences Summer Institute at St. Andrews.</li>
          <li>Established 8 multi-year partnerships with educators, civic nonprofits, and psychology labs.</li>
          <li>Facilitating small teams to conduct mixed-methods research and design, based on a literature review of 34 key works across the humanities and developmental sciences.</li>
          <li>Collaboratively designing, illustrating, and engineering all gameplay prototypes and websites.</li>
        </ul>
      </div>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Freelance Designer</span>
        <span className={cvStyles.place}>Self-employed</span>
        <span className={cvStyles.dates}>2020–2022</span>
        <ul className={cvStyles.bullets}>
          <li>Specialized in digital UX/UI design, product strategy, graphic design, and front-end web development for 12+ clients.</li>
          <li>Designed and developed a custom eCommerce storefront for SOSHE Beauty, a sustainable makeup company.</li>
          <li>Designed and developed pitch decks, media assets, and website for Wright Electric, a zero-emissions aviation startup.</li>
          <li>Designed user interfaces, brand strategy, and navigation logic for HAGS, a social app for high school students. Licensed bespoke handwritten font.</li>
        </ul>
      </div>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Creative Strategist</span>
        <span className={cvStyles.place}>verynice</span>
        <span className={cvStyles.dates}>2019–2020</span>
        <ul className={cvStyles.bullets}>
          <li>Led product strategy, brand audits, organizational ethnography, and design research and design for clients of a design strategy studio serving nonprofits and social enterprises. Published methods as pro bono toolkits.</li>
          <li>Led UX/UI for Keep A Breast Foundation’s breast cancer self-screening mobile app.</li>
          <li>Strategized and designed a culturally-sensitive health education website for Lebanese and Iraqi women with UNICEF and Women's Refugee Commission.</li>
          <li>Other notable clients: Pancreatic Cancer Action Network, American Heart Association, Celebration Theatre, and Children’s Hospital.</li>
          <li>Led website redesigns for verynice and its publishing arm, Reginald.</li>
          <li>Facilitated design strategy workshops in the U.S., Mexico, and Colombia.</li>
        </ul>
      </div>

      {/* <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Design Thinking Facilitator</span>
        <span className={cvStyles.place}>Apple, University of Southern California</span>
        <span className={cvStyles.dates}>2018–2019</span>
        <ul className={cvStyles.bullets}>
          <li>Planned and led design thinking sprints at the yearly Apple Learning Series to reimagine the future of classroom technology with over 40 educators across the U.S.</li>
        </ul>
      </div> */}

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Co-founder, Partner</span>
        <span className={cvStyles.place}>Gridflower</span>
        <span className={cvStyles.dates}>2018–2019</span>
        <ul className={cvStyles.bullets}>
          <li>Led a creative partnership focused on UX/UI design, branding, and presentation design for 11 clients, including entrepreneurs and corporations.</li>
          <li>Created pitch decks used to close $1M+ funding for 3 early-stage startups.</li>
          <li>Strategized and designed the mobile and web app for Viasat’s first international expansion into Brazilian and Mexican markets.</li>
        </ul>
      </div>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Product Management Intern</span>
        <span className={cvStyles.place}>Adobe</span>
        <span className={cvStyles.dates}>2018</span>
        <ul className={cvStyles.bullets}>
          <li>Collaborated with a new team to conceive Creative Cloud Education, a platform for potentially 45M U.S. students to explore creative tools in math, english, and science.</li>
          <li>Conducted and analyzed 17 in-depth research interviews with stakeholders.</li>
          <li>Led market landscape analysis of EdTech competitors.</li>
        </ul>
      </div>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>User Experience Design Intern</span>
        <span className={cvStyles.place}>Adobe</span>
        <span className={cvStyles.dates}>2018</span>
        <ul className={cvStyles.bullets}>
          <li>Strategized user navigation logic and page design for consumer and business users of the Adobe.com website.</li>
          <li>Designed interface variants and conducted A/B usability tests to validate layouts.</li>
        </ul>
      </div>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Immersive Media Design Assistant</span>
        <span className={cvStyles.place}>Al Jazeera</span>
        <span className={cvStyles.dates}>2018</span>
        <ul className={cvStyles.bullets}>
          <li>Created website design and media assets for immersive 360° videos reporting news stories from the Global South.</li>
          <li>Designed graphics for “Yemen’s Skies of Terror,” winner of the 2018 Online Journalism Awards.</li>
        </ul>
      </div>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Market Research Consultant</span>
        <span className={cvStyles.place}>Adobe</span>
        <span className={cvStyles.dates}>2017–2018</span>
        <ul className={cvStyles.bullets}>
          <li>Conducted and analyzed 40+ surveys and qualitative interviews with young digital creators to inform the design of student-facing portals on Adobe’s Behance.</li>
        </ul>
      </div>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Product Innovation Intern</span>
        <span className={cvStyles.place}>Viasat</span>
        <span className={cvStyles.dates}>2017</span>
        <ul className={cvStyles.bullets}>
          <li>Conducted user research, UX strategy, and UI design for a mobile app used by North Americans age 65+ to purchase and manage their residential internet services.</li>
        </ul>
      </div>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Design Contractor</span>
        <span className={cvStyles.place}>Stanford Institute for Human-Centered Artificial Intelligence</span>
        <span className={cvStyles.dates}>2017</span>
        <ul className={cvStyles.bullets}>
          <li>Created the data visualizations, brand identity, cover illustration, and print layout for the inaugural AI Index Report.</li>
        </ul>
      </div>
      
      <h1 id="grants">Awarded Grants</h1>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>$50,000 Grand Prize Winner</span>
        <span className={cvStyles.place}>Funded by IDEO, Riot Games, Hopelab, and Susan Crown Exchange</span>
        <span className={cvStyles.dates}>2023</span>
        <ul className={cvStyles.bullets}>
          <li>Plot Twisters was the Top Proposal Winner out of nearly 200 applicants for the Designing for Digital Thriving challenge.</li>
        </ul>
      </div>

      <h1 id="residencies">Awarded Residencies &amp; Fellowships</h1>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Storytelling Fellow</span>
        <span className={cvStyles.place}>Diverse Intelligences Summer Institute</span>
        <span className={cvStyles.dates}>2022</span>
        <ul className={cvStyles.bullets}>
          <li>Participated in a 3-week transdisciplinary intensive consisting of lectures and salons about the origins, nature, and future of intelligences with 60 other artists, scientists, and academics.</li>
          <li>Delivered Plot Twisters workshops and presentations for other attendees.</li>
          <li>Funded by the Templeton World Charity Foundation.</li>
        </ul>
      </div>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Governance Archaeology Resident</span>
        <span className={cvStyles.place}>Media Economies Design Lab, University of Colorado Boulder</span>
        <span className={cvStyles.dates}>2021</span>
        <ul className={cvStyles.bullets}>
          <li>Created a framework for consensual online community governance in Plot Twisters through a co-creative media archaeology excavation and research-action model.</li>
          <li>Collaborated with a cohort of 17 artists, researchers, and technologists producing creative artifacts to advance digital democracy.</li>
          <li>Exhibited at the 2021 United Nations Internet Governance Forum.</li>
          <li>Funded by the Eutopia Foundation.</li>
        </ul>
      </div>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Research Resident</span>
        <span className={cvStyles.place}>Centre for Enabling Effective Altruism Learning and Research (CEEALAR)</span>
        <span className={cvStyles.dates}>2021</span>
        <ul className={cvStyles.bullets}>
          <li>Granted a 6-month funded residency at the co-living research center in Blackpool, UK with 25 other research residents.</li>
          <li>Studied how homeostasis and allostasis enable wellbeing through lenses of social emotions and embodied cognition.</li>
          <li>Supported community building through group dinners, game events, and writing inclusion-promoting policy.</li>
        </ul>
      </div>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Fellow</span>
        <span className={cvStyles.place}>Interact Fellowship</span>
        <span className={cvStyles.dates}>2020</span>
        <ul className={cvStyles.bullets}>
          <li>Selected for the 2020 cohort of the community of mission-driven technologists.</li>
        </ul>
      </div>

      <h1 id="honors">Awarded Honors</h1>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Top Proposal Winner</span>
        <span className={cvStyles.place}>OpenIDEO Designing for Digital Thriving Challenge</span>
        <span className={cvStyles.dates}>2023</span>
      </div>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Webby Award in Advertising, Media, &amp; PR (Student)</span>
        <span className={cvStyles.place}>The Webby Awards</span>
        <span className={cvStyles.dates}>2019</span>
      </div>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Renaissance Scholar</span>
        <span className={cvStyles.place}>University of Southern California</span>
        <span className={cvStyles.dates}>2019</span>
      </div>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Award of Excellence (Short Form)</span>
        <span className={cvStyles.place}>World Journalism Education</span>
        <span className={cvStyles.dates}>2019</span>
      </div>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Student Print/Digital Journalism Winner</span>
        <span className={cvStyles.place}>National Association of Hispanic Journalists</span>
        <span className={cvStyles.dates}>2019</span>
      </div>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Minority/Immigration Reporting Winner</span>
        <span className={cvStyles.place}>Los Angeles Press Club</span>
        <span className={cvStyles.dates}>2019</span>
      </div>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Mars City Design Challenge Winner</span>
        <span className={cvStyles.place}>Mars City Design</span>
        <span className={cvStyles.dates}>2018</span>
      </div>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Trustee Scholar (full-tuition merit scholarship)</span>
        <span className={cvStyles.place}>University of Southern California</span>
        <span className={cvStyles.dates}>2015–2019</span>
      </div>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Dean’s List</span>
        <span className={cvStyles.place}>University of Southern California</span>
        <span className={cvStyles.dates}>2015–2019</span>
      </div>

      <h1 id="writing">Published Writing</h1>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Cranmer, R. &amp; <span className={cvStyles.author}>Zhang, JL.</span> <span className={cvStyles.talkTitle}>The Seeds of Futures Engagement: Oslo’s <span className="normal">Future Library</span> and Mortality Awareness on TikTok.</span></span>
        <span className={cvStyles.place}>Upcoming article in the <em>Journal of Future Studies</em>.</span>
        <span className={cvStyles.dates}>Upcoming 2024</span>
      </div>

      <h1 id="presentations">Presentations &amp; Exhibitions</h1>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}><span className={cvStyles.author}>Zhang, JL.</span>, Kim, YK., Parent, J., Chang, C., &amp; Bogatean, H. <span className={cvStyles.talkTitle}><span className="normal">Twisterland</span> by Plot Twisters: Interactive online game world for fostering diverse personal narrative building.</span></span>
        <span className={cvStyles.place}>Presentation at Inclusive Gaming Conference hosted by University of Oxford in Oxford, United Kingdom</span>
        <span className={cvStyles.dates}>2024, May 1</span>
      </div>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}><span className={cvStyles.author}>Zhang, JL.</span>, Kim, YK., &amp; Parent, J. <span className={cvStyles.talkTitle}>Plot Twisters: Designing <span className="normal">Twisterland</span>: An online game nurturing agency through self-reflection.</span></span>
        <span className={cvStyles.place}>Presentation at Hyperdigital Designs Workshop hosted by University of Cambridge in Cambridge, United Kingdom</span>
        <span className={cvStyles.dates}>2023, June 14</span>
      </div>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}><span className={cvStyles.author}>Zhang, JL.</span>, Bogatean, H., Chang, C., Lim, A., &amp; Parent, J. <span className={cvStyles.talkTitle}>Plot Twisters: Creating an online game world for practicing self-regulation.</span></span>
        <span className={cvStyles.place}>Exhibition at Connected Life Conference hosted by University of Oxford in Oxford, United Kingdom</span>
        <span className={cvStyles.dates}>2022, June 17</span>
      </div>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}><span className={cvStyles.author}>Zhang, JL.</span> &amp; Chang, C. <span className={cvStyles.talkTitle}>Excavations: Designing for Dialogue</span></span>
        <span className={cvStyles.place}>Online Exibition at United Nations Internet Governance Forum hosted by the International Congress Center in Katowice, Poland</span>
        <span className={cvStyles.dates}>2021, December 6–10</span>
      </div>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Parent, J., Lim, A., &amp; <span className={cvStyles.author}>Zhang, JL.</span> <span className={cvStyles.talkTitle}>Allostatic Types: Towards a Taxonomy of Relational Qualia</span></span>
        <span className={cvStyles.place}>Flash Talk at Neuromatch Conference 4.0 hosted by Neuromatch (online)</span>
        <span className={cvStyles.dates}>2021, December 1–2</span>
      </div>

      <h1 id="teaching">Teaching Experience</h1>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Teaching Assistant</span>
        <span className={cvStyles.place}>University of Southern California</span>
        <span className={cvStyles.dates}>2018</span>
        <ul className={cvStyles.bullets}>
          <li>Supported 31 students in a course for the fundamentals of web, scripting, and interactivity (HTML, CSS, and JavaScript). Assisted lectures, led office hours, and facilitated exam reviews.</li>
          <li>Mentored students to achieve the highest final exam average in two years (88%).</li>
        </ul>
      </div>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Teaching Assistant</span>
        <span className={cvStyles.place}>University of Southern California</span>
        <span className={cvStyles.dates}>2017</span>
        <ul className={cvStyles.bullets}>
          <li>Supported 31 students in a course for server-side scripting (PHP), relational database design (MySQL), and data visualization. Assisted lectures, led office hours, and facilitated exam reviews.</li>
        </ul>
      </div>

      <h1 id="other">Other Projects &amp; Service Work</h1>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Founding Member</span>
        <span className={cvStyles.place}>How to Play With Fire</span>
        <span className={cvStyles.dates}>2022–present</span>
        <ul className={cvStyles.bullets}>
          <li>Co-organized and selected presenters for the in-person 2023 Hyperdigital Designs Workshop, hosted at the University of Cambridge’s Cambridge Digital Humanities.</li>
        </ul>
      </div>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Contributor</span>
        <span className={cvStyles.place}>boom saloon</span>
        <span className={cvStyles.dates}>2022–present</span>
        <ul className={cvStyles.bullets}>
          <li>Writing reading recommendations and reviews for the creative magazine’s monthly digital features.</li>
        </ul>
      </div>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Design Technologist</span>
        <span className={cvStyles.place}>Georgia State University</span>
        <span className={cvStyles.dates}>2022–present</span>
        <ul className={cvStyles.bullets}>
          <li>Collaborating with The EMPOWER Lab, a clinical doctoral lab led by Dr. Isha Metzger, to design and validate digital trauma-informed cognitive behavioral therapy (TF-CBT) interfaces for African-American youth.</li>
        </ul>
      </div>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Policy Writer</span>
        <span className={cvStyles.place}>Centre for Enabling Effective Altruism Learning and Research (CEEALAR)</span>
        <span className={cvStyles.dates}>2021</span>
        <ul className={cvStyles.bullets}>
          <li>Developed and successfully sought approval for a 20-page policy document reforming the center’s granting process for applicant equity and process transparency.</li>
        </ul>
      </div>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Team Lead</span>
        <span className={cvStyles.place}>Changeist</span>
        <span className={cvStyles.dates}>2019–20</span>
        <ul className={cvStyles.bullets}>
          <li>Facilitated discussions with middle and high school students about identity and social issues. Supported their relationships with social justice organizations in the Los Angeles area.</li>
        </ul>
      </div>

      <div className={cvStyles.entry}>
        <span className={cvStyles.title}>Virtual Reality Journalist</span>
        <span className={cvStyles.place}>JOVRNALISM</span>
        <span className={cvStyles.dates}>2018–19</span>
        <ul className={cvStyles.bullets}>
          <li>Produced “The Deported: Life Beyond the Border," a four-episode VR series about deportees in Tijuana, Mexico with a team of 12. Led interviews in Spanish, filmed with 360° cameras, developed scripts and storyboards, and conducted user testing.</li>
          <li>2019 Webby Award winner in Advertising, Media, &amp; PR (Student).</li>
        </ul>
      </div>

      </div>

      </div>

    </main>
  );
}