import{g as k,m as r,a as h,b as I,c as u,d as T}from"./assets/applebooks@2x-32274212.js";const L="https://books-backend.p.goit.global/books",w={list:"category-list",top:"top-books",category:"category?category="};async function v(e,t=""){try{return await(await fetch(`${L}/${e}${t}`)).json()}catch{alert("An error occurred")}}async function E(e){try{return await(await fetch(`${L}/${e}`)).json()}catch{alert("An error occurred")}}const o={API_OPTIONS:w,fetchBookList:v,fetchBookById:E},$=document.querySelector(".ctg-list");o.fetchBookList(o.API_OPTIONS.list).then(e=>{const t=e.map(({list_name:s})=>`<li class="ctg-item js-ctg-item " data-ctg-name = ${s}>${s}
          </li>`).join("");$.insertAdjacentHTML("beforeend",t)});const i=k();o.fetchBookList(o.API_OPTIONS.top).then(r.renderTopBooks);function B(e){[...i.ctgList.children].forEach(t=>t.classList.remove("ctg-item-active")),i.ctgList.contains(e.target)?e.target.classList.add("ctg-item-active"):[...i.ctgList.children].find(s=>s.textContent.trim()===e.target.dataset.category).classList.add("ctg-item-active")}function O(e){const t=e.target.childNodes[0].data;B(e),t!=="All categories"?o.fetchBookList(o.API_OPTIONS.category,t).then(r.renderCategoryBooks):o.fetchBookList(o.API_OPTIONS.top).then(r.renderTopBooks)}function x(e){if(!e.target.classList.contains("top-books-button"))return;const t=e.target.dataset.category;B(e),o.fetchBookList(o.API_OPTIONS.category,t).then(r.renderCategoryBooks)}i.ctgList.addEventListener("click",O);i.bookCollectionWrapper.addEventListener("click",x);const A=k(),l=document.getElementById("bookModal"),g=document.getElementById("bookModalTitle"),C=document.getElementById("bookModalBody"),a=document.getElementById("addToShoppingList"),_=document.querySelector(".modal-close"),d=document.getElementById("modalFooterText");let n=[],c=[],b={};const M="The Duke of Sussex details his struggles with the royal family, loss of his mother, service in the British Army and marriage to Meghan Markle. Read by the author. 15 hours, 39 minutes unabridged.";function P(e){o.fetchBookById(e).then(t=>{g.innerText=t.title,t.description||(t.description=M),b={book_image:t.book_image,title:t.title,author:t.author,description:t.description,amazonLinks:t.buy_links[0].url,appleLinks:t.buy_links[1].url},g.dataset.bookId=e,C.innerHTML=`<img src="${t.book_image}" alt="${t.title}" class="book-modal-img"/>
            <div class="book-modal-details">
                <h2 class="book-modal-title">${t.title}</h2>
                <h3 class="book-modal-author">${t.author}</h3>
                <p class="book-modal-desc">${t.description}</p>
                <ul class="icon-book-modal-list">
                    <li>
                        <a href="${t.buy_links[0].url}" rel="noopener noreferrer nofollow" target="_blank">
                            <img class="icon-book-modal-amazon" srcset="${h} 1x, ${I} 2x" src="${h}" alt="Amazon" loading="lazy"/>
                        </a>
                    </li>
                    <li>
                        <a href="${t.buy_links[1].url}" rel="noopener noreferrer nofollow" target="_blank">
                            <img class="icon-book-modal-ibooks" srcset="${u} 1x, ${T} 2x" src="${u}" alt="Apple books" loading="lazy"/>
                        </a>
                    </li>
                </ul>
            </div>
    `,n.includes(e)?(a.innerText="Remove from the shopping list",d.style.display="block"):(a.innerText="Add to shopping list",d.style.display="none"),l.classList.add("show"),document.body.style.overflow="hidden"})}function m(){l.classList.remove("show"),document.body.style.overflow=""}function N(e){if(!e){console.error("Invalid bookId:",e);return}const t=n.indexOf(e);t===-1?(n.push(e),c.push(b)):(n.splice(t,1),c.splice(t,1)),localStorage.setItem("shoppingList",JSON.stringify(n)),localStorage.setItem("shoppingCard",JSON.stringify(c)),t===-1?(a.innerText="Remove from the shopping list",d.style.display="block"):(a.innerText="Add to shopping list",d.style.display="none")}a.addEventListener("click",()=>{const e=g.dataset.bookId;N(e)});l.addEventListener("click",e=>{e.target===l&&m()});document.addEventListener("keydown",e=>{e.key==="Escape"&&m()});A.bookCollectionWrapper.addEventListener("click",e=>{const t=e.target.closest(".book-link");if(t){e.preventDefault();const s=t.dataset.id;P(s)}});const f=localStorage.getItem("shoppingList"),y=localStorage.getItem("shoppingCard");f&&(n=JSON.parse(f));y&&(c=JSON.parse(y));_.addEventListener("click",m);document.addEventListener("DOMContentLoaded",function(){document.getElementById("signupBtn").addEventListener("click",openRegistrationModal)});const p=document.querySelector(".back-to-top");window.addEventListener("scroll",z);p.addEventListener("click",S);function z(){const e=window.pageYOffset,t=document.documentElement.clientHeight;e>t?p.classList.add("back-to-top--show"):p.classList.remove("back-to-top--show")}function S(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(S,0))}
//# sourceMappingURL=commonHelpers.js.map
