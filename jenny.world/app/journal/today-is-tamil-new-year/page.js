"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import entryStyles from "../../styles/entry.module.css";
import Breadcrumbs from '../../components/Breadcrumbs';

export default function Page() {
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    fetch('/data/journal.json')
      .then((response) => response.json())
      .then((data) => {
        const foundEntry = data.find(item => item.writingSlug === "today-is-tamil-new-year");
        setEntry(foundEntry);
      })
      .catch((error) => console.error('Error fetching journal entry:', error));
  }, []);

  // If entry is not found or still loading
  if (!entry) return <div>Loading...</div>;

  return (
    <main className={entryStyles.entryStyles}>
      
      <Breadcrumbs>
        <Link href="/journal">Jenny’s Journal</Link>
        <span>{entry.writingName}</span>
      </Breadcrumbs>
      
      <Image
        className={entryStyles.writingHero}
        src="/journal-graphics/today-is-tamil-new-year.jpg"
        alt="Project"
        width={2880}
        height={2025}
        style={{ width: '100%', height: 'auto' }}
        quality={100} 
        priority
      />

      <div className={entryStyles.body}>
        <h1>{entry.writingName}</h1>
        <p className={entryStyles.descText}>{entry.writingDesc}</p>
        <h6>{entry.date}</h6>
        <h6>{entry.readTime}</h6>
        
        <p>
        Today is Tamil New Year. We went to Jenthie’s house, who is Selva’s cousin jaynthi 

        Helped set table as Jenthie finished last dish: friend banana chips. Brought each dish one by one as she introduced them to me. Daal, samba, potato, spinach, indian broad bean, beetroot, salad, pumpkin, french beans. 

        Start the meal with sweet rice pongol. Offering to the lord. Sugar taisins boiled. Blessed by the lord.

        Eat 4 portions of rice. Ot if youre winoy like me, two each split in half.

        In order: daal with melted ghee, then sambar, then tamarind soup, then yogurt. Yogurt can be plain or with potato. Each with rice. Right hand. Clean under your nails. Sometimes banana leaf.

        Vermicelli pudding payam. Sugar. Raisins. Masala vadai. Savory.
        ￼
        Jay cooked dinner. Potato. Okra. Salted fish, chopped into small bits. White rice. 2 soups rasam and chicken herbal. And beans. And fried chicken. I paced the living room after dinner. So much food

        Jenny Liu Zhang is visiting her extended Indian-Malaysian stepfamily for the first time in Kuala Lumpur. She  is roaming nature reserves with her cousins and learning recipes for nasi lemak and sambar in hot and musical kitchens from her aunts and uncles. Mostly, she is feeling something in her heart untangle as she watches her mom, who has always seemed like a mom has lived a challenging life as an immigrant isolated from her own family in China, laugh and play with kids her age.

        It's an insult to the country if you don't put on some weight

        Today Jay made rasam mixed with brandy. Selva, Mano, and I were all feeling a bit off today, and with the looming presence of COVID still, we thought it best to take a nutritional precaution. Rasam is a soup heavily infused with spices meant to open up your sinuses and pores, to make you sweat out and digest through anything that your body’s been stalling with. Turmeric, cumin, pepper, coriander, asafoetida. And much more. I drank 4 bowls with a spoonful of cognac in each. I sweat, though not as much as Selva, whose arms glittered with sweat beads. I went on a walk after dinner around the apartment complex. I watched people in the gym getting a late Sunday workout in, two old men sitting poolside chatting, and a couple lounging in the lawn chairs. I listened to my downloaded music and lapped another girl on a walk around the complex, who seemed slightly younger than me and was intently swinging her tote bag to the rhythm of her pace.

        Malaysia is my food heaven. I have been reciting these five words repeatedly during my month and a half here. It’s probably the truest phrase I’ve said all year. Not that I lie intentionally, but maybe you can understand that sometimes I say things just to test out their truthfulness. My point is that Malaysia being my food heaven is definitely truer than other claims I’ve made recently. Malaysian cuisine is a true fusion of Chinese, Indian, Thai, Indonesian, and native Malay (mostly halal) cooking traditions. As a Chinese-American, my tastebuds find the food here familiar but simultaneously foreign. It's much richer, spicier, and more fragrant than I'm used to. Take, for example, the flavorful curry mee. Mee refers to the Chinese noodle, but instead of bowled up in a broth, it’s stewed in curry — and depending on whether or not it has coconut milk, the curry profile might lean Thai or Indian. Fish curry similarly shapeshifts: Chinese fish curry is soupier, Indian fish curry is spicier, and Malay fish curry is sour. A Malaysian staple is a rice dish that came from India but was evolved by the Malays, who added coconut and sambal and renamed it nasi lemak, which translates to “fatty rice.” And centuries ago, when the Chinese brought their clear noodle soups, the archipelago infused them with the flavors of galangal, shrimp paste, and fish, creating the powerful and tangy assam lakhsa. Finally, I’ve learned a lot about south Indian cooking as well, and how even the rich, resembling the mutton-based gravies in north India.

        in my last month living here with my Indian-Malaysian cousins, 

        Curry Mee
        Nasi Lemak - indian and malay added coconut and sambal
        Assam Lakhsa - malays added galangal and shrimp paste and fish to chinese noodles
        Fish Curry - malay is more sour and watery
        Chicken rice? something with lemon grass…? Rich rice fatty rice traders made it to bring to lunch lotus lear
        Nasi kandar
        Char koay teow chinese ho fun stir fry, chili (spicy), savory
        Chee chow fun, sambal and sweet sauce chinese influence but with chili and ho fun is softer than chinese
        Carrot cake (white radish) 

        I haven’t been writing very much, and I’ve also been slacking on my penpal engagements. It’s made me worried that 

        Malaysia was a really touching experience. It was the first time I met my family on my stepdad Selva’s side, who grew up as an Indian Malaysian. I stayed with his younger sister Mano (my aunt) and her husband Jay (my uncle). I grew quite close to them. I discovered so much new food with them; we ate almost every meal at a food stall/food court. Malaysian food culture is similar to Thai food culture I imagine, so you probably know what I’m talking about. but the cuisine was incredible. A true fusion of ethnic spicy Malay food with Chinese influence, Indian influence, Thai, and Indonesian. It was like all the food I grew up eating but 200% more spicy. I think Malaysia is my food heaven.

        While there I also traveled with my aunt/uncle, stepdad, and my mom who was also there briefly during my two months, to Penang, another city in Malaysia known for amazing food. I’ll attach some pictures shortly, but my favorite dish was a soup called assam lakhsa. Assam means sour, and it’s essentially a sour fish soup (very lemongrassy) with udon. unfortunately I still have my stomach sensitivity so every time I eat it I have a little reaction, but it’s so worth it. I also spent a good amount of time with my cousins and other aunts and uncles there on Selva’s side. They’re all also Indian Malaysian so I learned a lot about (south) Indian cooking, cricket, and celebrations. We hosted Tamil New Year while I was there, as well as a few birthday parties for my aunts and and my cousin Tej who turned 5. This spring was probably the first time in my life I’ve felt like a part of a big family; growing up it was mostly just my brother and me in our small house, and my mom who was pretty stressed out most of the time — a classic immigrant fam experience I guess. So it was really beautiful to feel a part of something big. The feeling is like a sense of belonging and security that I would be looked after. I noticed so much of my general anxiety diminished just being there. I felt so much more safe and confident. :)

        &nbsp;&#x273d;</p>

      </div>      

    </main>
  );
}