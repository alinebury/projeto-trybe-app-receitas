const ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export async function fetchDrinks() {
  try {
    const response = await fetch(ENDPOINT);
    const result = await response.json();
    return result.drinks ? result.drinks : [];
  } catch (error) {
    return [];
  }
}

export async function fetchDrinksRecipes({ search, searchRadio }) {
  try {
    const type = searchRadio === 'i' ? 'filter' : 'search';
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/${type}.php?${searchRadio}=${search}`);
    const result = await response.json();
    return result.drinks ? result.drinks : [];
  } catch (error) {
    return [];
  }
}

export async function fetchDrinksCategories() {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    const result = await response.json();
    console.log(result);
    return result.drinks ? result.drinks : [];
  } catch (error) {
    return [];
  }
export async function fetchRecipeDrink(id) {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const result = await response.json();
    return result.drinks ? result.drinks : [];
  } catch (error) {
    return [];
  }
}

export async function fetchRecommendationDrink() {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const result = await response.json();
    return result.drinks ? result.drinks : [];
  } catch (error) {
    return [];
  }
}
