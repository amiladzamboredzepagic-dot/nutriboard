export type MealType = 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack';
export type RecipeFilter = 'all' | MealType;
export type RecipeSortOrder = 'newest' | 'longest';

export interface PreparationStep {
    id: string; 
    description: string;
}

export interface Recipe {
    id: string;
    title: string;
    createdAt: string;
    shortDescription?: string;
    ingredients: string[]; // At least one non-empty string required for submit
    preparationSteps: PreparationStep[];
    prepTimeMinutes: number; // Must be > 0
    servings: number; // Must be > 0
    mealType?: MealType;
    dishImageUri?: string | null;
}