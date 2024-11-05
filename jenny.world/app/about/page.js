import Image from "next/image";
import Link from "next/link";
import aboutStyles from "../styles/about.module.css";
import Tooltip from "../components/Tooltip";
import Button from "../components/Button";

export default function Page() {
  return (
    <main>
      <h2>About</h2>

      <div className={aboutStyles.introduction}>
        <div className={aboutStyles.introPara}>
          <h1 className={aboutStyles.jennyHeadline}>Jenny leads thoughtful design projects, from concept to launch.</h1>

          <div className={`${aboutStyles.portrait} ${aboutStyles.hideOnDesktop}`}></div>

          {/* <p>I’m Jenny Liu Zhang, a designer skilled in creating software products and media. As a strong visual and narrative thinker, I’ve always enjoyed envisioning abstract ideas, dissecting their fundamental relationships and patterns, and conveying them in conscientious, delightful ways.</p> */}

          <p>I’m Jenny Liu Zhang, a digital designer with backgrounds in programming and the arts. I’m a visual and narrative thinker and my work style is energetic, meticulous, and positive. I grew up exposed to multiple cultures and have lived in the USA, Europe, and Asia.</p>
          
          <p>I value co-creative collaboration, well-rounded research, and effective communication. Combined with an entrepreneurial mindset, I thrive at the intersection of design, technology, and product. I’m also passionate about good writing and brand storytelling.


            {/* I’m also passionate about writing and personal storytelling, which I hone in my <Link href="/journal">journal</Link>. */}
            
            </p>

          {/* <p>I'm Jenny Liu Zhang, a digital designer with wide hobbies and a passion for writing. My attitude is energetic, meticulous, and positive. I’ve always enjoyed envisioning new concepts or different worlds and dissecting their fundamental relationships, processes, and patterns. I'm practicing the art of bringing these abstract ideas to life in conscientious, delightful ways.</p> */}

          <div className={aboutStyles.skillsTable}>
            <div className={aboutStyles.creativeStrategy}><span>Product Strategy</span></div>
            <div className={aboutStyles.designResearch}><span>Design Research</span></div>
            <div className={aboutStyles.uxDesign}><span>UX Design</span></div>
            <div className={aboutStyles.uiPrototyping}><span>UI Design</span></div>
            <div className={aboutStyles.frontEndDev}><span>Front-End Development</span></div>
            <div className={aboutStyles.contentDesign}><span>Content Design</span></div>
            <div className={aboutStyles.graphicDesign}><span>Graphic Design</span></div>
            <div className={aboutStyles.webDesign}><span>Web Design</span></div>
            <div className={aboutStyles.illustration}><span>Illustration</span></div>
            <div className={aboutStyles.artDirection}><span>Art Direction</span></div>
            <div className={aboutStyles.strategicForesight}><span>User Insights</span></div>
            {/* <div className={aboutStyles.strategicForesight}><Tooltip text="A method to assess project opportunities &amp; challenges (from the field of futures studies)" width="210px" marginleft="-105px" border="none"><span style={{display: 'inline'}}>Strategic Foresight*</span></Tooltip></div> */}
            <div className={aboutStyles.roadmapping}><span>Lifecycle Management</span></div>
          </div>

          <Button title="See my full skillset" desc="" link="/cv" image="/cv-graphics/thumbnail.png"></Button>

{/* 
          <p>
          As a versatile creator with both technical skills and a strong critical foundation,
          
          I have 7 years of <Link href="http://localhost:3000/cv#professional">industry experience</Link> operating as an in-house and contract design lead, for both lean and large organizations. 

          I only commit to projects when I'm confident I will add value, and I prioritize the ones that I believe will bring the world delight :)</p> */}

          {/* <h1 style={{marginTop: '0.5em'}}>End-to-End Design Experience</h1> */}
          {/* <h3>Personal Statement</h3> */}
          <h3>End-to-End Design Experience</h3>
          
          <p>I got my start at age 11 following and contributing to graphic design blogs, picking up Adobe software and self-teaching <Tooltip text="Back when &lt;font&gt; and	&lt;center&gt; were still a thing" width="180px" marginleft="-90px"><span>HTML</span></Tooltip>, CSS, and JavaScript to build my own art websites. I still bring this curiosity and personal drive to my craft today. My expertise now ranges from spearheading early UX strategy to designing go-to-market education and promotional campaigns, for both lean and large organizations.</p>
          
          <p>Most recently, I was the first designer at <Link href="https://www.dorsia.com/" target="_blank">Dorsia</Link>, a $35M-backed culture tech startup. I owned early product and marketing design, working closely with senior leadership to strategically facilitate expansion from zero to 60K users, 12 global markets, and five additional designers during my two-year tenure.</p>
          
          <p>Previously, I freelanced design and web development as a digital nomad, joining 13 diverse clients and teams as a cross-functional collaborator. Before that, I led design strategy projects at <a href="https://www.verynice.co/" target="_blank">verynice</a> and worked at <a href="https://www.adobe.com/" target="_blank">Adobe</a> as a UX and product intern for Adobe.com and Creative Cloud respectively.</p>
          
          <p>I’m also the founder and director of an <Link href="/cv#grants">IDEO award-winning</Link> design collective called <a href="https://www.plottwisters.org/" target="_blank">Plot Twisters</a>. We’re a volunteer team of eight creating our flagship product <em>Twisterland</em>, an online game world for journaling and self-reflection.</p>
          
          {/* <p>I also have a storied academic background in the digital humanities, with <Link href="/cv#writing">published research</Link> and several <Link href="/cv#presentations">conference presentations</Link>, <Link href="/cv#residencies">residencies</Link>, and <Link href="/cv#residencies">fellowships</Link> under my belt.</p> */}
          
          <p>I attended the University of Southern California on a full-ride merit scholarship, graduating with an interdisciplinary B.S. in “Arts, Technology and Business of Innovation” from the <a href="https://iovine-young.usc.edu/" target="_blank">USC Iovine and Young Academy</a>. I’m currently writing my thesis for a part-time M.S. in “Narrative Futures,” a degree on the role of storytelling in modern society, from the <a href="https://efi.ed.ac.uk/" target="_blank">Edinburgh Futures Institute</a> at the University of Edinburgh in Scotland, UK.</p>
          
        </div>


        <div className={aboutStyles.highlights}>
          <div className={`${aboutStyles.portrait} ${aboutStyles.hideOnMobile}`}></div>

          {/* <Button title="My Journey, Values &amp; Perspectives" desc="" link="/about/journey" type="line"></Button> */}

          <Button title="Testimonials" desc="" link="/testimonials" type="line"></Button>
          <Button title="Résumé" desc="" link="/resume.pdf" type="line" isExternal="true"></Button>
          
          <div style={{height: '1em'}}></div>

          <h4>My Digital Nomad Years</h4>
          <p>I spent 2021-23 as a <Tooltip text="I worked remotely from hostels, Airbnbs, hotel lobbies, trains, and cafes" width="170px" marginleft="-80px"><span>digital nomad</span></Tooltip>, honing my design and project skills while traveling to 10 countries and 27 cities.</p>
          <Image src="/journal-graphics/nomad-life-recap/1.png" alt="Digital Nomad collage" width={0} height={0} sizes="50%" style={{ display: 'inline', margin: '0 auto 0', width: '50%', height: 'auto', borderRadius: '10px 0 0 10px'}}></Image>
          <Image src="/journal-graphics/nomad-life-recap/2.png" alt="Digital Nomad collage" width={0} height={0} sizes="50%" style={{ display: 'inline', margin: '0 auto 0', width: '50%', height: 'auto', borderRadius: '0 10px 10px 0'}}></Image>

          {/* <Button title="More about my travels" desc="" link="/journal/nomad-life-recap" type="line"></Button> */}

          <Button title="More about my travels" desc="" link="https://www.instagram.com/p/C1zqq6MpV8d/?img_index=1" target="_blank" type="line" isExternal></Button>

          <div style={{height: '1em'}}></div>
          
          <h4>Fallible Metadata</h4>
          <p>Myers–Briggs <a href="https://www.16personalities.com/enfj-personality" target="_blank">ENFJ</a> (sometimes <a href="https://www.16personalities.com/enfp-personality" target="_blank">ENFP</a>). Enneagram <a href="https://www.crystalknows.com/enneagram/type-1/wing-2" target="_blank">1w2</a>. Attitudinal Psyche <a href="https://www.attitudinalpsyche.com/personality-profiles/tessera/vfel/" target="_blank">VFEL</a>. Socionics <a href="https://www.sociotype.com/socionics/types/EII-INFJ" target="_blank">EII-INFj</a>. Eristics <a href="https://www.eristicstest.com/#the_architect" target="_blank">Architect</a>. <a href="https://cafeastrology.com/zodiacaquarius.html" target="_blank">Aquarius Sun</a> (and stellium), <a href="https://cafeastrology.com/print/moon_in_taurus.html" target="_blank">Taurus Moon</a>, <a href="https://cafeastrology.com/leo_ascendantrisingsign.html" target="_blank">Leo Rising</a>.</p>
        </div>
        
      </div>
      
      <div className={aboutStyles.creativePrinciples}>

      <h2 className="centeredh2">My Creative Principles</h2>

      <div className={aboutStyles.principleTiles}>

      <div className={aboutStyles.principleTile}>
        <h3>Lead With the Vision</h3>
        <blockquote>&ldquo;The ultimate, hidden truth of the world is that it is something that we make, and could just as easily make differently.&rdquo;</blockquote>
          <p className={aboutStyles.author}>David Graeber</p>
          <p>To design is to make something <em>by design</em>. When I&rsquo;m inspired by a project vision, I seek to clarify its values, affordances, and design criteria—and this is an ongoing process. I holistically consider users, consumers, and stakeholders to ensure the end product is aligned with the future we’re all striving for.</p>
      </div>

      <div className={aboutStyles.principleTile}>
        <h3>Curiosity Over Criticism</h3>
          <blockquote>&ldquo;The world is full of magic things, patiently waiting for our senses to grow sharper.&rdquo;</blockquote>
          <p className={aboutStyles.author}>William Butler Yeats</p>
          <p>Rather than dismissing an idea early on due to an initial bias or negative reaction, I try to unpack what my response reveals about myself and how I interpret the world around me—and whether my interpretations are useful in context. Though this is hard to consistently do, I find that when I let go of overly quick or critical assumptions, I&rsquo;m more capable of staying open to other subtexts and possibilities, especially what are known as &ldquo;blind spots&rdquo; and &ldquo;unknowns&rdquo; in <a href="https://en.wikipedia.org/wiki/Johari_window" target="_blank">Johari's Window</a>.</p>
      </div>

      <div className={aboutStyles.principleTile}>
        <h3>Build on Collective Wisdom</h3>
        <blockquote>&ldquo;There is a conversation in the room that only these people at this moment can have. Find it.&rdquo;</blockquote>
          <p className={aboutStyles.author}>adrienne maree brown</p>
          <p>Every project is a melding of the unique tastes, knowledge, and perspectives of those involved. Just as biodiversity strengthens ecosystems, cross-functional and interdisciplinary exchange enriches and optimizes creativity. Great insights are revealed where individual experiences resonate or overlap, making the whole stronger than the sum of its parts.</p>
      </div>

      <div className={aboutStyles.principleTile}>
          <h3>Surprise and Delight</h3>
          <blockquote>&ldquo;Anyone who's a chef, who loves food, ultimately knows that all that matters is: &lsquo;Is it good? Does it give pleasure?&rsquo;&rdquo;</blockquote>
          <p className={aboutStyles.author}>Anthony Bourdain</p>
          <p>A good experience is made of little memories that bring happiness. I strive to design the way I give gifts to friends: with attention to the details. Whether through a clever interaction or beautiful visual motif, I like to invite wonder and joy into my work.</p>
      </div>

          </div>
          
      </div>


      <div className={aboutStyles.axioms}>

      <h2 className="centeredh2">Axioms I Like</h2>

        <div className={aboutStyles.axiomTiles}>

          <div className={aboutStyles.axiomTile}>
            <h4>Yes, And</h4>
            <p>This is the famous first rule of improv. It’s hard to get anywhere in creativity if you’re always saying “no” and never playing an idea forward.</p>
          </div>

          <div className={aboutStyles.axiomTile}>
            <h4>Ideas Are Cheap</h4>
            <p>Execution is expensive.</p>
          </div>

          <div className={aboutStyles.axiomTile}>
            <h4>Kill Your Darlings</h4>
            <p>I learned this phrase from Mrs. Wray, one of my high school English teachers, and it has never left me. Prioritize effective work over personal attachment.</p>
          </div>

          <div className={aboutStyles.axiomTile}>
            <h4>As Above, So Below</h4>
            <p>Creations are reflections of their creators. Designs are reflections of their processes. Large initiatives are made up of little activities imbued with the same values. I think of <a href="https://en.wikipedia.org/wiki/Fractal" target="_blank">fractals</a> and <a href="https://en.wikipedia.org/wiki/Conway%27s_law" target="_blank">Conway's Law</a>.</p>
          </div>

          <div className={aboutStyles.axiomTile}>
            <h4>Enjoy and be one with your work</h4>
            <p>&ldquo;Whatever the tasks, do them slowly and with ease, in mindfulness. Don’t do any task in order to get it over with. Resolve to do each job in a relaxed way, with all your attention.&rdquo; — Thich Nhat Hanh</p>
          </div>

          <div className={aboutStyles.axiomTile}>
            <h4>Education is expensive, but so is ignorance</h4>
            <p>Growth never comes cheap. I’ve spent a lot of time, energy, and money on mistakes that taught me important life lessons. I consider this &ldquo;life tax,&ldquo; but I’ve learned that I can’t evolve if I don’t pay it.</p>
          </div>

          <div className={aboutStyles.axiomTile}>
            <h4>Every problem has a solution</h4>
            <p>My mom raised me with this one.</p>
          </div>


          <div className={aboutStyles.axiomTile}>
            <h4>Luck Is Opportunity Meets Preparation</h4>
            <p>Good things take both hard work and opening doors. Outcomes are in our control.</p>
          </div>

          <div className={aboutStyles.axiomTile}>
            <h4>Trends come and go</h4>
            <p>Almost everything we make will expire—some tastes just have longer lifecycles. Generally, it's good to err on the side of long-lasting. But it can also be fun, and sometimes the best choice, to make the ephemeral thing.</p>
          </div>

          <div className={aboutStyles.axiomTile}>
            <h4>The devil&rsquo;s in the details</h4>
            <p>Some times it comes down to the little things, so it&rsquo;s good to be thorough and do your due diligence.</p>
          </div>

          <div className={aboutStyles.axiomTile}>
            <h4>Always Do Your Best</h4>
            <p>Your &ldquo;best&rdquo; will change based on your circumstances at any point in time, but always be positive and work with what you have.</p>
          </div>

          <div className={aboutStyles.axiomTile}>
            <h4>Done Is Better Than Perfect</h4>
            <p>In the times when our &ldquo;best&rdquo; disappoints us (this is inevitable), accept that progress is better than nothing, then rest and prepare for next time.</p>
          </div>
          
        </div>

      </div>

      {/* <h1>My Journey</h1>

      <div>
          <Image src="/jenny-growth.png" width={0} height={0} sizes="50%" style={{ display: 'block', margin: '40px auto', width: '50%', height: 'auto' }}></Image>
          <p>I owe a lot of my curiosity, creativity, and drive to my upbringing. I'm a Chinese-American with immigrant parents who prioritized giving me opportunities to explore my intellectual and spiritual growth — opportunities they did not have growing up. , and watching my parents work hard to keep our household together, often balancing 3 or more jobs at a time. Through their signature mixed-age classrooms and freeform work time, I learned to independently pursue my interests, including my love for reading, writing, and the visual arts.  I entered my preteen years, I explored online . I As a child, I loved inventing stories and making maps of ideas and places, then had an early start in web design when I taught myself GIMP, Photoshop, HTML, and CSS at age 12.</p>
      </div> */}

    </main>
  );
}