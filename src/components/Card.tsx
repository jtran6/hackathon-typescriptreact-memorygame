import React, { useState } from 'react';
import '../styles/Card.css';

/*
  This is the Card component that represents a single card in the game. We need to
  track the state of the card to determine if it has been flipped or matched. We also
  need to track the type of card to check if two cards are a match. If the cards are a match,
  we can update the state of the cards to indicate that they are matched. If they are not a match,
  we can flip the cards back over.
*/

interface CardProps {
  cardNumber: number;
  image: string;
  isFlipped: boolean;
  //isMatched: boolean;
}

const Card: React.FC<CardProps> = ({ cardNumber, image }) => {
  const [isClicked, setIsClicked] = useState(false); // state to manage if card has been clicked

  const handleClick = () => {
    console.log(`Card ${cardNumber} clicked`);
    setIsClicked(!isClicked);
  };

  return (
    <div className="card" onClick={handleClick}>
      {isClicked ? <img src={image} alt={`Card ${cardNumber}`} style={{ width: '100%', height: '100%' }} /> : `Card ${cardNumber}`}
    </div>
  );
};

export default Card;