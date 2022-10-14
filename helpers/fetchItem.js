const getApiProductIdUrl = (id) => `https://api.mercadolibre.com/items/${id}`;

const fetchItem = async (id) => {
  if (id === undefined) {
    throw new Error('You must provide an url');
  }
  const url = getApiProductIdUrl(id);
  const api = await fetch(url);
  const object = api.json();
  return object;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
