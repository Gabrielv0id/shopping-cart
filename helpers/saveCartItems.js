const CACHE_KEY = 'cartItens';

const itens = [];

const saveCartItems = ({ id, title, price }) => {
  itens.push({ id, title, price });
  localStorage.setItem(CACHE_KEY, JSON.stringify(itens));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
