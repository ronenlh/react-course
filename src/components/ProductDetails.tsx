import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json';
import { ICard } from './Card';

const ProductDetails = () => {
    const { productId = 0 } = useParams<'productId'>();
    const card: ICard = data[productId as number];

    return (
        <div className={card.animation}>
            <div className="front">
                <img src="/juice.jpg" alt="Avatar" className="card-image" />
                <div className="container">
                <h3>{card.title}</h3>
                <h3><span className="price">₪{card.price}</span></h3>
                <p>{card.description}</p>
                </div>
            </div>
        </div>
    )
}
 
export default ProductDetails;
