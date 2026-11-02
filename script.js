const menuButton=document.querySelector("#menuButton"),navigation=document.querySelector("#navigation");
menuButton.addEventListener("click",()=>{const open=navigation.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(open));menuButton.textContent=open?"×":"☰";});
navigation.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{navigation.classList.remove("open");menuButton.setAttribute("aria-expanded","false");menuButton.textContent="☰";}));
document.querySelector("#year").textContent=new Date().getFullYear();
const viewer=document.querySelector("#viewer"),photo=document.querySelector("#viewerPhoto");
function closeViewer(){viewer.hidden=true;photo.src="";document.body.style.overflow="";}
document.querySelectorAll(".marquee button").forEach(b=>b.addEventListener("click",()=>{photo.src=b.dataset.image;photo.alt=b.querySelector("img").alt;viewer.hidden=false;document.body.style.overflow="hidden";}));
document.querySelector("#viewerClose").addEventListener("click",closeViewer);
viewer.addEventListener("click",e=>{if(e.target===viewer)closeViewer();});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!viewer.hidden)closeViewer();});
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("show");io.unobserve(x.target);}}),{threshold:.15});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
