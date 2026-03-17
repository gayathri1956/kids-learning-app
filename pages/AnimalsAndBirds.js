import React from 'react';

const animals = [
  {
    name: 'Dog',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golde33443.jpg/120px-Golde33443.jpg',
  },
  {
    name: 'Cat',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/81_INF_DIV_SSI.jpg/120px-81_INF_DIV_SSI.jpg',
  },
  {
    name: 'Elephant',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/120px-African_Bush_Elephant.jpg',
  },
  // add more animals here
];

const birds = [
  {
    name: 'Parrot',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Ara_macao_%28Piranga%29.jpg/120px-Ara_macao_%28Piranga%29.jpg',
  },
  {
    name: 'Peacock',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Peacock_Plumage.JPG/120px-Peacock_Plumage.JPG',
  },
  // add more birds here
];

function AnimalsAndBirds() {
  return (
    <div
      style={{
        padding: 20,
        fontFamily: '"Comic Sans MS", cursive',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        minHeight: '100vh',
      }}
    >
      <h1>🐾 Animals & Birds</h1>

      <h2>Animals</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          marginBottom: '40px',
        }}
      >
        {animals.map(({ name, img }) => (
          <div key={name} style={{ width: '150px' }}>
            <img
              src={img}
              alt={name}
              style={{ width: '100%', borderRadius: '10px' }}
            />
            <p style={{ fontSize: '1.2rem' }}>{name}</p>
          </div>
        ))}
      </div>

      <h2>Birds</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        {birds.map(({ name, img }) => (
          <div key={name} style={{ width: '150px' }}>
            <img
              src={img}
              alt={name}
              style={{ width: '100%', borderRadius: '10px' }}
            />
            <p style={{ fontSize: '1.2rem' }}>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimalsAndBirds;
