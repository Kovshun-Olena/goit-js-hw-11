import{a as f,S as g,i as a}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const p="50702962-7cd53856c0773f25b2e4cfafa",m="https://pixabay.com/api/";async function y(s){const r={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(m,{params:r})).data.hits}const h=document.querySelector(".gallery"),u=document.querySelector(".loader"),L=new g(".gallery a",{captionsData:"alt",captionDelay:250});function v(s){return s.map(({webformatURL:r,largeImageURL:n,tags:o,likes:e,views:t,comments:i,downloads:d})=>`
        <div class="card">
          <a href="${n}">
            <img src="${r}" alt="${o}" loading="lazy" />
          </a>
          <div class="info">
            <p><strong>Likes</strong> ${e}</p>
            <p><strong>Views</strong> ${t}</p>
            <p><strong>Comments</strong> ${i}</p>
            <p><strong>Downloads</strong> ${d}</p>
          </div>
        </div>
      `).join("")}function q(){h.innerHTML=""}function S(){u.classList.remove("hidden")}function l(){u.classList.add("hidden")}const c=document.querySelector("form"),b=document.querySelector(".gallery");c.addEventListener("submit",s=>{var n;s.preventDefault();const r=(n=c.elements["search-text"])==null?void 0:n.value.trim();if(!r){a.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"});return}S(),q(),y(r).then(o=>{if(l(),!o.length){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight"});return}b.innerHTML=v(o),L.refresh(),c.reset()}).catch(o=>{l(),a.error({title:"Error",message:"Failed to fetch images.",position:"topRight"}),console.error("Error fetching images:",o)})});
//# sourceMappingURL=index.js.map
