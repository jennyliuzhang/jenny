import EntryLayout from '../entry-layout';
import Image from 'next/image';
import entryStyles from "../../styles/entry.module.css";

export default function JournalEntryPage() {

  const heroImage = (
    <Image
      className={entryStyles.writingHero}
      src="/journal-graphics/three-wise-men.jpg"
      alt="Project"
      width={2880}
      height={2025}
      style={{ width: '100%', height: 'auto' }}
      quality={100} 
      priority
    />
  );

  const heroCaption = "One of my favorite photos ever taken: Ben realizing he’s about to lose to me.";

  return (
    <EntryLayout slug="three-wise-men" heroImage={heroImage} heroCaption={heroCaption}>

        <p>Ben has been visiting from California. He was in New York and decided to take a flight to visit me in Cleveland. On night 1 we went to a show at the Beachland Ballroom, then spent the rest of the night playing pool, then being stalled at the drive-through at Wendy’s and eating the leftover salad from Bartleby’s with our bare hands.</p>

        <p>On night 2 we played more pool, stopped by Writer’s Room for drinks, then went to Ingenuity Fest. Ingenuity Fest is a crazy intricate offbeat thing that Cleveland’s art scene puts on every year. This was my second year going. Eclectic, brilliant dazzling lights. Ben noted that the crowd was very Portland-like: “everyone has colored hair and it’s mostly white people.”</p>

        <p>At Ingenuity, we stumbled onto a closed floor for the Soulcraft Makerspace, a local woodworking and creative studio for experts and novices alike. Three people—older, 40s?—were sitting around smoking cigarettes. We apologized for stumbling into their space but they told us to come in. Jim, the founder, gave us an after-hours tour.</p>
          
        <p>Jim was our first wise man. He runs one of the oldest makerspaces in the country. He doesn’t like San Francisco liberals (he clocked Ben). He doesn’t like people who navigate the world through their feelings (he clocked me). He does like people who like thinking (we did relate to this). He also likes people who make things (we also related to this). He walked us around the studio, which contained around 25 workshop stations. Both student projects and professional projects were out for display. He pointed out a bed that was made by a machinery roboticist who is used to very large equipment so he wanted his bed frame to be giant and made of metal as well. Jim also pointed out a ping pong table created by a student new to woodworking. It was very nicely made.</p>
        
        <p>In our conversation, I made a statement that started with “I feel like.” I was talking about my current career position and my goals. He pointed this out and explained that in general, he doesn’t trust people who say “I feel,” because feelings can come and go and lack conviction, whereas thoughts are more considered and trustworthy. I have my own opinions on this but I’ll explain that another time. Anyway, I did understand what he was saying, even if I didn’t fully agree with it, and I corrected my statement. Instead of saying what I feel like my career is right now and what it should be, I should just say what I am doing and what I am going to do. Direct and clear. A command to the world. I liked that and I repeated my statement in that format. He understood and said what I was doing was awesome.</p>

        <p>We talked about woodworking, learning new skills as an amateur (“none of us started knowing how to make anything”), and being the founder of projects (“to create anything new, you kind of just have to make it, then bring people in. You can’t really start with the people, one person’s idea brings the people”). We ended up talking about how special it is to have a community where you share the same passion as the other people in it. Jim commented something to the effect of this being woo-woo and that he doesn’t know the reason why it’s good and important, but it is. I made a joke about how if he just felt his feelings, like in his body and stomach, he would just experience the reason and it wouldn’t have to be said. He laughed and replied that he’s glad we brought it full circle.</p>

        <p>I told him I would be back for a woodworking session because I have several furniture and built-in projects that need to be completed and we left.</p>

        <p>The next wise man we met was our Uber driver, Ali. On the way back home, Ali told us he was looking for things to take his teenage kids to. We told him that Ingenuity Fest was a cool thing. He said it wasn’t really his scene—he’s more of a stay-at-home-and-chill-and-play-cards-with-friends person—but he might be open to checking it out. He talked about how he used to be a hero to his kids, but now he’s their uncool dad. We said that he’d always be a hero to his kids, which is true. Anyway, he expressed how fulfilling being a parent is. He gave an example of what he felt: if Elon Musk offered one seat between him and his kid to go to outer space, he would give it up for his kid. And he thinks all parents would do the same. “As a parent, you want to put your kids above yourself. Some people can be selfish. They want to travel or they want their own experiences. But once you’re a parent, you’re not the most important anymore. Your children are directly connected to you and you want them to have everything.”</p>

        <p>The third and final wise man is Ben himself. Ben and I have been friends since probably the first or second day of college in 2015. He was my first creative partner. Something I think is interesting about Ben is that in social settings, he is fickle in what he discloses or does not disclose. Sometimes I feel like I’m fighting my body about how much I want to share, about expressing myself and wanting to honor the sentimental world I feel inside me. I have a very intense artist temperament. Meanwhile, Ben is unemotional and slippery and will tell white lies for the plot or to mess with people or to fill in gaps to smooth over interactions. He’s effortless and cogent, but also unserious—or ambiguous in whether or not he’s being serious. At Bartleby’s the waiter took some photos of us and later came to ask how we thought the photos came out. Ben said “Oh, I took a look earlier and they all seemed nice!” then showed the waiter the photos on his phone. The waiter, pleased, walked away, and Ben said to me “I actually never looked at them before” and took a bite of pasta.</p>

        <p>Another way this comes out is he will underplay his own accomplishments and let people judge him. He will think absolutely nothing of it. When Jim asked us if we were also creators or makers, Ben said “I work in software right now,” totally ignoring the fact that he is the design founder of a climate startup for funding rainforest protection and carbon removal through local, grassroots initiatives. That is one of the coolest creative projects I know and as someone who has cheered on his company’s five-year journey, I know it took a ton of meditation, iteration, and strategy. And Ben said nothing about it and was never compelled to justify himself when Jim proceeded to write him off as a yuppie Californian. Which isn’t a false read per se, but one that discounts his talents.</p>

        <p>I know Ben to be very imaginative and positive. Years ago I showed him how I painted each of my fingernails a different color and he looked at them and said, “It’d be even cooler if you told a 10-part story on your nails, where every nail is a fully painted scene.” When I told him I’ve been listening to a lot of women artists, he said “Do you listen to the band Metric?” He then proceeded to queue up 10 pop, hip hop, and trap songs by women artists I’d never heard of that were very sonically close to what I had been listening to independently. He notices details. He points out the strange symmetrical piping on the outside of the house, the windows that look like they used to be doors, and the doors that look like they should be windows. He calls out how curious it is that most of the artwork in the brunch spot is still life and comments on the flaky texture of the bark on the tree I walk by every day.</p>
        
        <p>He’s one of three friends that brings the font nerd out of me outside of job environments. Any coworkers of mine know that I’m quite anal about typography and kerning and line heights and padding in the context of design, but I try to leave that side of me at work. But Ben and I scrutinize menus, pace bookstores looking for Garamond, and lament about the popularity of Poppins. One time during a college group road trip, we got into a heated debate about the universality of signage, rendering the rest of the car tense and silent as we argued. We get competitive. We both like races and hate losing. When he visits, we go bowling and play chess and pool and shooting games.</p>

        <p>Ben is covertly challenging to me as a creator: he walks the walk when it comes to doing the research, being direct with his words, and making something with confidence. He doesn’t second guess himself and could care less what strangers thought of him unless it affects him. It’s almost Machiavellan, but the virtue of his work—in both purpose and execution excellence—is proof that it’s not. He wants to do by right by the world. And he unabashedly follows his interests without attachment to the sentimentalities of the creative process. He is building in climate right now but he wants the next thing thing to be a local small business, maybe a bar. He is also very good at describing experiences and places—his word choices are impressive. He never rambles. He always understands what people are saying and responds to them with something tenfold more attentive and thought-provoking, even if it’s a slight exaggeration. He is creative without the neuroticism, an artist without the temperament, and I am not sure if other people give him enough credit for that. But I <em>am</em> sure that he doesn’t care, and this inspires me. I look up to that. &nbsp;&#x273d;</p>

        </EntryLayout>
  );
}