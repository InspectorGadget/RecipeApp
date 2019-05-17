import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: '1',
      title: 'Schnitzel',
      // tslint:disable-next-line: max-line-length
      imageUrl: 'https://www.thespruceeats.com/thmb/dFLHcwFFtDguBZGylUlDN8KaNaw=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: '2',
      title: 'Spaghetti',
      // tslint:disable-next-line: max-line-length
      imageUrl: 'https://cms.splendidtable.org/sites/default/files/styles/w2000/public/Spaghetti-Pic__Photocredit-David-Loftus-LEDE.jpg?itok=-7KB2KCR',
      ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }

}
