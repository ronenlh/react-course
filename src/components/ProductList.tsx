import React from 'react';
import Card, { ICard } from './Card';

interface ProductListProps {
  cards: ICard[];
}

const ProductList = (props: ProductListProps) => {
  return (
    <div className="Grid animated bounceInUp">
      {
        props.cards.map((card) => (
          <Card 
            key={card.id}
            card={card} 
          />
        ))
      }
    </div>
  )
}
 
export default ProductList;
