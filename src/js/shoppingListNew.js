import { BookAPI } from './bookAPI';
import svgTrash from '../images/icons.svg';
import noImg from '../images/noImage/noImage-desk@1x.png';
// import { spinerStart, spinerStop } from './spinner';

const shoppingList = document.querySelector('.basketList');
const api = new BookAPI();

shoppingList.addEventListener('click', onTrashClick);

const LOCALSTORAGE_KEY = 'booksInShopingList';

// spinerStart();

let localStorageData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || { id: [] };
const booksId = localStorageData.id; 
console.log(booksId.length);

function onTrashClick(evt) {
  if (
    evt.target.nodeName !== 'BUTTON' &&
    evt.target.nodeName !== 'svg' &&
    evt.target.nodeName !== 'use'
  ) {
    return;
  }
  const li = evt.target.closest('li');
  const bookInTrashId = li.dataset.id;

  const idToRemove = booksId.indexOf(bookInTrashId);
  if (idToRemove !== -1) {
    booksId.splice(idToRemove, 1);

    const updatedbBoksIdToString = JSON.stringify({
      id: booksId,
    });

    localStorage.setItem(LOCALSTORAGE_KEY, updatedbBoksIdToString);

    rendering();
  }
};


async function fetchBooks() {
  const arrayOfPromises = booksId.map(async (id) => {
      api.id = id;
      const response = await api.getBooksById();
    return response
      
  })
  const books = await Promise.all(arrayOfPromises);
  return books;
  
}

async function rendering() {
  const data = await fetchBooks();
  shoppingList.innerHTML = createShoppingCardMarkup(data);

 };

rendering();
// spinerStop();

function createShoppingCardMarkup(data) {
  if (!booksId.length) {
     console.log("im here");
      return `<div class="emptyShoppingList">
        <p class="emptyText">
          This page is empty, add some books and proceed to order.
        </p>
        <div class="thumbEmptyShoppingList"></div>
      </div>`;
      
  }
  return  data.map(({author,
  book_image,
  description,
  title,
  _id,
    buy_links, }) => 
    ` <li data-id="${_id}">
              <article class="basketCard">
                <button class="trashButton" type="button">
                  <svg width="20px" height="20px">
                    <use href=${svgTrash}#icon-trash></use>
                  </svg>
                </button>
                <div class="imgThumb">
                  <img
                    class="basketCard_Image"
                    src=${book_image || noImg}
                    alt=${title || 'No title'}
                  loading="lazy"/>
                </div>
                <div>
                  <h2 class="title">${title || 'No title'}</h2>
                  <p class="dump">Hardcover fiction</p>
                  <p class="description">
                    ${description || 'No description'}
                  </p>
                  
                    <p class="author underscription">${
                      author || 'No author'
                    }</p>
                    <ul class="basketBuyLink">
                      <li>
                        <a
                          href="${buy_links[0].url}" target="_blank">
                        <div class="thumbAmazon"></div>
                        </a>
                      </li>
                      <li>
                        <a                          
                          href="${buy_links[1].url}" target="_blank"
                          ><div class="thumbAppleBook"></div>
                        </a>
                      </li>
                      <li>
                        <a                         
                          href="${buy_links[4].url}" target="_blank"
                          >
                          <div class="thumbBookshop"></div>
                        </a>
                      </li>
                    </ul>
                  
                </div>
              </article>
            </li>`
  ).join(" ") 
 
}
