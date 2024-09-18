import Image from "next/image";
import Link from "next/link";
import entryStyles from "../../styles/entry.module.css";

export default function Page() {
  return (
    <main className={entryStyles.entryStyles}>
      <div className={entryStyles.writingTop}>
        <h2><span className="subnav"><Link href="/journal" className="breadcrumb">Jenny&rsquo;s Journal</Link>And So On</span></h2>
      </div>
      
      <Image
        className={entryStyles.writingHero}
        src="/journal-graphics/and-so-on.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.body}>
        <h1>On Body Mods</h1>
        <h6>March 2022</h6>
        <h6>3 min read</h6>
        <p>For context, I’m pretty tattooed but don’t often show my tattoos publicly. I also have some other lived experiences engaging with other body mods.</p>

        <p>I’ve learned to really appreciate a trauma-informed lens, i.e. recognizing that a person’s decision-making is impacted by their lived experience, including learned reactions from past conflicts or challenges where their emotional, spiritual, cognitive, and physical needs weren’t met, and they needed to find whatever way possible to self-regulate. I find that this is the most nuanced, intersectional, and trans-inclusive approach — especially for the topic of body mods, which is a longstanding point of discourse in queer and trans communities.</p>

        <p>To present it simply, I think humans often make decisions from these three states of “coping”, “healing”, or “flourishing.” Many times body mods made from a coping perspective might be influenced by a personal reaction to an insecurity, usually because of some perceived social/environmental structure. A simple example is a person surrounded by a bunch of heavily-pierced people might get piercings to fit in if they aren’t secure in how they’re currently socially accepted there. In another situation, a person might get tattoos to stand out, because maybe they’ve internalized disapproval from their social environment for some reason and want to externalize this on their body to relieve the cognitive dissonance, which is a coping behavior.</p>

        <p>Yet for folks on the opposite end who are secure and flourishing, body mods may not be trauma- or insecurity-related reactions, but more like conscious decisions made for positive self-congruence or a relationship-driven function. Self-congruent functions are similar to my last example of getting tattoos to relieve cognitive dissonance, but a more positive example of that might by getting plastic surgery because it’s necessary for a health reason, which comes from a place of respecting your body and wanting one’s wellbeing to be actualized in physical form; we want our inner and outer health to be congruent. Another example is how Inuit women get traditional face markings to celebrate milestones and accomplishments in their lives. These behaviors can fulfill a positive self-concept, which is important for healthy emotional regulation. Inuit face markings can also fulfill what I mean by “relationship-driven functions” because by getting one’s markings, a woman is grounded in a shared and intergenerational identity that provides safety love through bonded connections, which is also important for sustaining emotional flourishing.</p>

        <p>Then there are the many cases where there’s this gray area when a person is outgrowing full-on self-sabotage but has not quite arrived at consistent, positive adaptation toward self-congruence and healthy relationships. This is the space when people are still figuring out how to break out of dysregulatory emotional-cognitive cycles, between “am I honoring my body?” or “am I acting out of fear?” I think decisions made in this ambiguity come from the “healing” perspective, between coping and flourishing. (Trigger warning about self-harm for the next two sentences) Someone who is healing, for example, might still self-injure even though they recognize it as a trauma response (cutting, for example, is often seen as a coping behavior, related to the cognitive dissonance I mentioned earlier). In these self-aware moments, instead of being caught in the trauma-related thinking pattern (e.g. “I deserve this because I’m unloveable”), a person might react in mixed ways (e.g. “I can’t believe I just did that, how could I be so mean just now”), or invent a new narrative to make meaning of the reaction (e.g. “these cuts symbolize my inner pain and will motivate me to be kinder to myself moving forward”). If we take this mixed processing and apply it to body modifications, there may be a host of reasons why people change themselves, continue to want to, regret but learn to live with it, or try to reverse back. I think in these cases people learn what they value more clearly through each instance of change, and their values, self-narratives, and relationships solidify or become more manageable as they move through these "growing pains.”</p>

        <p>We see this often in discourse about cosmetic forms of plastic surgery and techniques like botox, where people may initially make decisions stemming from insecurity of not being accepted if not conventionally beautiful, but use body modification as a way to strive for self-congruence, process that insecurity in real-time, and come to terms with their physicality in the end. Yet this is a very palpable and widespread insecurity grounded in some truth about “pretty privilege,” and it’s no wonder why using cosmetic surgery to cope and/or heal is so prevalent.</p>

        <p>Anyway, I hold deeply that people who get body mods through any of these lenses, especially the coping and healing lenses, shouldn’t be shamed for “shallow” behavior; we all have insecurities that we personally react to and don’t always have control over, and some reactions to them, like body mods, are more visible than others. &nbsp;&#x273d;</p>

      </div>      

    </main>
  );
}