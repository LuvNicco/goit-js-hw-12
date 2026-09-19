import{a as d,S as y,i as n}from"./assets/vendor-C1DvvBV_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="57649118-62b94d4ad4ce8d06ecb5f28ce";function g(s){return d.get("https://pixabay.com/api/",{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new y(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const t=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:r,views:a,comments:f,downloads:m})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${e}"
            />
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              ${r}
            </p>
            <p class="info-item">
              <b>Views</b>
              ${a}
            </p>
            <p class="info-item">
              <b>Comments</b>
              ${f}
            </p>
            <p class="info-item">
              <b>Downloads</b>
              ${m}
            </p>
          </div>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",t),h.refresh()}function L(){c.innerHTML=""}function v(){l.classList.add("is-visible")}function S(){l.classList.remove("is-visible")}const u=document.querySelector(".form");u.addEventListener("submit",q);async function q(s){s.preventDefault();const t=s.currentTarget.elements.searchText.value.trim();if(t===""){n.error({message:"Please enter a search query!"});return}L(),v();try{const o=await g(t);if(o.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}b(o.hits)}catch{n.error({message:"Something went wrong. Please try again!"})}finally{S()}u.reset()}
//# sourceMappingURL=index.js.map
