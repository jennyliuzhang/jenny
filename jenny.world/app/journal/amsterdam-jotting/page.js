import EntryLayout from '../entry-layout';
import Image from 'next/image';
import entryStyles from "../../styles/entry.module.css";

export default function JournalEntryPage() {

  const heroImage = (
    <Image
        className={entryStyles.writingHero}
        src="/journal-graphics/amsterdam-jotting.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />
  );

  const heroCaption = "One side of the Rechtboomssloot canal in Amsterdam, Netherlands.";


  return (
    <EntryLayout slug="amsterdam-jotting" heroImage={heroImage} heroCaption={heroCaption}>
        <p>Today I experienced a moment that perfectly describes my mom. We are sitting at a bus stop in Monnickendam. She is explaining in detail to me how investments work, why Ohio is a good place to invest, and how to use the loan credit from investments to help pay off school semester by semester. As she talks, she is moving her right wrist vigorously to gesture her thoughts. She notices her gold bracelet of red rubies as she does this. She stops and laughs while wiggling her bracelet hand. "I love this," she says. "I love things like this. It's so pretty. I love it." She then points out her abacus earrings. "I got these because I'm an accountant." She laughs. After a pause she asks, "What was I saying?"</p>

        <p>The buildings in Amsterdam look like big chocolates. I love it here. It's a perfect fit for my tastes. I want to live here long-term one day. In fact, traveling between Edinburgh and here has made me think a lot about <em>places to live long-term</em>. I have been unrooted for around two years now and I'm getting tired. My suitcase is big but not big enough. I want a bathroom all to myself. I want a place to furnish.</p>

        <p>This might explain why the last few weeks, just before bed, I would scroll and scroll on Redfin. I have been casually looking for a home for a few months, but I was feeling called to be more attentive lately. My saved searches are mid-sized cities (for both personal preference and affordability) in the east coast time zone (compatible for working at Dorsia and timing my Masters classes) in areas where climate change wouldn't be a long-term factor (so basically parts of the Midwest and Mid-Atlantic—not the South).</p>

        <p>Long story short, while here in Amsterdam, I remotely put an offer down on a condo in Cleveland, Ohio of all places and it was accepted yesterday. People joke about Ohio being a “nowhere” place, but now that’s where I’m trying to set up home base and I couldn’t be more excited. I’ve not seen the condo in person, just had my agent tour it a couple times and take lots of videos, but it’s really gorgeous from what I've seen. It's a three-story loft (3 stories!!!). A dream. Right across from a spacious park, lots of coffee shops, a bookstore, some restaurants. I’m eager to learn more about the history of the neighborhood, and of Cleveland in general. I’m also excited to be a part of a community again. Everywhere I go I have this big desire to be involved, to volunteer and have a dog and make local friends. To have a bicycle. To have my staple spots.</p>

        <p>Everyone thinks I am very crazy for buying a condo I haven't seen person. It is probably very crazy. But I don't really have the vantage point to care. I am working full-time while traveling internationally and doing a Masters and running a game design collective and actively practicing new hobbies like singing and pilates. I'm both whim-driven and highly commital. I'm probably exactly the right person to make such a crazy decision.</p>

        <p>My Masters has been off to a good start. I’ve enjoyed meeting some of the other people in my program and department. I do feel kind of older than or different from many of the other students, even though we are all roughly the same age; the divide is noticeable between people who are coming straight from undergrad or academic environments vs. people who have worked in industry or indulged in other disciplines or trainings. There are a few professors I feel a deep synergy with, and I’m really excited to work with them. They are nurturing. I feel like we speak similar languages because many of them also straddle the line between professional practice and academia.</p>

        <p>I've been meditating a lot on this idea of not being so critical of things. I feel like judging and hating is so energy-consuming. I'm trying to do this thing where I just take what's useful to me and make something new with it—redirecting all that critical energy into creative energy. DISI reminded me how important it is to filter noise; not every activity or piece of information or feedback will be relevant for my intended scope or interests. Instead of spending another thought or breath on it—unless it is emotionally stimulating or discomforting in some way and therefore worth being open-minded to and unraveling—I want to follow my gut, time box whatever is necessary, and be okay with it not changing me for the better. For example, I hear a lot of peers being disappointed by some coursework already and I just don't feel the same way. Instead of being disappointed I'd rather just try to make the best of things, or get it quickly done so I can put my energy toward finding what <em>will</em> stimulate and challenge me. Basically, I'd like to be constructive and positive.</p>

        <p>I'm flying back to London on Monday morning and meeting up with Ryan and Brandon at the Oxford &amp; Cambridge Club for a How to Play With Fire meeting. As expected, it's a swanky spot and they have an extremely strict dress code; I have a blazer and slacks, but I only have one pair of shoes with me, my black Doc Martens, so I hope those are acceptable. After we meet and lunch, I have to catch a six-hour train back to Edinburgh. So many flights and trains and shuttles and buses.</p>

        <p>I've been staying in this massive hostel that has a restaurant, several lounge spaces, and a co-working area. My parents overlapped with my trip briefly and offered me the floor of their hotel room, but I like my hostel. We sleep in pods. There is a big floral chandelier in the dining area. The ceilings are tall. We all share the public space outside the pods, which is furnished with benches and ottomans. My wing of the hostel has maybe 15-20 pods, and a good number of people are out, putting things away and getting ready for bed.</p>
        
        <p>As I was locking up some of my bags just now, I listened to one of my pod neighbors, a bearded white man maybe in his 40s with an American accent, talking to another man about the metaphysical self. “There is something beyond the self. I’m interacting with you and you with me but it’s not just our bodies, it’s something else.” The guy he's talking to must be a new friend or maybe even a stranger because he seems disinterested and it's a very one-sided conversation. As I changed my shoes, I watched the woman in the pod to the right of me—medium-length brown hair, fair skin, early 30s—pull out a book with a long Portuguese title from her bag. The cover is bright red with a pretty and thin sans-serif font in all caps so I assume it must be a trendy, modern book. It's interesting to watch and listen to people as they get ready to slip into their pods. We're all strangers from who knows where and why, but the rhythms of our coexisting routines and unspoken respect for each other's space is like a weirdly intimate lullaby at this hour.</p>
        
        <p>I’m now sitting pantsless in my pod with the curtain closed. Today was a long day and I’m contemplating whether or not I want to get water before I sleep. I'm putting hyaloronic acid on my face while I listen to the metaphysical guy go on: “Christianity is a religion, but Hinduism is a way of life...” &nbsp;&#x273d;</p>


</EntryLayout>
  );
}