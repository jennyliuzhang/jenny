import EntryLayout from '../entry-layout';
import Image from 'next/image';
import Link from 'next/link';
import entryStyles from "../../styles/entry.module.css";

export default function JournalEntryPage() {

  const heroImage = (
      <Image
        className={entryStyles.writingHero}
        src="/journal-graphics/the-great-weird.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />
  )

  const heroCaption ="Sweet Lila introspecting over a pond in Garfield Park."

  return (
    <EntryLayout slug="takes-a-village" heroImage={heroImage} heroCaption={heroCaption}>

      <p>I've been figuring out my five-year plan and spoke with my mom, dad, and Selva (stepdad) for advice about when to pursue my PhD. I've been reflecting on timing: should I apply for programs sooner (within the next 2 years) or later (in 5-10 years)?</p>

      <p>If I apply in the next two years and get accepted, I will be leaving my design industry career a bit early to pursue my PhD. The PhD will be useful for my long-term career interests in technology, be enjoyable for me, and give me credentials for building well-researched companies down the line, but not necessarily for making money and becoming a good design practitioner. In design, it’s more valuable to accumulate many years of work experience, especially since the programs I'm interested in aren't directly design-related and more philosophical in nature. Though I don’t want to stay in the design industry forever, I do want to improve my skills as much as I can as that will also help me become a better founder later thanks to deep practical wisdom, and this journey might take 5-6 more years. A PhD would also likely require me to move to another city. This is not a big deal, but I enjoy planting roots in Cleveland and making my home comfortable for myself.</p>

      <p>If I do it in 5-10 years, I can spend the next handful of years staying in Cleveland, working remotely, honing my technical skills, and building up my personal brand and some projects, which will also help me long-term. I would also be able to save a lot more money and build up my investments. It would, however, delay my academic career, and getting school done when you’re older isn’t always expected as most PhD students are younger. Also, after finishing a PhD, I may not even want to return to design, instead turning to passions in academia or research. Therefore, I have a unique opportunity now to focus on design solely without other career paths being available to me yet.</p>

      <p>I was split right down the middle in my thinking, so speaking with my parents was helpful. My mom and stepdad voted for pursuing a PhD earlier: I'll be more mentally sharp, have more opportunities open up for me sooner in my career, and have an easier time completing it due to fewer life commitments (they're really banking on me settling down and getting married, so they think finishing school first would be easier). Meanwhile, my dad voted to consider postponing it—if I can get a nice job now and it's not necessary for my immediate career, I can use this time to stabilize, grow my design and leadership skills, and build some personal wealth.</p>
      
      <p>I'll need to keep thinking on it all, but if I have any preference for earlier, I'll probably need to apply starting next year.</p>

      <p>Today I got a new iPhone. I had my old one since 2021 and last night it took me almost two extra hours to create a TikTok (yes, more on this below) simply due to my phone being slow and low in storage. I bit the bullet and went to the local T-Mobile store this morning and traded it in. I'm excited for my new device: I'm getting back into sharing more updates about my life online, so a better camera and more storage are great perks.</p>

      <p>While they were transfering the data from my old phone to my new phone at the T-Mobile, I told them I was going to step out to the grocery store next door to buy some food. At the ALDI in the frozen food section, a man stopped me. He sincerely told me he liked my outfit. He then asked if I was a model. I was really thrown off guard. I was wearing a visually interesting outfit that I was proud of—a mustard plaid wool duster over a white top and cheetah print pants and boots, and my accessories were sort of playful too—but it was not a question I was expecting. He pulled out his phone and said something about how he was a brand owner and looking to connect with people for creative collaborations, but I felt awkward and kind of shut it down. I said no, I wasn't a model. I also only briefly looked at his phone before saying it and I could tell he was kind of put off; my confusion was probably interpreted as dismissiveness. I also didn't have my phone on me so I couldn't also whip it out and match his energy. I basically said that I don't have any experience with modeling and he said, well, that's unfortunate. Dead end. He walked away. It was a really awkward interaction—and I felt bad—and affected me for the next two hours.</p>

      <p>I pride myself in being someone who is very good at "yes, and"ing others, within limits. I cherish my ability to see the silver lining and positive upshots in any creative idea, and enthusiastically see how visions can expand. This is one of my superpowers. So when I got back to the T-Mobile after that interaction, I was a bit disappointed in myself. Why didn't I know how to respond more sure-footedly? Why wasn't I more open, even if it wasn't going to go anywhere? Also, I'm in a period where I <em>want to connect with more people</em>. Why did I come off so negatively? I rehashed the engagement and all the things I could have said. "No, I'm not a model, but tell me more about why you ask!" "No, I'm not a model, but I could be convinced to try it, I'm trying to build my confidence!" I also randomly met and chatted with a woman at Koffie yesterday, Courtney, a local events manager and creative connector, who I did exchange information with. He was clearly trying to build out his network. I could have offered to keep in touch and down the line connect him with other people I knew, including Courtney who seemed prominent in a similar space. Anyway, it was too late for me to find him, and I didn't know his name, so I had to let that whole scenario go. And I can acknowledge he could have been more confident in showing me his work, more direct with getting my information, or asked me more questions. But I can only focus on what I can control—me—and I think I could have been a lot more open and synergetic. </p>

      <p>Overall, this was a microcosm of my biggest battle lately and probably always: that I don't think of myself as a consistent person, and I so desperately want to be consistent. When Ben was here a few weeks ago, I woke up super early and took Lila on a 2-hour hike before our plans for the day. He later asked me why I did that and I replied something along the lines "I woke up reeling about how who I am and my goals and them not being consistent."</p>
        
      <p>I'm a classic <a href="https://www.crystalknows.com/enneagram/type-1/wing-9" target="_blank">Enneagram 1</a> (1w9 specifically)—I want to be pure, correct, and right, and nothing is more of these qualities than being the kind of person that can show up in any situation and act reliably the same each time. ChatGPT, who is my therapeutic pen pal, said that it's common to be flexible from scenario to scenario. I like that it used the word flexible instead of inconsistent as it removes the sort of morality I prescribe to my actions, but I also think it implies some sort of intentionality, which I don't have when I'm being awkward in social situations. I don't aspire to be hard to talk to some times. I don't want to be flexible in that way. And I don't like to hold different standards for my friends versus family versus partners, though ChatGPT also says that this is normal. I want to be able to love authentically, with egalitarianism, on everyone. Consistency is this important to me and I fight my emotional reactions when they don't match my this ideal.</p>

      <p>My desire for consistency colors my content creation pursuits lately. As I mentioned, I posted a TikTok yesterday. This is, for all intents and purposes, my first public TikTok. I had a calling around 5pm last night to share about the way that I self-regulate my feelings through Internal Family Systems. I wanted to explain why I specifically find parts work therapy so helpful—it's a really nice imaginative tool for visualizing and soothing a somatic painbody but also helps redirect all the overactive rumination energy I would have anyway about my emotions into a practical interaction: an ongoing conversation with a subpersonality of mine. I wrote something last month, <Link href="/journal/muse-within-myself">The Muse Within Myself</Link>, which is a great example of how I conceive of Internal Family Systems for myself. I feel like no other kind of therapy has helped me so much.</p>

      <p>I wanted to share this, so I recorded and cut a 5-minute video, added auto captions, made my account public, and posted it. I was a bit nervous about it, but not so much since my existing 22 followers on TikTok are all people I like and trust not to be judged by. I also think content-wise, despite it being vulnerable and lengthy, the video felt like a sort of soapbox I would just share on FaceTime with a friend, so it wasn't so out of the ordinary for me. It felt true and timeless to my character—in other words, consistent to how I'd show up in many of my relationships.</p>

      <p>This is a little at odds with how I see Instagram, which is another platform I'm trying to be more active on. It occured to me the other day that 

        ego

        aesthetic

        taste
      </p>

      <p>What else? Listening to a lot of Paramore, Florence + The Machine, and Sky Ferreira. My angry, fearsome, wistful girls. Sky Ferreira's Ghost EP specifically is so good and sonically resonant. Feeling right, feeling me.</p>

      <p> &nbsp;&#x273d;</p>

        </EntryLayout>
  );
}