import React from "react";

const bodyPartsInfo = {
  Head:
    "The head contains the brain, eyes, ears, nose, and mouth. It helps us think, see, hear, smell, and speak.",
  Eyes: "We use our eyes to see the world around us.",
  Ears: "Ears help us hear sounds.",
  Nose: "The nose helps us to smell and breathe.",
  Mouth: "The mouth is used for speaking, eating, and smiling.",
  Neck: "The neck supports the head and allows it to move.",
  Shoulders:
    "Shoulders connect the arms to the body and help us lift and move things.",
  Arms: "Arms help us to reach, carry, and hold objects.",
  Elbows: "Elbows let us bend our arms.",
  Hands: "Hands help us to touch, hold, write, eat, and work.",
  Fingers: "Fingers help us to grab and feel small things.",
  Chest: "The chest protects important organs like the heart and lungs.",
  Stomach: "The stomach helps to digest food.",
  Back: "The back supports the body and helps us stand straight.",
  Waist: "The waist connects the upper body to the lower body.",
  Hips: "Hips help us sit and move our legs.",
  Legs: "Legs help us stand, walk, run, and jump.",
  Knees: "Knees help us bend our legs.",
  Feet: "Feet help us walk and balance.",
  Toes: "Toes help us balance while walking or running.",
};

const bodyPartEmojis = {
  Head: "🧠",
  Eyes: "👀",
  Ears: "👂",
  Nose: "👃",
  Mouth: "👄",
  Neck: "🦒",
  Shoulders: "🤸‍♂️",
  Arms: "💪",
  Elbows: "🦾",
  Hands: "🤚",
  Fingers: "🖐️",
  Chest: "❤️",
  Stomach: "🍽️",
  Back: "🦴",
  Waist: "👖",
  Hips: "🍑",
  Legs: "🦵",
  Knees: "🦿",
  Feet: "🦶",
  Toes: "👣",
};

const BodyParts = () => {
  const [selectedPart, setSelectedPart] = React.useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 p-6 font-[Comic_Sans_MS,cursive] text-center flex flex-col items-center sm:flex-row sm:justify-center sm:items-start gap-10">
      <div className="flex-shrink-0">
        <h1 className="text-4xl font-extrabold text-pink-700 mb-6 drop-shadow-md select-none animate-slideIn max-w-xs mx-auto sm:mx-0">
          🧍‍♂️ Let's Learn About Body Parts!
        </h1>
        <img
          src="/images/Body-Parts-For-Kids.avif"
          alt="Human Body"
          className="rounded-3xl shadow-2xl border-4 border-yellow-300 select-none w-[280px] sm:w-[350px]"
          draggable={false}
        />
      </div>

      <div className="flex flex-col items-center sm:items-start max-h-[600px] overflow-y-auto w-full sm:w-[280px] gap-4 p-2 bg-yellow-200 rounded-xl border-4 border-pink-400 shadow-lg">
        {Object.keys(bodyPartsInfo).map((part) => (
          <button
            key={part}
            onClick={() => setSelectedPart(part)}
            className={`flex items-center gap-3 px-5 py-3 rounded-full border-2 font-semibold shadow-md transition-transform duration-300
              ${
                selectedPart === part
                  ? "bg-yellow-400 border-pink-600 text-pink-900 animate-pulseGlow scale-110"
                  : "bg-yellow-300 border-pink-400 text-pink-800 hover:scale-110 hover:bg-yellow-400"
              }
              focus:outline-none focus:ring-4 focus:ring-pink-300 select-none`}
            aria-pressed={selectedPart === part}
          >
            <span className="text-2xl">{bodyPartEmojis[part]}</span>
            <span>{part}</span>
          </button>
        ))}
      </div>

      <div className="w-full max-w-md">
        {selectedPart && (
          <div
            className="p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border-4 border-blue-300 animate-slideUpFade text-left select-text"
            role="region"
            aria-live="polite"
            aria-label={`${selectedPart} description`}
          >
            <h2 className="text-3xl font-bold text-purple-700 mb-3 flex items-center gap-3 select-text">
              <span className="text-4xl animate-bounce">{bodyPartEmojis[selectedPart]}</span> {selectedPart}
            </h2>
            <p className="text-lg text-gray-800">{bodyPartsInfo[selectedPart]}</p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideUpFade {
          0% {opacity: 0; transform: translateY(30px);}
          100% {opacity: 1; transform: translateY(0);}
        }
        @keyframes slideIn {
          0% {opacity: 0; transform: translateX(-30px);}
          100% {opacity: 1; transform: translateX(0);}
        }
        @keyframes pulseGlow {
          0%, 100% {box-shadow: 0 0 10px 0 rgba(255, 105, 180, 0.6);}
          50% {box-shadow: 0 0 25px 10px rgba(255, 105, 180, 0.9);}
        }
        @keyframes bounce {
          0%, 100% {transform: translateY(0);}
          50% {transform: translateY(-10px);}
        }

        .animate-slideUpFade {
          animation: slideUpFade 0.5s ease forwards;
        }
        .animate-slideIn {
          animation: slideIn 0.7s ease forwards;
        }
        .animate-pulseGlow {
          animation: pulseGlow 2.5s ease infinite;
        }
        .animate-bounce {
          animation: bounce 1.5s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default BodyParts;
