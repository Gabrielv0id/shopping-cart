const getApiUrl = (product) => `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;

const fetchProducts = async (product) => {
  try {
    const url = getApiUrl(product);
    const api = await fetch(url);
    const object = await api.json();
    return object;
  } catch (error) {
    return error;
  }
};
fetchProducts('computador');
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
