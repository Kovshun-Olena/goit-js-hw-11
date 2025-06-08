import{a as d,S as f,i as c}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p="50702962-7cd53856c0773f25b2e4cfafa",g="https://pixabay.com/api/";async function m(n){const t={key:p,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(g,{params:t})).data.hits}document.querySelector(".gallery");const y=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function L(n){return n.map(({webformatURL:t,largeImageURL:s,tags:o,likes:e,views:r,comments:i,downloads:u})=>`
        <div class="card">
          <a href="${s}">
            <img src="${t}" alt="${o}" loading="lazy" />
          </a>
          <div class="info">
            <p><strong>Likes</strong> ${e}</p>
            <p><strong>Views</strong> ${r}</p>
            <p><strong>Comments</strong> ${i}</p>
            <p><strong>Downloads</strong> ${u}</p>
          </div>
        </div>
      `).join("")}function q(){y.classList.add("hidden")}const a=document.querySelector("form"),l=document.querySelector(".gallery");a.addEventListener("submit",async n=>{var s;n.preventDefault();const t=(s=a.elements["search-text"])==null?void 0:s.value.trim();if(!t){c.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"});return}try{const o=await m(t);o.length===0&&(c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight"}),l.innerHTML=""),l.innerHTML=L(o),h.refresh(),a.reset()}catch(o){console.error("Error fetching images:",o)}finally{q()}});
//# sourceMappingURL=index.js.map
