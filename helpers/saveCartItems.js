const CACHE_KEY = 'cartItens';

const saveCartItems = (cartItem) => {
  localStorage.setItem(CACHE_KEY, JSON.stringify(cartItem));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
