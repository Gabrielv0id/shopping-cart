const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  const cartItem = 1234
  it('testa se o metodo localstorage.setItem é chamado', () => {
    saveCartItems();
    expect(localStorage.setItem).toBeCalled();
  });
  it('testa se o metodo localstorage.setItem é chamado com key e value corretos', () => {
    saveCartItems(cartItem);
    expect(localStorage.setItem).toBeCalledWith('cartItens', JSON.stringify(cartItem));
  });
});
