require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('testa se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('testa se ao chamar a função o fetch é chamado', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
  });
  it('testa se ao chamar a função o fetch é chamado com a url esperada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  it('testa se o retorno esta correto',async () => {
    const actual = await fetchItem('MLB1615760527')
    expect(actual).toEqual(item);
  });
  it('teste se ao chamar a função sem arumento retorna um erro', async () => {
    try{
      await fetchItem();
    }catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  })
});
