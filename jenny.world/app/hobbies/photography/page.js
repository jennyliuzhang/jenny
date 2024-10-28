import Image from 'next/image';
import hobbiesStyle from "../../styles/hobbies.module.css";

export default function JournalEntryPage() {



  return (
    <div>
        <h2>Hobbies</h2>

        <h1>Photography</h1>
        <p>I wouldn't call myself a photographer because I'm really just someone who likes to <em>take photos</em>, which is different. But I know enough about photography to know that there's a difference. Basically, I enjoy the practice of documenting moments and I'm less interested in the deliberate artistry and technical knowledge of photography as a craft. I don't think all my photos are good, but I do like taking them.</p>

        <div className={hobbiesStyle.hobbyScoreTable}>
          <div className={hobbiesStyle.scoreLabel}>How good am I?</div>
          <div className={hobbiesStyle.scoreDesc}>7/10. In 7th grade I asked my parents to save up for a Nikon D50 so I could take long-exposure light photography (this was really trendy in my online art communities back then). I then learned basic photography from YouTube. In high school I finished two portfolio-based photography classes and took people's senior photos for cash. I also worked several jobs in my early career where I was required to take photos. So, I'm probably better than the average person.</div>

          <div className={hobbiesStyle.scoreLabel}>Time spent</div>
          <div className={hobbiesStyle.scoreDesc}>8/10. Almost two decades on and off! I was really into it in high school and college, and I'm trying to get back into it now as an adult.</div>

          <div className={hobbiesStyle.scoreLabel}>Enjoyment level</div>
          <div className={hobbiesStyle.scoreDesc}>8/10. I love it. Sometimes though I feel like I'm not being present enough.</div>

          <div className={hobbiesStyle.scoreLabel}>Effort to improve</div>
          <div className={hobbiesStyle.scoreDesc}>8/10. I'm not trying to be a better photographer, but better at documenting and sharing moments in my life. This essentially looks like improving my photoblogging habits, which I try to do, posting around 2-4 times per month on Instagram.</div>

          <div className={hobbiesStyle.scoreLabel}>Sense of community</div>
          <div className={hobbiesStyle.scoreDesc}>2/10. I don't really know many people who treat taking photos like me.</div>

          <div className={hobbiesStyle.scoreLabel}>Fulfilling Hobby Score</div>
          <div className={hobbiesStyle.scoreDesc}>32/50. 64%</div>
        </div>

        <p></p>

    </div>
  );
}