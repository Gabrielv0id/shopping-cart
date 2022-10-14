const CACHE_KEY = 'cartItens';

const getSavedCartItems = () => {
  localStorage.getItem(CACHE_KEY);
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
