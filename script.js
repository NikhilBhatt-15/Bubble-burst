clutter = "";

for(let i=0;i<143-7;i++){
    let rn =Math.floor(Math.random()*10);
    clutter+=`<div class="elem">${rn}</div>`;

}
const bpanel = document.querySelector('.bpanel');
bpanel.innerHTML += clutter;