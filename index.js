const kits = ["snara","kick","crash","tom"];

const containerEl = document.querySelector(".container");

kits.forEach((kit) => {
    const btnEl=document.createElement("button");
    btnEl.classList.add("btn");
    btnEl.innerText=kit;
    btnEl.style.backgroundImage="url(img/"+kit+".jpg)";
    containerEl.appendChild(btnEl);
    const audioEl=document.createElement("audio");
    // audioEl.src="sounds/"+kit+".mp3";
    const sourceElement = document.createElement('source');
    sourceElement.type = 'audio/mp3';
    sourceElement.src="sound/"+kit+".mp3"
    //console.log(sourceElement.src);
    audioEl.appendChild(sourceElement)
    containerEl.appendChild(audioEl);
    btnEl.addEventListener("click", () => {
        if (audioEl) {
            audioEl.play();
        }
    });
    
    window.addEventListener("keydown", (event) => {
        if (event.key === kit.slice(0, 1)) {
            if (audioEl) {
                audioEl.play();
            }
            
            // Scale down the button
            btnEl.style.transform = "scale(0.9)";
            
            // Scale back to normal after 100ms
            setTimeout(() => {
                btnEl.style.transform = "scale(1)";
            }, 100);
        }
    });
    
});
