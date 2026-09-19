import{a as q,S as P,i as a}from"./assets/vendor-C1DvvBV_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const M="57649118-62b94d4ad4ce8d06ecb5f28ce";async function m(o,t=1){return(await q.get("https://pixabay.com/api/",{params:{key:M,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const y=document.querySelector(".gallery"),g=document.querySelector(".loader"),h=document.querySelector(".load-more"),$=new P(".gallery a",{captionsData:"alt",captionDelay:250});function p(o){const t=o.map(({webformatURL:s,largeImageURL:c,tags:e,likes:r,views:n,comments:v,downloads:S})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${c}">
            <img
              class="gallery-image"
              src="${s}"
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
              ${n}
            </p>
            <p class="info-item">
              <b>Comments</b>
              ${v}
            </p>
            <p class="info-item">
              <b>Downloads</b>
              ${S}
            </p>
          </div>
        </li>
      `).join("");y.insertAdjacentHTML("beforeend",t),$.refresh()}function O(){y.innerHTML=""}function b(){g.classList.add("is-visible")}function L(){g.classList.remove("is-visible")}function u(){h.classList.remove("is-hidden")}function d(){h.classList.add("is-hidden")}const w=document.querySelector(".form");let i=1,l="",f=0;w.addEventListener("submit",x);document.querySelector(".load-more").addEventListener("click",T);async function x(o){if(o.preventDefault(),l=o.currentTarget.elements.searchText.value.trim(),l===""){a.error({message:"Please enter a search query!"});return}i=1,O(),d(),b();try{const t=await m(l,i);if(t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}f=t.totalHits,p(t.hits),t.hits.length<15||i*15>=f?(d(),a.info({message:"We're sorry, but you've reached the end of search results."})):u()}catch{a.error({message:"Something went wrong. Please try again!"})}finally{L(),w.reset()}}async function T(){d(),b(),i+=1;try{const o=await m(l,i);p(o.hits),i*15>=f||o.hits.length<15?(d(),a.info({message:"We're sorry, but you've reached the end of search results."})):u();const t=document.querySelector(".gallery-item");if(t){const{height:s}=t.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}}catch{a.error({message:"Something went wrong. Please try again!"}),u()}finally{L()}}
//# sourceMappingURL=index.js.map
