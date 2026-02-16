import{a as c,S as f,i as n}from"./assets/vendor-F1LeQrrD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/",m="54677312-885a7f8dc2d54d5a2c95924bb";c.defaults.baseURL=d;function p(s){return c.get("",{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),g=new f(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function h(s=[]){const o=s.map(t=>`<li class="gallery-item">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img
      class="gallery-image"
      src="${t.webformatURL}"
      data-source="${t.largeImageURL}"
      alt="${t.tags}"
    />
  </a>
  <div class="gallery-info">
  <p class="info-item"><b>Likes:</b> ${t.likes}</p>
  <p class="info-item"><b>Viewes:</b> ${t.views}</p>
  <p class="info-item"><b>Comments:</b> ${t.comments}</p>
  <p class="info-item"><b>Downloads</b> ${t.downloads}</p>
</div>
</li>
`).join("");l.insertAdjacentHTML("beforeend",o),g.refresh()}function y(){l.innerHTML=""}function b(){u.classList.remove("hidden")}function L(){u.classList.add("hidden")}const S=document.querySelector(".form");S.addEventListener("submit",w);function w(s){s.preventDefault();const o=s.currentTarget,a=new FormData(o).get("search-text").trim();a&&(o.reset(),b(),y(),p(a).then(e=>{if(e.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",iconUrl:iconError,messageSize:"16",maxWidth:432,pauseOnHover:!0});return}h(e.hits)}).catch(e=>{console.error("Error fetching images:",e),n.error({title:"Error",message:"Failed to fetch images. Please try again later!",position:"topRight",timeout:5e3})}).finally(()=>{L()}))}
//# sourceMappingURL=index.js.map
