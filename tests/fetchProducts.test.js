require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('testa se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('testa se a fetch é chamada', async () => {
    expect.assertions(1);
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
  });
  it('testa se ao chamar o fetch é passado a url corretamente', async () => {
    expect.assertions(1);
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });
  it('testa se retorna corretamente um objeto da função', async () => {
    expect.assertions(1);
    const actual = await fetchProducts('computador');
    expect(actual).toEqual(computadorSearch);
  });
  it('testa se um erro é passado caso chamar-mos a função sem parametro', async () => {
    try {
      await fetchProducts();
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  });
});
