import { allRecipes } from "@/data/recipes";

export function getTopRecipe() {
    return allRecipes.sort((a, b) => b.score - a.score);
}
