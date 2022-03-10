import React from 'react';

import './IngredientList.css';
import { Ingredient } from './Ingredients';

export interface IngredientListProps {
  ingredients: Ingredient[];
  onRemoveItem: (id: string) => void;
}

const IngredientList: React.FC<IngredientListProps> = (props) => {
  console.log('RENDERING INGREDIENTLIST');
  return (
    <section className="ingredient-list">
      <h2>Loaded Ingredients</h2>
      <ul>
        {props.ingredients.map((ig) => (
          <li key={ig.id} onClick={ () => props.onRemoveItem(ig.id)}>
            <span>{ig.title}</span>
            <span>{ig.amount}x</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IngredientList;
