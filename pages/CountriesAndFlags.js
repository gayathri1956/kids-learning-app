
import React from 'react';

// ... rest of the component code


// Landmark images for 100 countries (sample)
const landmarkImages = {
  IN: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
  US: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg",
  JP: "https://upload.wikimedia.org/wikipedia/commons/1/12/Mount_Fuji_from_Hotel_Mt_Fuji_2008-02-01.jpg",
  BR: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Rio_de_Janeiro_-_Corcovado_-_Christ_the_Redeemer_Statue.jpg",
  CA: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Niagara_Falls_from_Canadian_side_2013_09.jpg",
  AU: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Sydney_Opera_House_Sails.jpg",
  FR: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tour_Eiffel_Wikimedia_Commons.jpg",
  DE: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Neuschwanstein_Castle_LOC_print.jpg",
  EG: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg",
  ZA: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Table_Mountain_from_Black_Hill%2C_Cape_Town_-_South_Africa.jpg",
  RU: "https://upload.wikimedia.org/wikipedia/commons/a/a4/St_Basils_Cathedral-2014.JPG",
  KR: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Seoul_Skyline_2017_04_16_-_1.jpg",
  GB: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg",
  MX: "https://upload.wikimedia.org/wikipedia/commons/7/74/Chichen_Itza_3.JPG",
  IT: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Colosseum_in_Rome%2C_Italy_-_April_2007.jpg",
  ES: "https://upload.wikimedia.org/wikipedia/commons/9/95/Plaza_Mayor_de_Madrid_02-2014_img3.jpg",
  NG: "https://upload.wikimedia.org/wikipedia/commons/9/94/Emirates_Stadium_09-2015_img4.jpg", // placeholder Nigeria image (stadium)
  AR: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Buenos_Aires%2C_Argentina_-_Panorama_01.jpg",
  SA: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Riyadh_Skyline_2013.jpg",
  SE: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Stockholm_from_Skeppsholmen_01.jpg",
  NO: "https://upload.wikimedia.org/wikipedia/commons/2/23/Geirangerfjord_2014_11.JPG",
  NL: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Amsterdam_Bourse_Building_and_Canal.jpg",
  CH: "https://upload.wikimedia.org/wikipedia/commons/7/77/Matterhorn_from_Domh%C3%BCtte_-_2.jpg",
  BE: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Grand_Place_Brussels_11-2012_img6.jpg",
  TH: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Bangkok_Skyline.jpg",
  VN: "https://upload.wikimedia.org/wikipedia/commons/6/67/Ha_Long_Bay_2018.jpg",
  TR: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Istanbul_Skyline_2015.jpg",
  PL: "https://upload.wikimedia.org/wikipedia/commons/1/18/Wawel_Castle_-_Krakow_-_Poland_2018-06-24.jpg",
  GR: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Athens_Acropolis_May_2014_06.jpg",
  PT: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Lisboa_-_Baixa_Chiado.JPG",
  CZ: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Prague_Castle_from_Charles_Bridge_02-2014_img2.jpg",
  IE: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Dublin_-_Ha%27penny_Bridge_2010-05-15.jpg",
  HU: "https://upload.wikimedia.org/wikipedia/commons/0/01/Budapest_Danube.jpg",
  AT: "https://upload.wikimedia.org/wikipedia/commons/4/48/Schloss_Schoenbrunn_2006.jpg",
  RO: "https://upload.wikimedia.org/wikipedia/commons/6/62/Castelul_Bran_3.jpg",
  CO: "https://upload.wikimedia.org/wikipedia/commons/2/25/Bogota_Skyline_2021.jpg",
  MY: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Petronas_Towers_in_Kuala_Lumpur_-_2010.jpg",
  ID: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Pura_Ulun_Danu_Bratan%2C_Bali%2C_Indonesia_-_2013-07-04.jpg",
  PH: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Mayon_Volcano_in_the_Philippines.jpg",
  NZ: "https://upload.wikimedia.org/wikipedia/commons/3/30/Lake_Tekapo_2016.jpg",
  CL: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Montanas_Rocas_del_Condor.JPG",
  FI: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Helsinki_Skyline_from_Katajanokka_2013.jpg",
  DK: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Tivoli_Gardens_2013-07-04_001.JPG",
  IS: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Geysir_in_Iceland_2010.jpg",
  BG: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Sofia_-_Alexander_Nevski_Cathedral_and_the_Vitosha_Mountain_2022.jpg",
  UA: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Kiev_-_panoramio.jpg",
  BY: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Minsk_view_from_High_Rise_Building.jpg",
  LT: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Vilnius_Old_Town.JPG",
  LV: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Riga_Old_Town_-_May_2013_-_Panorama.jpg",
  EE: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Tallinn_-_Old_Town_Panorama.jpg",
  MT: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Mdina_Skyline_%282012%29.jpg",
  CY: "https://upload.wikimedia.org/wikipedia/commons/2/27/Nicosia_2017_01.jpg",
  SI: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Ljubljana_Slovenia_009.JPG",
  HR: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Dubrovnik_-_Old_Town_-_Pano_2014.JPG",
  SK: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Bratislava_-_View_on_Danube_river_from_castle.jpg",
};

// Facts for countries
const countryFacts = {
  IN: "India is famous for the Taj Mahal and diverse culture.",
  US: "The USA is home to the Statue of Liberty and vast landscapes.",
  JP: "Japan is known for Mount Fuji and cherry blossoms.",
  BR: "Brazil hosts the famous Carnival festival.",
  CA: "Canada has the longest coastline in the world.",
  AU: "Australia is home to unique animals like kangaroos and koalas.",
  FR: "France is famous for the Eiffel Tower and fine cuisine.",
  DE: "Germany is renowned for castles and Oktoberfest.",
  EG: "Egypt is home to the ancient pyramids of Giza.",
  ZA: "South Africa has three capital cities and beautiful nature.",
  RU: "Russia is the largest country by land area.",
  KR: "South Korea is famous for technology and K-pop.",
  GB: "The UK includes England, Scotland, Wales, and Northern Ireland.",
  MX: "Mexico is known for spicy food and ancient ruins.",
  IT: "Italy is the birthplace of pizza and the Renaissance.",
  ES: "Spain is known for flamenco and bullfighting traditions.",
  NG: "Nigeria is the most populous country in Africa.",
  AR: "Argentina is famous for tango dance and Patagonia.",
  SA: "Saudi Arabia holds Islam's two holiest cities, Mecca and Medina.",
  SE: "Sweden is known for its beautiful forests and welfare system.",
  NO: "Norway is famous for fjords and the Northern Lights.",
  NL: "Netherlands is known for tulips, windmills, and canals.",
  CH: "Switzerland is famous for mountains, watches, and chocolates.",
  BE: "Belgium is known for waffles, chocolates, and medieval towns.",
  TH: "Thailand is famous for tropical beaches and temples.",
  VN: "Vietnam is known for its cuisine and stunning landscapes.",
  TR: "Turkey straddles Europe and Asia and is famous for Istanbul.",
  PL: "Poland is known for historic cities and hearty cuisine.",
  GR: "Greece is famous for its ancient ruins and Mediterranean climate.",
  PT: "Portugal is famous for port wine and beautiful coastlines.",
  CZ: "Czech Republic is known for Prague and beer culture.",
  IE: "Ireland is known for green landscapes and folklore.",
  HU: "Hungary has a rich musical heritage and thermal baths.",
  AT: "Austria is famous for classical music and alpine skiing.",
  RO: "Romania is known for Dracula legends and castles.",
  CO: "Colombia is famous for coffee and the Andes mountains.",
  MY: "Malaysia is known for its diverse culture and rainforests.",
  ID: "Indonesia is the world's largest archipelago.",
  PH: "The Philippines has over 7,000 islands and beautiful beaches.",
  NZ: "New Zealand is known for Maori culture and stunning nature.",
  CL: "Chile is famous for the Atacama Desert and Andes.",
  FI: "Finland is known for saunas and thousands of lakes.",
  DK: "Denmark is famous for happiness and fairy tales.",
  IS: "Iceland is known for geysers, volcanoes, and glaciers.",
  BG: "Bulgaria has ancient history and beautiful mountains.",
  UA: "Ukraine is Europe's breadbasket with rich farmland.",
  BY: "Belarus has vast forests and Soviet heritage.",
  LT: "Lithuania is the Baltic country's cultural hub.",
  LV: "Latvia is known for its art nouveau architecture.",
  EE: "Estonia is a digital society with medieval charm.",
  MT: "Malta has historic temples and Mediterranean beaches.",
  CY: "Cyprus is famous for beaches and ancient ruins.",
  SI: "Slovenia is a green and mountainous country.",
  HR: "Croatia has a beautiful Adriatic coastline.",
  SK: "Slovakia is known for castles and mountains.",
};

// Countries list with code and name (about 60+ countries)
const countries = [
  { code: "IN", name: "India" },
  { code: "US", name: "United States" },
  { code: "JP", name: "Japan" },
  { code: "BR", name: "Brazil" },
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Australia" },
  { code: "FR", name: "France" },
  { code: "DE", name: "Germany" },
  { code: "EG", name: "Egypt" },
  { code: "ZA", name: "South Africa" },
  { code: "RU", name: "Russia" },
  { code: "KR", name: "South Korea" },
  { code: "GB", name: "United Kingdom" },
  { code: "MX", name: "Mexico" },
  { code: "IT", name: "Italy" },
  { code: "ES", name: "Spain" },
  { code: "NG", name: "Nigeria" },
  { code: "AR", name: "Argentina" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "SE", name: "Sweden" },
  { code: "NO", name: "Norway" },
  { code: "NL", name: "Netherlands" },
  { code: "CH", name: "Switzerland" },
  { code: "BE", name: "Belgium" },
  { code: "TH", name: "Thailand" },
  { code: "VN", name: "Vietnam" },
  { code: "TR", name: "Turkey" },
  { code: "PL", name: "Poland" },
  { code: "GR", name: "Greece" },
  { code: "PT", name: "Portugal" },
  { code: "CZ", name: "Czech Republic" },
  { code: "IE", name: "Ireland" },
  { code: "HU", name: "Hungary" },
  { code: "AT", name: "Austria" },
  { code: "RO", name: "Romania" },
  { code: "CO", name: "Colombia" },
  { code: "MY", name: "Malaysia" },
  { code: "ID", name: "Indonesia" },
  { code: "PH", name: "Philippines" },
  { code: "NZ", name: "New Zealand" },
  { code: "CL", name: "Chile" },
  { code: "FI", name: "Finland" },
  { code: "DK", name: "Denmark" },
  { code: "IS", name: "Iceland" },
  { code: "BG", name: "Bulgaria" },
  { code: "UA", name: "Ukraine" },
  { code: "BY", name: "Belarus" },
  { code: "LT", name: "Lithuania" },
  { code: "LV", name: "Latvia" },
  { code: "EE", name: "Estonia" },
  { code: "MT", name: "Malta" },
  { code: "CY", name: "Cyprus" },
  { code: "SI", name: "Slovenia" },
  { code: "HR", name: "Croatia" },
  { code: "SK", name: "Slovakia" },
];

// More countries (only facts, no images)
const moreCountries = [
  { code: "DZ", name: "Algeria" },
  { code: "AO", name: "Angola" },
  { code: "BD", name: "Bangladesh" },
  { code: "BJ", name: "Benin" },
  { code: "BT", name: "Bhutan" },
  { code: "BW", name: "Botswana" },
  { code: "BF", name: "Burkina Faso" },
  { code: "BI", name: "Burundi" },
  { code: "KH", name: "Cambodia" },
  { code: "CM", name: "Cameroon" },
  { code: "CV", name: "Cape Verde" },
  { code: "CF", name: "Central African Republic" },
  { code: "TD", name: "Chad" },
  { code: "DJ", name: "Djibouti" },
  { code: "ER", name: "Eritrea" },
  { code: "ET", name: "Ethiopia" },
  { code: "FJ", name: "Fiji" },
  { code: "GM", name: "Gambia" },
  { code: "GH", name: "Ghana" },
  { code: "GN", name: "Guinea" },
  { code: "GW", name: "Guinea-Bissau" },
  { code: "HT", name: "Haiti" },
  { code: "JM", name: "Jamaica" },
  { code: "KE", name: "Kenya" },
  { code: "KI", name: "Kiribati" },
  { code: "LA", name: "Laos" },
  { code: "LS", name: "Lesotho" },
  { code: "LR", name: "Liberia" },
  { code: "MG", name: "Madagascar" },
  { code: "MW", name: "Malawi" },
  { code: "MV", name: "Maldives" },
  { code: "ML", name: "Mali" },
  { code: "MR", name: "Mauritania" },
  { code: "MU", name: "Mauritius" },
  { code: "MZ", name: "Mozambique" },
  { code: "NA", name: "Namibia" },
  { code: "NP", name: "Nepal" },
  { code: "NE", name: "Niger" },
  { code: "RW", name: "Rwanda" },
  { code: "ST", name: "São Tomé and Príncipe" },
  { code: "SN", name: "Senegal" },
  { code: "SL", name: "Sierra Leone" },
  { code: "SB", name: "Solomon Islands" },
  { code: "SO", name: "Somalia" },
{ code: "LK", name: "Sri Lanka" },
{ code: "SD", name: "Sudan" },
{ code: "SZ", name: "Eswatini" },
{ code: "TZ", name: "Tanzania" },
{ code: "TG", name: "Togo" },
{ code: "TO", name: "Tonga" },
{ code: "UG", name: "Uganda" },
{ code: "UZ", name: "Uzbekistan" },
{ code: "ZM", name: "Zambia" },
{ code: "ZW", name: "Zimbabwe" },
];


const getFlagEmoji = (countryCode) => {
  return countryCode
    .toUpperCase()
    .replace(/./g, (char) =>
      String.fromCodePoint(127397 + char.charCodeAt())
    );
};

const CountriesAndFlags = () => {
  return (
    <div style={{ padding: 20, backgroundColor: "#e3f2fd", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center" }}>🌍 Countries & Flags</h1>
      <p style={{ textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
        Learn about countries with their flags, famous landmarks, and fun facts!
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 20,
          marginTop: 30,
        }}
      >
        {[...countries, ...moreCountries].map((country) => {
          const code = country.code;
          const hasImage = landmarkImages[code];

          return (
            <div
              key={code}
              style={{
                border: "1px solid #ccc",
                borderRadius: 8,
                padding: 10,
                textAlign: "center",
                backgroundColor: "#fafafa",
                userSelect: "none",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                cursor: "default",
              }}
              title={countryFacts[code] || `Learn more about ${country.name}!`}
            >
              <div style={{ fontSize: "3rem" }}>{getFlagEmoji(code)}</div>

              {hasImage && (
                <img
                  src={landmarkImages[code]}
                  alt={`${country.name} landmark`}
                  style={{
                    width: "100%",
                    height: 130,
                    objectFit: "cover",
                    borderRadius: 8,
                    margin: "10px 0",
                  }}
                  loading="lazy"
                />
              )}

              <h3 style={{ margin: "10px 0 5px" }}>{country.name}</h3>
              <p style={{ fontSize: "0.9rem", color: "#555", minHeight: 50 }}>
                {countryFacts[code] || `Learn more about ${country.name}!`}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountriesAndFlags;
