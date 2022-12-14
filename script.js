// const CACHE_KEY = 'cartItens';
/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
const getIdFromProductItem = (product) => product.querySelector('span.id').innerText;

const cartItem = document.querySelector('.cart__items');

const totalPrice = () => {
  const priceHtml = document.querySelector('.total-price');
  const listaItens = document.querySelectorAll('li');
  let total = 0;
  listaItens.forEach((item) => { total += Number(item.innerText.split('$')[1]); });
  priceHtml.innerText = `R$ ${total.toFixed(2)}`;
};

const cartItemClickListener = (event) => {
  const clickedElement = event.target;
  cartItem.removeChild(clickedElement);
  totalPrice();
};

const emptyCart = () => {
  const emptyButton = document.querySelector('.empty-cart');
  emptyButton.addEventListener('click', () => {
    cartItem.innerText = '';
    totalPrice();
  });
};
const loadingText = document.querySelector('.loading');

const loadingApi = () => {
  loadingText.innerText = 'carregando...';
};

const removeLoading = () => {
  loadingText.remove();
};

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */
const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}; 
const items = document.querySelector('.items');

// const setItenOnLocal = (infoItens) => {
//   saveCartItems(CACHE_KEY, infoItens);
// };

const addCartItens = (infoItens, index) => {
  const buttons = document.querySelectorAll('.item__add');
      buttons[index].addEventListener('click', () => {
        cartItem.appendChild(createCartItemElement(infoItens));
      //  setItenOnLocal(infoItens);
      totalPrice();
    });
};
const addProducts = async () => {
  loadingApi();
  (await fetchProducts('computador')).results.forEach((product, index) => {
    removeLoading();
    items.appendChild(createProductItemElement(product));
    addCartItens(product, index);
  });
};

window.onload = async () => {
  addProducts();
  emptyCart();
};
