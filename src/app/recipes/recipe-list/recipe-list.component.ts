import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent {
  // Uso il modello Recipe per definire un array di ricette
recipes: Recipe[] = [
  new Recipe('A Test Recipe', 'This is simply a test', 'https://www.maxpixel.net/static/photo/1x/Recipe-Kitchen-Baking-Ingredients-Cooking-Book-2169308.jpg'),
  new Recipe('A Test Recipe', 'This is simply a test', 'https://www.maxpixel.net/static/photo/1x/Recipe-Kitchen-Baking-Ingredients-Cooking-Book-2169308.jpg')
];
}
