//listen for key down event
window.addEventListener('keydown', playAudio);

function playAudio(e){
  //console.log(e);

  //ES6 template literals (strings)
  //get audio track for corresponding key
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //get key
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  //console.log(audio);

  //if a key with no audio element is pressed, don't run function
  if(!audio){
    return;
  }
  audio.currentTime = 0; //rewind audio so it restarts everytime a key is pressed
  audio.play(); //play audio

  key.classList.add("playing");//add playing class to key element when pressed, to change css

}

//to remove playing class when key is released:
//select all keys, this produces node list of all keys
const keys = document.querySelectorAll(".key");
//console.log(keys);

//have to iterate over each key since this is a node list
//listen on each key for when transition ends
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e){
  //console.log(e);

  //don't run function if there's no transition property
  if(e.propertyName != "transform"){
    return;
  }

  //this is equal to key
  //console.log(this);
  //remove playing class from keys once transition ends
  this.classList.remove("playing");
}
