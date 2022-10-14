const itens = [];

const saveCartItems = (key, { id, title, price }) => {
  itens.push({ id, title, price });
  localStorage.setItem(key, JSON.stringify(itens));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
