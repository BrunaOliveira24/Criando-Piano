const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keyCheck = document.querySelector(".keys-check input");


let mapedKeys = [];
let audio = new Audio("src/tunes/A.wav");
const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(()=>{
        clickedKey.classList.remove("active");

    },150);

};


pianoKeys.forEach((key)=>{
    key.addEventListener("click",()=> playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
    
});

document.addEventListener("keydown", (E) => {
    const key = E.key.toUpperCase(); 
    if (mapedKeys.includes(key)) {  
        playTune(key);
    }
});

const handleVolume = (E) =>{
    audio.volume = E.target.value
   
}


const showHideKeys = () => {
    pianoKeys.forEach((key) => 
        key.classList.toggle("hide"));
  };

  volumeSlider.addEventListener("input", handleVolume);
  
  keysCheck.addEventListener("click", showHideKeys);

