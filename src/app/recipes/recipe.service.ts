import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe(
      'Chorizo & mozzarella gnocchi bake', 
      'Cheesy pasta with gnocchi, chorizo and mozzarella', 
      'https://www.tasteofhome.com/wp-content/uploads/2018/01/Black-Bean-Chorizo-Sweet-Potato-Chili_EXPS_SBZ19_152302_B09_14_3b-1-696x696.jpg', 
      [
        new Ingredient('Onion', 1),
        new Ingredient('Garlic Cloves', 2),
        new Ingredient('Chorizo', 120)
      ]),
    new Recipe(
      'Big Fat Burger', 
      'Super fat burger that you will not get enough of', 
      'https://www.tasteofhome.com/wp-content/uploads/2018/01/Scrum-Delicious-Burgers_EXPS_CHMZ19_824_B10_30_2b-696x696.jpg', 
      [
        new Ingredient('Burger', 3),
        new Ingredient('Bun', 2),
        new Ingredient('Onion', 1),
        new Ingredient('Pickle', 1),
        new Ingredient('Cheese', 3)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
