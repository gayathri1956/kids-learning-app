import React from 'react';

const rhymes = [
  { title: 'Twinkle Twinkle Little Star', videoUrl: 'https://www.youtube.com/embed/yCjJyiqpAuU' },
  { title: 'Baa Baa Black Sheep', videoUrl: 'https://www.youtube.com/embed/MR5XSOdjKMA' },
  { title: 'Johny Johny Yes Papa', videoUrl: 'https://www.youtube.com/embed/F4tHL8reNCs' },
  { title: 'Humpty Dumpty', videoUrl: 'https://www.youtube.com/embed/nrv495corBc' },
  { title: 'Wheels on the Bus', videoUrl: 'https://www.youtube.com/embed/CLrh9rjB8vY' },
  { title: 'ABC Song', videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY' },
  { title: 'Five Little Monkeys', videoUrl: 'https://www.youtube.com/embed/T3Uu6gouIew' },
  { title: 'If You’re Happy and You Know It', videoUrl: 'https://www.youtube.com/embed/frN3nvhIHUk' },
  { title: 'Old MacDonald', videoUrl: 'https://www.youtube.com/embed/_6HzoUcx3eo' },
  { title: 'Itsy Bitsy Spider', videoUrl: 'https://www.youtube.com/embed/w_lCi8U49mY' },
  { title: 'Mary Had a Little Lamb', videoUrl: 'https://www.youtube.com/embed/1-scORprMbo' },
  { title: 'London Bridge Is Falling Down', videoUrl: 'https://www.youtube.com/embed/r3D77sMmwd8' },
  { title: 'Jack and Jill', videoUrl: 'https://www.youtube.com/embed/iO7Nrrkfkuo' },
  { title: 'Row, Row, Row Your Boat', videoUrl: 'https://www.youtube.com/embed/Mo3BeMYz4z0' },
  { title: 'Sleeping Bunnies', videoUrl: 'https://www.youtube.com/embed/AYqFIVahA-A' },
  { title: 'Pat-a-Cake', videoUrl: 'https://www.youtube.com/embed/kj2V0q1Uu1M' },
  { title: 'Itsy Bitsy Spider', videoUrl: 'https://www.youtube.com/embed/w_lCi8U49mY' },  // Verified works :contentReference[oaicite:1]{index=1}
  { title: 'Five Little Ducks', videoUrl: 'https://www.youtube.com/embed/Uw9GRDRa464' },     // Verified works :contentReference[oaicite:2]{index=2}
];


const RhymesPage = () => (
  <div style={{ padding: 20 }}>
    <h1 style={{ textAlign: 'center' }}>🎵 Rhymes for Kids</h1>
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 20
    }}>
      {rhymes.map((rhyme, idx) => (
        <div key={idx} style={{
          width: 320,
          background: '#f0f8ff',
          padding: 10,
          borderRadius: 16,
          boxShadow: '0 0 10px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ textAlign: 'center' }}>{rhyme.title}</h3>
          <iframe
            width="100%"
            height="200"
            src={rhyme.videoUrl}
            title={rhyme.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ))}
    </div>
  </div>
);

export default RhymesPage;
