//your JS code here. If required.
function enlargeIt() {
	const para=document.getElementById("status");
	const head=document.createElement("h1");
	head.innerText="Entered Metaverse"
	para.innerText="";
	para.appendChild(head);
}

// const btn=document.getElementById("enterBtn");
// const para=document.getElementById("status");

// btn.addEventListener("click" ,() => {
// 	para.innerText="Entered Metaverse";
// })