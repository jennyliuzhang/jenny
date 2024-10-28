import Image from 'next/image';
import hobbiesStyle from "../../styles/hobbies.module.css";

export default function JournalEntryPage() {



  return (
    <div>
        <h2>Hobbies</h2>

        <h1>Chess</h1>
        <p>Chess is one of those hobbies that weirdly stokes my ADHD.</p>

        <div className={hobbiesStyle.hobbyScoreTable}>
          <div className={hobbiesStyle.scoreLabel}>How good am I?</div>
          <div className={hobbiesStyle.scoreDesc}>5/10. I’m okay. I can win against bad people and I know a little theory.</div>

          <div className={hobbiesStyle.scoreLabel}>Time spent</div>
          <div className={hobbiesStyle.scoreDesc}>4/10. 3 years, but in phases of a few months on and a few months off.</div>

          <div className={hobbiesStyle.scoreLabel}>Enjoyment level</div>
          <div className={hobbiesStyle.scoreDesc}>5/10. I really love playing when I get the chance, especially with people with whom I can play with regularly and grow with. I don’t like playing online.</div>

          <div className={hobbiesStyle.scoreLabel}>Effort to improve</div>
          <div className={hobbiesStyle.scoreDesc}>3/10. I want to get better and I do the bare minimum, which is go to my library chess club once per week. I read sometimes but don’t sit around rehearsing strategies.</div>

          <div className={hobbiesStyle.scoreLabel}>Sense of community</div>
          <div className={hobbiesStyle.scoreDesc}>4/10. Right now, I have 3-4 people in my life who I can play chess with.</div>

          <div className={hobbiesStyle.scoreLabel}>Fulfilling Hobby Score</div>
          <div className={hobbiesStyle.scoreDesc}>32/50. 64%</div>
        </div>

        <p></p>

    </div>
  );
}