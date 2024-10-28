import EntryLayout from '../entry-layout';
import Image from 'next/image';
import entryStyles from "../../styles/entry.module.css";

export default function JournalEntryPage() {

  const heroImage = (
      <Image
        className={entryStyles.writingHero}
        src="/journal-graphics/muse-within-myself.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />
  )
  const heroCaption = "Butterfly chrysalises I drew for an early version of this website back in July 2022."

  return (
    <EntryLayout slug="muse-within-myself" heroImage={heroImage} heroCaption={heroCaption}>
        
        <p>There is a part of me that has been eluding me for a few weeks. I haven’t been able to access her. She shut down sometime earlier this month and has only been speaking to me through the grapevine of my other inner voices.</p>

        <p>She is orchestral, bubbly, and diaphanous. Those are her own descriptions of herself and she means them. She is childlike and a little annoying, but she’s older than she acts. She’s been burned a few times by the sun, overstaying her welcome in spotlights, and seeking warmth from selfish people. She likes to live in the dark and move around with a lantern to illuminate what is directly in front of her. This allows her to focus on the details, which she prefers despite being well-equipped and having excellent genes for seeing the big picture. She will think about the big picture if it is important for humanity, or if the person she’s talking to really pries it out of her. But seriously, she prefers to focus on the details. Comparing the rhythm of a jazz song to the pacing of a really good weekend. Describing the hue of the beams in an imaginary architectural structure. Detecting each cell’s unique sting as it gets filled with the ink of a tattoo needle. Persuading you to try Pho Lee, the best and most underrated pho place in town because the broth is balanced and the tendon is cut approachably and the bean sprouts are always fresh, you can tell. She is the kind of person you would describe as an “odd duck,” which she is mildly embarrassed by.</p>

        <p>She has reason to hide. She is very proud, but also shy and fearful. She is quite smart but easily overwhelmed and this makes for a strange personality where she’s extremely observant, considerate, and tender, but also stressed out and self-demeaning. She does not like to be made fun of. Just an ounce too much of the wrong stimuli can set off a pattern of anxiety, so she needs to be sensitive to the situations she finds herself in and leave as necessary. I don't think she likes being alone, but she has a hard time making true friends.</p>

        <p>She asks a lot of questions. Most of them are good questions, or so she thinks, but other people can find them obnoxious. She finds their reactions obnoxious in turn, but she tries to ignore them because she knows her unwavering commitment to learning is a secret weapon. She was the one that helped me get great grades and a full-ride to college. She is an archetypal journalist and investigator. She is a very reliable strategist and operator. Her thinking mind is lucid. She got a 2200 on the SAT without tutoring or social help. She's the polyglot in me, the one that speaks Spanish and Mandarin. She knows how to play chess better than she admits.</p>

        <p>When she’s feeling warm and safe, she’s very funny. She expresses her insights and observations with a tone of incredulity, as if it’s insane that the world is the way it is. Phenomena exist to her in shocking and flavored permutations. She has a wide taste for ideas but a mediocre diet of them. She sleeps in seasons, not nights. She cries during nearly every movie or TV show—she always finds something to cry about, something unspoken and deep-seated. She may deliver soapbox speeches if she feels truly protected by your presence.</p>

        <p>Of all my inner voices, I think she's both the most intelligent and the most shame-filled. I don't know why that happens. Maybe it's related to the fact that she's able to see the big picture and therefore how she doesn't really fit into it. She's aware of all the ways she diverges from the harmony, is orthogonal, unusual, out of sync. And because people tend to love what's familiar, she feels constantly at risk of being too incorrect to be loved. She wants to belong, go with the flow, <em>feel like a natural</em>.</p>

        <p>Unfortunately she also knows that it's her unnaturalness—this strange outsider helter-skelter twang—that empowers her brand of intelligence. She can approach most things, even some challenging situations, meticulous and intrigued. She likes to make logical breakdowns and frameworks, in the way toddlers make up their own language. She thinks this is funny because life is probably impossible to typify but we always try to do it anyway and that's hilarious. She can make light of any situation and she's who you want by your side if you need a strong dose of positivity and resilience. She is annoyed by self-conscious cop-like people who police their personalities and the personalities of others. She thinks ennui is kind of silly.</p>

        <p>She's avoiding me, but I can tell she's been speaking to my other inner voices. Her humor is here in my writing and her curiosity is there in my search history. I can subtly feel her anxiety when I talk to my friends about her problems. She occasionally advises my career planner voice and loves cuddling on the couch with my inner creature. She does ignore the voices who want to direct me to do the dishes and get back into yoga, but she's never been interested in them and has always found other preoccupations when they do their thing.</p>
        
        <p>I trust her judgment deeply on the long-lasting things like legacy planning and what my magnum opus will be in this lifetime. I also trust her judgment on food, drink, and art because she has a very good sensibility for quality, independent of outside information. She is the guard of the writing on this website. She is the last stop to check in with when I am resolving emotional turmoil. I kind of need her to get over her shame and stop going into hiding when shit happens and be more unabashed and active in my life. I rely on her weird nature. Her eccentricity is so worthy and terrific. She is who I want to do everything for because she's so wise, special, brave, and deserving. I hope she feels like she can come back out soon. &nbsp;&#x273d;</p>

        </EntryLayout>
  );
}