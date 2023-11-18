import{g as v,m,a as B,b as P,c as b,d as N}from"./assets/applebooks@2x-32274212.js";const w="https://books-backend.p.goit.global/books",z={list:"category-list",top:"top-books",category:"category?category="};async function R(e,t=""){try{return await(await fetch(`${w}/${e}${t}`)).json()}catch{alert("An error occurred")}}async function j(e){try{return await(await fetch(`${w}/${e}`)).json()}catch{alert("An error occurred")}}const n={API_OPTIONS:z,fetchBookList:R,fetchBookById:j},D=document.querySelector(".ctg-list");n.fetchBookList(n.API_OPTIONS.list).then(e=>{const t=e.map(({list_name:o})=>`<li class="ctg-item js-ctg-item " data-ctg-name = ${o}>${o}
          </li>`).join("");D.insertAdjacentHTML("beforeend",t)});const r=v();n.fetchBookList(n.API_OPTIONS.top).then(m.renderTopBooks);function S(e){[...r.ctgList.children].forEach(t=>t.classList.remove("ctg-item-active")),r.ctgList.contains(e.target)?e.target.classList.add("ctg-item-active"):[...r.ctgList.children].find(o=>o.textContent.trim()===e.target.dataset.category).classList.add("ctg-item-active")}function F(e){const t=e.target.childNodes[0].data;S(e),t!=="All categories"?n.fetchBookList(n.API_OPTIONS.category,t).then(m.renderCategoryBooks):n.fetchBookList(n.API_OPTIONS.top).then(m.renderTopBooks)}function H(e){if(!e.target.classList.contains("top-books-button"))return;const t=e.target.dataset.category;S(e),n.fetchBookList(n.API_OPTIONS.category,t).then(m.renderCategoryBooks)}r.ctgList.addEventListener("click",F);r.bookCollectionWrapper.addEventListener("click",H);const J=v(),p=document.getElementById("bookModal"),f=document.getElementById("bookModalTitle"),q=document.getElementById("bookModalBody"),d=document.getElementById("addToShoppingList"),U=document.querySelector(".modal-close"),u=document.getElementById("modalFooterText");let a=[],g=[],T={};const W="The Duke of Sussex details his struggles with the royal family, loss of his mother, service in the British Army and marriage to Meghan Markle. Read by the author. 15 hours, 39 minutes unabridged.";function Y(e){n.fetchBookById(e).then(t=>{f.innerText=t.title,t.description||(t.description=W),T={book_image:t.book_image,title:t.title,author:t.author,description:t.description,amazonLinks:t.buy_links[0].url,appleLinks:t.buy_links[1].url},f.dataset.bookId=e,q.innerHTML=`<img src="${t.book_image}" alt="${t.title}" class="book-modal-img"/>
            <div class="book-modal-details">
                <h2 class="book-modal-title">${t.title}</h2>
                <h3 class="book-modal-author">${t.author}</h3>
                <p class="book-modal-desc">${t.description}</p>
                <ul class="icon-book-modal-list">
                    <li>
                        <a href="${t.buy_links[0].url}" rel="noopener noreferrer nofollow" target="_blank">
                            <img class="icon-book-modal-amazon" srcset="${B} 1x, ${P} 2x" src="${B}" alt="Amazon" loading="lazy"/>
                        </a>
                    </li>
                    <li>
                        <a href="${t.buy_links[1].url}" rel="noopener noreferrer nofollow" target="_blank">
                            <img class="icon-book-modal-ibooks" srcset="${b} 1x, ${N} 2x" src="${b}" alt="Apple books" loading="lazy"/>
                        </a>
                    </li>
                </ul>
            </div>
    `,a.includes(e)?(d.innerText="Remove from the shopping list",u.style.display="block"):(d.innerText="Add to shopping list",u.style.display="none"),p.classList.add("show"),document.body.style.overflow="hidden"})}function L(){p.classList.remove("show"),document.body.style.overflow=""}function G(e){if(!e){console.error("Invalid bookId:",e);return}const t=a.indexOf(e);t===-1?(a.push(e),g.push(T)):(a.splice(t,1),g.splice(t,1)),localStorage.setItem("shoppingList",JSON.stringify(a)),localStorage.setItem("shoppingCard",JSON.stringify(g)),t===-1?(d.innerText="Remove from the shopping list",u.style.display="block"):(d.innerText="Add to shopping list",u.style.display="none")}d.addEventListener("click",()=>{const e=f.dataset.bookId;G(e)});p.addEventListener("click",e=>{e.target===p&&L()});document.addEventListener("keydown",e=>{e.key==="Escape"&&L()});J.bookCollectionWrapper.addEventListener("click",e=>{const t=e.target.closest(".book-link");if(t){e.preventDefault();const o=t.dataset.id;Y(o)}});const E=localStorage.getItem("shoppingList"),I=localStorage.getItem("shoppingCard");E&&(a=JSON.parse(E));I&&(g=JSON.parse(I));U.addEventListener("click",L);document.addEventListener("DOMContentLoaded",function(){document.getElementById("signupBtn").addEventListener("click",o);const t=document.createElement("div");t.style.position="fixed",t.style.top="20px",t.style.right="20px",t.style.background="red",t.style.color="white",t.style.padding="15px",t.style.display="none",t.style.zIndex="1",document.body.appendChild(t);function o(){fetch("/partials/registration.html").then(i=>i.text()).then(i=>{const M=document.getElementById("registrationModalContainer");M.innerHTML=i;const C=document.getElementById("registrationForm"),$=document.querySelector(".close-icon"),O=function(y){y.preventDefault();const l=document.getElementById("name").value,c=document.getElementById("email").value,s=document.getElementById("password").value;if(l&&c&&s){console.log("User data:",{name:l,email:c,password:s});const _={name:l,email:c,password:s};localStorage.setItem("userData",JSON.stringify(_)),h()}else A()},A=function(){const y=document.getElementById("name").value,l=document.getElementById("email").value,c=document.getElementById("password").value,s=[];y||s.push("Name"),l||s.push("Email"),c||s.push("Password"),t.textContent=`Please fill in the following fields: ${s.join(", ")}`,t.style.display="block",setTimeout(function(){t.style.display="none"},1e4)};C.addEventListener("submit",O),$.addEventListener("click",function(){t.style.display="none",h()})}).catch(i=>console.error("Error loading registration content:",i))}function h(){const i=document.getElementById("registrationModalContainer");i.innerHTML=""}});const k=document.querySelector(".back-to-top");window.addEventListener("scroll",K);k.addEventListener("click",x);function K(){const e=window.pageYOffset,t=document.documentElement.clientHeight;e>t?k.classList.add("back-to-top--show"):k.classList.remove("back-to-top--show")}function x(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(x,0))}
//# sourceMappingURL=commonHelpers.js.map
