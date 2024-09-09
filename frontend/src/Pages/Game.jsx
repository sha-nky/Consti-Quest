import React, { useState } from 'react';

const scenarios = [
  {
    id: 1,
    situation: "You're at a party, and you notice a woman being uncomfortable with a man trying to talk to her. She seems distressed but isn't saying anything. What do you do?",
    choices: [
      {
        text: "Intervene directly and ask the man to leave her alone.",
        outcome: "neutral",
        message: "Intervening might help, but without knowing the full context, it could escalate the situation."
      },
      {
        text: "Speak to the woman in private and ask if she needs help.",
        outcome: "correct",
        message: "This is the best course of action, allowing the woman to decide if she wants to involve you."
      },
      {
        text: "Alert the host of the party about the situation.",
        outcome: "mixed",
        message: "Informing the host might work, but it could also embarrass the woman if she's not comfortable."
      }
    ]
  },
  {
    id: 2,
    situation: "Your colleague confides in you that she's facing sexual harassment from a senior manager, but she's afraid of reporting it because she might lose her job. What do you do?",
    choices: [
      {
        text: "Encourage her to report the manager and assure her the law protects her from retaliation.",
        outcome: "correct",
        message: "This is a lawful and supportive option, but it also risks her career, so you'll need to guide her through proper channels."
      },
      {
        text: "Suggest she document the incidents privately while continuing to work until she feels secure enough to report it.",
        outcome: "neutral",
        message: "This keeps her safe for now, but delays legal action. It’s important to balance safety and legal consequences."
      },
      {
        text: "Offer to confront the manager on her behalf and ask them to stop.",
        outcome: "wrong",
        message: "Confronting without involving HR/legal authorities might make the situation worse and put both of you at risk."
      }
    ]
  },
  {
    id: 3,
    situation: "You notice a female coworker being repeatedly assigned menial tasks while more qualified male colleagues receive promotions. She seems frustrated but hasn't said anything. What do you do?",
    choices: [
      {
        text: "Approach HR to discuss the issue.",
        outcome: "correct",
        message: "Reporting potential workplace discrimination is the right step. HR is responsible for ensuring a fair work environment."
      },
      {
        text: "Talk to your coworker privately to offer support and encourage her to speak up.",
        outcome: "neutral",
        message: "Offering support is good, but without formal action, the issue may persist."
      },
      {
        text: "Ignore the situation, assuming it’s not your responsibility.",
        outcome: "wrong",
        message: "Ignoring potential discrimination allows unfair practices to continue, harming workplace equality."
      }
    ]
  },
  {
    id: 4,
    situation: "A friend tells you she’s being stalked by an ex-partner who constantly sends her unwanted messages and follows her. She’s scared but unsure what to do. What’s your advice?",
    choices: [
      {
        text: "Advise her to obtain a restraining order and report the stalking to the police.",
        outcome: "correct",
        message: "Obtaining a restraining order is a legal step to protect herself. Reporting to authorities ensures her safety."
      },
      {
        text: "Suggest she block the ex-partner on all platforms and avoid him without taking further action.",
        outcome: "neutral",
        message: "Blocking can provide temporary relief, but without legal action, the stalking may continue."
      },
      {
        text: "Encourage her to confront the ex-partner directly to resolve the issue.",
        outcome: "wrong",
        message: "Confronting the stalker directly can escalate the situation and compromise her safety."
      }
    ]
  },
  {
    id: 5,
    situation: "You hear a woman in a public place expressing distress about someone trying to force her into a vehicle. What should you do?",
    choices: [
      {
        text: "Immediately call the police and stay with her until help arrives.",
        outcome: "correct",
        message: "Calling the police ensures professional help arrives quickly, enhancing her safety."
      },
      {
        text: "Approach her and ask if she needs assistance before taking any further action.",
        outcome: "neutral",
        message: "Offering assistance is good, but ensuring immediate safety by involving authorities is more effective."
      },
      {
        text: "Wait to see if she can handle the situation on her own.",
        outcome: "wrong",
        message: "Delaying help can put her in greater danger. Immediate action is crucial in such situations."
      }
    ]
  },
  {
    id: 6,
    situation: "Your colleague confides that she's experiencing unwanted advances from her supervisor but fears retaliation if she reports it. How do you handle this?",
    choices: [
      {
        text: "Encourage her to document all incidents and report the behavior to HR or a trusted authority.",
        outcome: "correct",
        message: "Documenting and reporting ensures there's evidence and that appropriate actions can be taken to address the harassment."
      },
      {
        text: "Suggest she ignores the advances and tries to distance herself without reporting.",
        outcome: "neutral",
        message: "While avoiding confrontation might reduce immediate stress, it doesn't stop the harassment and leaves the issue unresolved."
      },
      {
        text: "Offer to speak to the supervisor on her behalf to resolve the issue informally.",
        outcome: "wrong",
        message: "Addressing harassment informally can lead to unresolved issues and potential backlash. Formal reporting is more effective."
      }
    ]
  },
  {
    id: 7,
    situation: "You find out that a local event has minimal security, making it potentially unsafe for women attending alone. What action do you take?",
    choices: [
      {
        text: "Report the security concerns to the event organizers and suggest improvements.",
        outcome: "correct",
        message: "Informing organizers allows them to enhance security measures, ensuring a safer environment for all attendees."
      },
      {
        text: "Warn your female friends about the lack of security so they can take precautions.",
        outcome: "neutral",
        message: "While warning friends is helpful, addressing the root issue by informing organizers can lead to broader safety improvements."
      },
      {
        text: "Assume the event will proceed without issues and do nothing.",
        outcome: "wrong",
        message: "Ignoring potential safety hazards can result in preventable incidents. Proactive measures are necessary for safety."
      }
    ]
  },
];

function Game() {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [outcomeMessage, setOutcomeMessage] = useState('');
  const [outcomeType, setOutcomeType] = useState(''); // To style messages based on outcome
  const [gameOver, setGameOver] = useState(false);

  const handleChoice = (choice) => {
    setOutcomeMessage(choice.message);
    setOutcomeType(choice.outcome);

    if (currentScenario < scenarios.length - 1) {
      setTimeout(() => {
        setCurrentScenario(currentScenario + 1);
        setOutcomeMessage('');
        setOutcomeType('');
      }, 4000); // Increased delay for better reflection
    } else {
      setTimeout(() => {
        setGameOver(true);
      }, 4000);
    }
  };

  const restartGame = () => {
    setCurrentScenario(0);
    setOutcomeMessage('');
    setOutcomeType('');
    setGameOver(false);
  };

  return (
    <div className="bg-gray-700 min-h-full flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl font-bold mb-8 text-white">Women Safety Law: Choose Your Path</h1>

      {!gameOver ? (
        <div className="bg-white p-6 rounded-2xl shadow-md w-[45%]">
          <h2 className="text-4xl mb-4">{scenarios[currentScenario].situation}</h2>
          <div className="flex flex-col space-y-4 text-3xl">
            {scenarios[currentScenario].choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => handleChoice(choice)}
                className="bg-blue-500 text-white py-6 px-4 rounded hover:bg-blue-600 transition"
              >
                {choice.text}
              </button>
            ))}
          </div>
          {outcomeMessage && (
            <div className={`mt-6 p-8 text-3xl rounded ${getOutcomeStyle(outcomeType)}`}>
              <p>{outcomeMessage}</p>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white p-6 rounded shadow-md text-center w-[45%] h-[300px] flex flex-col justify-center items-center gap-8">
          <h2 className="text-5xl font-semibold mb-4">You've completed the game!</h2>
          <button
            onClick={restartGame}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition text-3xl"
          >
            Play Again
          </button>
          <div className="mt-6 text-left w-full">
            <h3 className="text-3xl font-semibold">Resources:</h3>
            <ul className="list-disc list-inside">
              <li><a href="https://www.womenshelpline.com" className="text-2xl text-blue-500 underline">Women’s Helpline</a></li>
              <li><a href="https://www.gov.in/women-safety" className="text-2xl text-blue-500 underline">Government Women Safety Portal</a></li>
              <li><a href="https://www.lawyers.com" className="text-2xl text-blue-500 underline">Legal Assistance</a></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

function getOutcomeStyle(outcome) {
  switch (outcome) {
    case 'correct':
      return 'bg-green-100 border border-green-400 text-green-700';
    case 'neutral':
      return 'bg-yellow-100 border border-yellow-400 text-yellow-700';
    case 'wrong':
      return 'bg-red-100 border border-red-400 text-red-700';
    case 'mixed':
      return 'bg-blue-100 border border-blue-400 text-blue-700';
    default:
      return '';
  }
}

export default Game;
