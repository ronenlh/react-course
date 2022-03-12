import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export interface ICard {
  id: number;
  title: string;
  price: number;
  description: string;
  type: string;
  animation: string;
}

interface CardProps {
  card: ICard;
}

const Card = (props: CardProps) =>  (
  <div className={props.card.animation}>
    <Link to={`/product/${props.card.id}`}>
      <div className="front">
        <img src="juice.jpg" alt="Avatar" className="card-image" />
        <div className="container">
          <h3>{props.card.title}</h3>
          <h3><span className="price">₪{props.card.price}</span></h3>
          <p>{props.card.description}</p>
        </div>
      </div>
    </Link>
  </div>
);

export default Card;
