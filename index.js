import{a as v,S,i as c}from"./assets/vendor-C1DvvBV_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const q="57649118-62b94d4ad4ce8d06ecb5f28ce";async function m(s,t=1){return(await v.get("https://pixabay.com/api/",{params:{key:q,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const f=document.querySelector(".gallery"),g=document.querySelector(".loader"),P=new S(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const t=s.map(({webformatURL:o,largeImageURL:l,tags:e,likes:r,views:i,comments:L,downloads:w})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${l}">
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
              ${i}
            </p>
            <p class="info-item">
              <b>Comments</b>
              ${L}
            </p>
            <p class="info-item">
              <b>Downloads</b>
              ${w}
            </p>
          </div>
        </li>
      `).join("");f.insertAdjacentHTML("beforeend",t),P.refresh()}function $(){f.innerHTML=""}function h(){g.classList.add("is-visible")}function p(){g.classList.remove("is-visible")}const b=document.querySelector(".form"),n=document.querySelector(".load-more");let a=1,d="",u=0;b.addEventListener("submit",O);n.addEventListener("click",x);async function O(s){if(s.preventDefault(),d=s.currentTarget.elements.searchText.value.trim(),d===""){c.error({message:"Please enter a search query!"});return}a=1,$(),h();try{const t=await m(d,a);if(t.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!"}),n.classList.add("is-hidden");return}u=t.totalHits,y(t.hits),t.hits.length<15||a*15>=u?n.classList.add("is-hidden"):n.classList.remove("is-hidden")}catch{c.error({message:"Something went wrong. Please try again!"})}finally{p()}b.reset()}async function x(){a+=1,h();try{const s=await m(d,a);y(s.hits),(a*15>=u||s.hits.length<15)&&n.classList.add("is-hidden");const t=document.querySelector(".gallery-item");if(t){const{height:o}=t.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}}catch{c.error({message:"Something went wrong. Please try again!"})}finally{p()}}
//# sourceMappingURL=index.js.map
