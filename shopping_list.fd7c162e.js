function n(n,e,t,i){Object.defineProperty(n,e,{get:t,set:i,enumerable:!0,configurable:!0})}function e(n){return n&&n.__esModule?n.default:n}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},r=t.parcelRequire0688;null==r&&((r=function(n){if(n in i)return i[n].exports;if(n in o){var e=o[n];delete o[n];var t={id:n,exports:{}};return i[n]=t,e.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(n,e){o[n]=e},t.parcelRequire0688=r),r.register("kyEFX",(function(e,t){var i,o;n(e.exports,"register",(function(){return i}),(function(n){return i=n})),n(e.exports,"resolve",(function(){return o}),(function(n){return o=n}));var r={};i=function(n){for(var e=Object.keys(n),t=0;t<e.length;t++)r[e[t]]=n[e[t]]},o=function(n){var e=r[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),r("kyEFX").register(JSON.parse('{"emlAG":"shopping_list.fd7c162e.js","8OQ7p":"icons.13fedd02.svg","9c1dv":"noImage-desk@1x.1332fa8f.png","8bHsX":"index.51ef6b31.js"}')),r("74Aiq"),r("1wkNH"),r("3oIZ9");var s,a=r("hkoFk");s=new URL(r("kyEFX").resolve("8OQ7p"),import.meta.url).toString();var l;l=new URL(r("kyEFX").resolve("9c1dv"),import.meta.url).toString();const d=document.querySelector(".basketList"),c=new(0,a.BookAPI);d.addEventListener("click",(function(n){if("BUTTON"!==n.target.nodeName&&"svg"!==n.target.nodeName&&"use"!==n.target.nodeName)return;const e=n.target.closest("li").dataset.id,t=u.indexOf(e);if(-1!==t){u.splice(t,1);const n=JSON.stringify({id:u});localStorage.setItem("booksInShopingList",n),p()}}));const u=(JSON.parse(localStorage.getItem("booksInShopingList"))||{id:[]}).id;async function p(){const n=await async function(){const n=u.map((async n=>(c.id=n,await c.getBooksById())));return await Promise.all(n)}();d.innerHTML=function(n){if(!u.length)return console.log("im here"),'<div class="emptyShoppingList">\n        <p class="emptyText">\n          This page is empty, add some books and proceed to order.\n        </p>\n        <div class="thumbEmptyShoppingList"></div>\n      </div>';return n.map((({author:n,book_image:t,description:i,title:o,_id:r,buy_links:a})=>` <li data-id="${r}">\n              <article class="basketCard">\n                <button class="trashButton" type="button">\n                  <svg width="20px" height="20px">\n                    <use href=${e(s)}#icon-trash></use>\n                  </svg>\n                </button>\n                <div class="imgThumb">\n                  <img\n                    class="basketCard_Image"\n                    src=${t||e(l)}\n                    alt=${o||"No title"}\n                  loading="lazy"/>\n                </div>\n                <div>\n                  <h2 class="title">${o||"No title"}</h2>\n                  <p class="dump">Hardcover fiction</p>\n                  <p class="description">\n                    ${i||"No description"}\n                  </p>\n                  \n                    <p class="author underscription">${n||"No author"}</p>\n                    <ul class="basketBuyLink">\n                      <li>\n                        <a\n                          href="${a[0].url}" target="_blank">\n                        <div class="thumbAmazon"></div>\n                        </a>\n                      </li>\n                      <li>\n                        <a                          \n                          href="${a[1].url}" target="_blank"\n                          ><div class="thumbAppleBook"></div>\n                        </a>\n                      </li>\n                      <li>\n                        <a                         \n                          href="${a[4].url}" target="_blank"\n                          >\n                          <div class="thumbBookshop"></div>\n                        </a>\n                      </li>\n                    </ul>\n                  \n                </div>\n              </article>\n            </li>`)).join(" ")}(n)}console.log(u.length),p(),r("8Wl2i"),r("ciMc1"),r("hw4Fk"),r("hkoFk");
//# sourceMappingURL=shopping_list.fd7c162e.js.map
