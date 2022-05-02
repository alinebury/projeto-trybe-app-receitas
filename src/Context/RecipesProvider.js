import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import { fetchFoods } from '../Api/foodsAPI';
import { fetchDrinks } from '../Api/drinksAPI';

function RecipesProvider({ children }) {
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [search, setSearch] = useState(true);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [recipesAPI, setRecipesAPI] = useState([]);
  const [categoriesAPI, setCategoriesAPI] = useState([]);

  async function getSearch(type) {
    let resultAPI;
    if (type === 'Foods') {
      resultAPI = await fetchFoods();
    } else {
      resultAPI = await fetchDrinks();
    }
    setRecipesAPI(resultAPI);
  }

  const contextValue = {
    foods,
    setFoods,
    drinks,
    setDrinks,
    email,
    setEmail,
    title,
    setTitle,
    search,
    setSearch,
    showSearchBar,
    setShowSearchBar,
    recipesAPI,
    setRecipesAPI,
    getSearch,
    categoriesAPI,
    setCategoriesAPI,
  };

  return (
    <RecipesContext.Provider value={ contextValue }>
      { children }
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default RecipesProvider;
