import{g as v,m,a as B,b as A,c as b,d as _}from"./assets/applebooks@2x-32274212.js";const w="https://books-backend.p.goit.global/books",P={list:"category-list",top:"top-books",category:"category?category="};async function N(e,t=""){try{return await(await fetch(`${w}/${e}${t}`)).json()}catch{alert("An error occurred")}}async function z(e){try{return await(await fetch(`${w}/${e}`)).json()}catch{alert("An error occurred")}}const s={API_OPTIONS:P,fetchBookList:N,fetchBookById:z},R=document.querySelector(".ctg-list");s.fetchBookList(s.API_OPTIONS.list).then(e=>{const t=e.map(({list_name:o})=>`<li class="ctg-item js-ctg-item " data-ctg-name = ${o}>${o}
          </li>`).join("");R.insertAdjacentHTML("beforeend",t)});const l=v();s.fetchBookList(s.API_OPTIONS.top).then(m.renderTopBooks);function S(e){[...l.ctgList.children].forEach(t=>t.classList.remove("ctg-item-active")),l.ctgList.contains(e.target)?e.target.classList.add("ctg-item-active"):[...l.ctgList.children].find(o=>o.textContent.trim()===e.target.dataset.category).classList.add("ctg-item-active")}function j(e){const t=e.target.childNodes[0].data;S(e),t!=="All categories"?s.fetchBookList(s.API_OPTIONS.category,t).then(m.renderCategoryBooks):s.fetchBookList(s.API_OPTIONS.top).then(m.renderTopBooks)}function D(e){if(!e.target.classList.contains("top-books-button"))return;const t=e.target.dataset.category;S(e),s.fetchBookList(s.API_OPTIONS.category,t).then(m.renderCategoryBooks)}l.ctgList.addEventListener("click",j);l.bookCollectionWrapper.addEventListener("click",D);const F=v(),u=document.getElementById("bookModal"),f=document.getElementById("bookModalTitle"),H=document.getElementById("bookModalBody"),c=document.getElementById("addToShoppingList"),J=document.querySelector(".modal-close"),h=document.getElementById("modalFooterText");let a=[],p=[],T={};const q="The Duke of Sussex details his struggles with the royal family, loss of his mother, service in the British Army and marriage to Meghan Markle. Read by the author. 15 hours, 39 minutes unabridged.";function U(e){s.fetchBookById(e).then(t=>{f.innerText=t.title,t.description||(t.description=q),T={book_image:t.book_image,title:t.title,author:t.author,description:t.description,amazonLinks:t.buy_links[0].url,appleLinks:t.buy_links[1].url},f.dataset.bookId=e,H.innerHTML=`<img src="${t.book_image}" alt="${t.title}" class="book-modal-img"/>
            <div class="book-modal-details">
                <h2 class="book-modal-title">${t.title}</h2>
                <h3 class="book-modal-author">${t.author}</h3>
                <p class="book-modal-desc">${t.description}</p>
                <ul class="icon-book-modal-list">
                    <li>
                        <a href="${t.buy_links[0].url}" rel="noopener noreferrer nofollow" target="_blank">
                            <img class="icon-book-modal-amazon" srcset="${B} 1x, ${A} 2x" src="${B}" alt="Amazon" loading="lazy"/>
                        </a>
                    </li>
                    <li>
                        <a href="${t.buy_links[1].url}" rel="noopener noreferrer nofollow" target="_blank">
                            <img class="icon-book-modal-ibooks" srcset="${b} 1x, ${_} 2x" src="${b}" alt="Apple books" loading="lazy"/>
                        </a>
                    </li>
                </ul>
            </div>
    `,a.includes(e)?(c.innerText="Remove from the shopping list",h.style.display="block"):(c.innerText="Add to shopping list",h.style.display="none"),u.classList.add("show"),document.body.style.overflow="hidden"})}function L(){u.classList.remove("show"),document.body.style.overflow=""}function W(e){if(!e){console.error("Invalid bookId:",e);return}const t=a.indexOf(e);t===-1?(a.push(e),p.push(T)):(a.splice(t,1),p.splice(t,1)),localStorage.setItem("shoppingList",JSON.stringify(a)),localStorage.setItem("shoppingCard",JSON.stringify(p)),t===-1?(c.innerText="Remove from the shopping list",h.style.display="block"):(c.innerText="Add to shopping list",h.style.display="none")}c.addEventListener("click",()=>{const e=f.dataset.bookId;W(e)});u.addEventListener("click",e=>{e.target===u&&L()});document.addEventListener("keydown",e=>{e.key==="Escape"&&L()});F.bookCollectionWrapper.addEventListener("click",e=>{const t=e.target.closest(".book-link");if(t){e.preventDefault();const o=t.dataset.id;U(o)}});const E=localStorage.getItem("shoppingList"),I=localStorage.getItem("shoppingCard");E&&(a=JSON.parse(E));I&&(p=JSON.parse(I));J.addEventListener("click",L);document.addEventListener("DOMContentLoaded",function(){document.getElementById("signupBtn").addEventListener("click",o);const t=document.createElement("div");t.style.position="fixed",t.style.top="20px",t.style.right="20px",t.style.background="red",t.style.color="white",t.style.padding="15px",t.style.display="none",t.style.zIndex="1",document.body.appendChild(t);function o(){fetch("../partials/registration.html").then(n=>n.text()).then(n=>{const C=document.getElementById("registrationModalContainer");C.innerHTML=n;const M=document.getElementById("registrationForm"),$=document.querySelector(".close-icon");M.addEventListener("submit",function(O){O.preventDefault();const r=document.getElementById("name").value,d=document.getElementById("email").value,g=document.getElementById("password").value;if(r&&d&&g){console.log("User data:",{name:r,email:d,password:g});const i={name:r,email:d,password:g};localStorage.setItem("userData",JSON.stringify(i)),y()}else{const i=[];r||i.push("Name"),d||i.push("Email"),g||i.push("Password"),t.textContent=`Please fill in the following fields: ${i.join(", ")}`,t.style.display="block",setTimeout(function(){t.style.display="none"},1e4)}}),$.addEventListener("click",function(){t.style.display="none",y()})}).catch(n=>console.error("Error loading registration content:",n))}function y(){const n=document.getElementById("registrationModalContainer");n.innerHTML=""}});const k=document.querySelector(".back-to-top");window.addEventListener("scroll",Y);k.addEventListener("click",x);function Y(){const e=window.pageYOffset,t=document.documentElement.clientHeight;e>t?k.classList.add("back-to-top--show"):k.classList.remove("back-to-top--show")}function x(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(x,0))}
//# sourceMappingURL=commonHelpers.js.map
