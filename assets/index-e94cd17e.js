(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))m(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&m(u)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function m(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const a=document.getElementById("terme-1"),f=document.getElementById("terme-2"),h=document.getElementById("result"),d=document.getElementById("area-operator");document.getElementById("input-terme-1-correction");document.getElementById("input-terme-2-correction");function E(t,e){}const b=new MutationObserver(E),v={childList:!0,subtree:!0};b.observe(a,v);function i(t,e){t.textContent=e.join("").replace(/,/g,"")}const p=()=>{if(s.length>0&&c.length>0&&l){const t=parseFloat(s.join("")),e=parseFloat(c.join(""));let r;switch(d.textContent){case"+":r=t+e;break;case"-":r=t-e;break;case"*":r=t*e;break;case"/":r=t/e;break;default:r="Invalid operator"}console.log(r),h.textContent=r}},g=["+","-","*","/"],I=["=","Enter"];let s=[],c=[],l=!1;const y=[];for(let t=0;t<=9;t++){const e=document.getElementById(`number-${t}`);e&&y.push(e)}y.forEach((t,e)=>{t.addEventListener("click",()=>{console.log(`click ${e}`),l?(c.push(e),console.log(c),i(f,c)):(s.push(e),console.log(s),i(a,s)),document.getElementById("equal").addEventListener("click",()=>{p()})})});g.forEach(t=>{const e=document.getElementById(`operator-${t}`);e&&e.addEventListener("click",()=>{console.log(`button operation ${t}`),l=!0,d.textContent=t})});document.addEventListener("keydown",t=>{const e=t.key;g.includes(e)&&(console.log(e),l=!0,d.textContent=e),!isNaN(e)&&e>=0&&e<=9&&(l?(c.push(parseFloat(e)),console.log(c),i(f,c)):(s.push(parseFloat(e)),console.log(s),i(a,s))),I.includes(e)&&p()});