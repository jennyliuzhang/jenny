import EntryLayout from '../entry-layout';
import Image from 'next/image';
import entryStyles from "../../styles/entry.module.css";

export default function JournalEntryPage() {
      
  const heroImage = (
      <Image
        className={entryStyles.writingHero}
        src="/journal-graphics/astrology.gif"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />
  );

  const heroCaption = "An animated illustration I made in 2019. This composition contains an inside joke for myself: the flowers burst into some of my favorite constellations. :)";

  return (
    <EntryLayout slug="astrology-consultation" heroImage={heroImage} heroCaption={heroCaption}>

      <p><em>Please read more about my relationship to astrology as a hobby.</em></p>

  <h5>Saturn Return & Career</h5>
  <p><strong>Saturn Return</strong> (Career milestones) peaks at the end of <strong>March 2026</strong>. This will be a 6-month phase and should be a positive time.</p>
  <ul>
    <li>Focus: Not just career but personal growth, transitioning into adulthood, moving away from concerns of appearance.</li>
  </ul>
  <p><strong>Midheaven in Taurus</strong>: Focus on aesthetics, with <strong>Mercury conjunct Uranus</strong> suggesting a flair for originality and innovation in career or public life.</p>

    <h5>Career Transitions</h5>
  <ul>
    <li><strong>End of July 2025</strong>: Expect career transitions or upgrades, but nothing too challenging.</li>
    <li><strong>Jupiter + Sun Conjunction</strong>: By <strong>end of May 2025</strong>, this alignment promises a favorable time for career growth.</li>
  </ul>

    <h5>2026-2027: Confusion & Caution</h5>
  <ul>
    <li>Some confusion or uncertainty in your career may manifest in <strong>June/July 2026</strong>, and again in <strong>April, October, and November 2027</strong>.</li>
    <li>Caution: Watch out for possible deceptiveness or misrepresentation in both career and finances. Stay away from uncertain financial investments or major transactions.</li>
    <li><strong>January/February 2028</strong>: Another time to be wary of similar issues.</li>
  </ul>

    <h5>Career Development Themes (2026-2027)</h5>
  <ul>
    <li>Merging new ventures with familiar ones, leading to original and inventive career work.</li>
    <li>Career peaks: <strong>July and November 2026</strong>, and <strong>end of April to mid-May 2027</strong>.</li>
    <li>Despite potential confusion, these moments will provide outlets for creativity and innovation.</li>
    <li>Money will be a key theme, with a focus on earnings and investments.</li>
  </ul>

    <h5>Relationships & Partnerships</h5>
  <p><strong>End of December 2024 to early January 2025</strong>, and <strong>mid-March 2025</strong>: Significant doors will open for both career and relationships.</p>
  <ul>
    <li><strong>Sun in 7th House (House of Partnerships)</strong>: Relationships will play a vital role, with your <strong>Sun (ruling planet)</strong> in Aquarius and a Leo Rising.</li>
    <li><strong>Venus Conjunct Uranus</strong>: Emphasis on non-traditional relationships, likely meeting partners through friends or technology-related contexts.</li>
    <li>Stellium in your chart suggests a focus on 1:1 partnerships, both romantic and business.</li>
  </ul>

    <h5>Relationship Dynamics</h5>
  <ul>
    <li>Potential partner may be from a different background or country.</li>
    <li>Partner indicators: <strong>Aquarius Descendant</strong> and <strong>Venus Conjunct Uranus</strong>.</li>
    <li><strong>Mars Trine Jupiter</strong>: Partner involved in travel or international work.</li>
    <li><strong>Mars in Libra (9th House)</strong>: Focus on partnerships, especially cross-cultural ones.</li>
  </ul>

    <h5>Intellectual Traits</h5>
  <ul>
    <li><strong>5 Planets in Aquarius</strong>: Strong intellectual capacities, love for learning, science, technology, and analytical thinking.</li>
    <li>Less water elements in the chart mean less emotional expression.</li>
    <li><strong>Mercury Conjunct Jupiter & Uranus</strong>: Strong abilities in technology, societal issues, writing, and public speaking.</li>
    <li><strong>Moon Square Venus</strong>: Some tension in balancing emotional needs and partnerships, but relationships will have strong intellectual or collaborative foundations.</li>
  </ul>

    <h5>Personal Strengths</h5>
  <ul>
    <li><strong>Leo Rising</strong>: Commands attention with dignity, pride, generosity, warmth, and playfulness.</li>
    <li>Balancing the community focus of Aquarius with the individual focus of Leo.</li>
    <li><strong>Moon in 10th House</strong>: Natural ability to connect with large audiences and share publicly.</li>
    <li>Strong potential for success through <strong>writing, websites, public speaking</strong>, and social engagement.</li>
  </ul>

    <h5>Genius Energy & Leadership</h5>
  <ul>
    <li><strong>"Genius energy"</strong>: High intelligence, originality, and being ahead of your time.</li>
    <li>Potential for leadership or innovation in intellectual or technological fields.</li>
    <li>Driven to express yourself publicly and in 1:1 partnerships (romantic or business).</li>
  </ul>

    <h5>Relationships: Long-Term Outlook</h5>
  <ul>
    <li>Strong potential for meaningful, lasting partnerships (romantic and professional).</li>
    <li>Best suited to older partners (5-10 years older).</li>
    <li>Marriage could be on the horizon, with a partner who intellectually stimulates and expands your horizons.</li>
  </ul>

    <h5>Languages & Astrology</h5>
  <ul>
    <li>Potential to learn multiple languages or excel in astrology.</li>
    <li><strong>Mars Trine Uranus</strong>: Natural affinity for astrology and unconventional fields of knowledge.</li>
  </ul>

        </EntryLayout>
  );
}