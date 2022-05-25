window.addEventListener('load',()=>{
let musicSources=document.querySelector("#musicSources");
musicSources.addEventListener('click', musicTarget=(e)=>{

if(e.target.tagName.toLowerCase()==='li'){

if(document.querySelector(".musicSpan")){
    document.querySelector(".musicSpan").remove();
}

if(document.querySelector("audio")){
    document.querySelector("audio").remove();
}

let target=e.target;
const pn=target.innerText;
let span=document.createElement('span')
span.className="musicSpan";
span.innerHTML="4";
target.appendChild(span);
playMusic(pn);
}

})

})

function playMusic(a){
    let myAudio= document.createElement("audio");
    myAudio.setAttribute('src','/sources/'+a+'.mp3');
    myAudio.setAttribute('controls',"controls");
 
    bottom.appendChild(myAudio);
    myAudio.play();
}

function randomPlay(a){
    let num=Math.floor(Math.random()*6);
    let randomLi=document.querySelectorAll("li")[num];
    randomLi.click();
}

document.getElementById("random").addEventListener('click',randomPlay);