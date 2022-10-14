const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('testa se ao chamar a função o localstorage.getItem é chamado', () =>{
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalled();
  });
  it('testa se ao chamar a função o localstorage.getItem é chamado com a key correta', () =>{
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalledWith('cartItens');
  });
});
