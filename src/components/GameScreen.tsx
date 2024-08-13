import React, { } from 'react';
import '../styles/GameScreen.css';
import Card from './Card'; // import the Card component

/*
    This is the GameScreen component that will be displayed when the game is in progress.
    It will display the grid of cards and a button to end the game.
    Optionally, we can add a timer, a score, and other game-related information here.
    We need to keep track of the state of each card, the number of cards, and the type of cards
    and implement the logic to check if two cards are a match. If they are a match, we can
    update the state of the cards to indicate that they are matched. If they are not a match,
    we can flip the cards back over.
*/

interface Props {
  // keep track of the number of cards in the x and y grid
  x: number;
  y: number;
  onEndGame: () => void; // Prop function to end the game
}

const GameScreen: React.FC<Props> = ({ x, y, onEndGame }) => {
  //const [selectedCards, setSelectedCards] = useState<number[]>([]);
  //const [matchedCards, setMatchedCards] = useState<number[]>([]);
  //onst [flippedCards, setFlippedCards] = useState<number[]>([]);
  //const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cards = Array.from({ length: x * y }, (_, i) => i + 1);
  const birdImages = [
    "https://cdn.pixabay.com/photo/2024/05/24/19/06/bird-8785666_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/03/28/18/13/bird-4087736_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/03/12/18/00/bird-4051412_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/01/15/14/59/bird-8510323_1280.jpg",
    "https://cdn.pixabay.com/photo/2015/06/21/20/12/peafowl-816981_960_720.jpg",
    "https://cdn.pixabay.com/photo/2018/10/26/17/28/yellow-billed-hornbill-3774974_960_720.jpg",
    "https://cdn.pixabay.com/photo/2023/05/28/09/37/pelican-8023249_960_720.jpg",
    "https://cdn.pixabay.com/photo/2024/03/31/06/16/bird-8666099_1280.jpg"
  ];

  // const handleCardClick = (card: number) => {
  //   console.log("Card clicked:", card);
  // };

  // useEffect(() => {
  //   console.log("Selected cards:", selectedCards);
  //   if (selectedCards.length === 2) {
  //     const [firstCard, secondCard] = selectedCards;
  //     if (firstCard !== secondCard) {
  //       setTimeout(() => {
  //         setFlippedCards(flippedCards.filter(card => card !== firstCard && card !== secondCard));
  //         setSelectedCards([]);
  //       }, 1000); // Adjust the delay as needed
  //     } else {
  //       setSelectedCards([]);
  //     }
  //   }
  // }, [selectedCards, flippedCards]);

  return (
    <div className="gamescreen" style={{ gridTemplateColumns: `repeat(${x}, 1fr)` }}>
      {cards.map((card, index) => (
       <Card 
       key={card}
       cardNumber={card}
       image={birdImages[index % birdImages.length]} // Use different images
       isFlipped={false}
     />
      ))}
      <button onClick={onEndGame}>End Game</button>
    </div>
  );
};

export default GameScreen;