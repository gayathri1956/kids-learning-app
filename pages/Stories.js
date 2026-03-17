import React, { useState } from 'react';

const stories = [
  {
    title: "The Thirsty Crow",
    telugu: "తాగడానికి నీరు కావాలని ఒక కాకి ఎండలో వెతుకుతుంది.",
    english: "A crow was very thirsty and looking for water on a hot day.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Thirsty_Crow.jpg",
  },
  {
    title: "The Lion and the Mouse",
    telugu: "ఒక సింహం మరియు చిన్న ఎలుక మంచి స్నేహితులు అయిపోతారు.",
    english: "A lion and a little mouse become good friends.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/The_Lion_and_the_Mouse.jpg",
  },
  // Add 8 more stories similarly...
   {
    title: "The Thirsty Crow",
    telugu: "తాగడానికి నీరు కావాలని ఒక కాకి ఎండలో వెతుకుతుంది.",
    english: "A crow was very thirsty and looking for water on a hot day.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Thirsty_Crow.jpg",
  },
  {
    title: "The Lion and the Mouse",
    telugu: "ఒక సింహం మరియు చిన్న ఎలుక మంచి స్నేహితులు అయిపోతారు.",
    english: "A lion and a little mouse become good friends.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/The_Lion_and_the_Mouse.jpg",
  },
  {
    title: "The Honest Woodcutter",
    telugu: "వెనుకటి చెరువులో తన అగ్రం కోల్పోయిన చెక్కురాయి నిజాయితీగా ఉంటాడు.",
    english: "A woodcutter who loses his axe in a river is honest.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Woodcutter_and_axe.png",
  },
  {
    title: "The Fox and the Grapes",
    telugu: "ద్రాక్షను అందుకోలేక ఓ నక్క అసలు అవి పాకవని చెప్తుంది.",
    english: "A fox fails to get the grapes and says they’re sour.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/The_Fox_and_the_Grapes_-_Project_Gutenberg_etext_19994.jpg",
  },
  {
    title: "The Hare and the Tortoise",
    telugu: "నెమ్మదిగా సాగినా కচ্ছపం విజయం సాధిస్తాడు.",
    english: "The tortoise wins the race by moving slowly and steadily.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Hare_and_Tortoise.jpg",
  },
  {
    title: "The Greedy Dog",
    telugu: "అతి లోబడి ఉన్న కుక్క నీటిలో తన ప్రతిబింబాన్ని చూచి భయపడుతుంది.",
    english: "A greedy dog barks at its reflection thinking it's another dog.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Greedy_dog_story.jpg",
  },
  {
    title: "The Ant and the Dove",
    telugu: "ఎలుకకు సహాయం చేసిన పావురం చివరికి తనకు మేలు చేస్తుంది.",
    english: "The dove saves the ant and the ant returns the favor.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/99/The_Ant_and_the_Dove.jpg",
  },
  {
    title: "The Goose that Laid Golden Eggs",
    telugu: "ప్రతిరోజూ బంగారు గుడ్లు పెట్టే గూడెళ్లు, కానీ అధిక ఆశ వల్ల ఓనరు దాన్ని చంపేస్తాడు.",
    english: "A greedy man kills the goose that lays golden eggs daily.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Golden_goose_story.png",
  },
  {
    title: "Unity is Strength",
    telugu: "ఒకే కుటుంబంగా ఉన్న నలుగురు అన్నదమ్ములు కలిసి ఉండటమే బలం.",
    english: "Four brothers learn that unity is strength.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Unity_is_strength.jpeg",
  },
  {
    title: "The Cap Seller and the Monkeys",
    telugu: "పిల్లకప్పలు టోపీలు తీసుకుంటే, తెలివిగా వాటిని తిరిగి పొందాడు.",
    english: "Monkeys stole caps, but the seller tricked them to get them back.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/53/Cap_seller_monkeys.png",
  },
];

const Stories = () => {
  const [index, setIndex] = useState(0);
  const [showTelugu, setShowTelugu] = useState(true);

  const nextStory = () => {
    setIndex((prev) => (prev + 1) % stories.length);
    setShowTelugu(true); // Reset Telugu visibility
  };

  const { title, english, telugu, image } = stories[index];

  return (
    <div style={{ padding: 30, fontFamily: 'Comic Sans MS, cursive', background: '#fff8e1', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: 20 }}>📘 <span style={{ color: '#3f51b5' }}>Moral Stories</span> <span style={{ color: '#004d40' }}>for Kids</span></h1>

      <div style={{ background: '#fff', padding: 25, borderRadius: 12, boxShadow: '0 2px 10px rgba(0,0,0,0.1)', maxWidth: 800, margin: '0 auto' }}>
        <h2 style={{ color: '#1b5e20' }}>{title}</h2>

        <img src={image} alt={title} style={{ width: '100%', height: 250, objectFit: 'cover', borderRadius: 10, marginBottom: 20 }} />

        <p><strong>📝 English:</strong> {english}</p>
        {showTelugu && <p><strong>📝 Telugu:</strong> {telugu}</p>}

        <div style={{ marginTop: 20 }}>
          <button onClick={() => setShowTelugu(!showTelugu)} style={{ background: '#43a047', color: 'white', border: 'none', padding: '10px 15px', marginRight: 10, borderRadius: 5 }}>
            {showTelugu ? 'Hide Telugu' : 'Show Telugu'}
          </button>
          <button onClick={nextStory} style={{ background: '#1e88e5', color: 'white', border: 'none', padding: '10px 15px', borderRadius: 5 }}>
            Next Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stories;
