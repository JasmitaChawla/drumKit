//listen for key down event
window.addEventListener('keydown', function(e){
  //console.log(e);

  //ES6 template literals (strings)
  //get audio track for corresponding key
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //get key
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  console.log(audio);

  //if a key with no audio element is pressed, don't run function
  if(!audio){
    return;
  }
  audio.currentTime = 0; //rewind audio so it restarts everytime a key is pressed
  audio.play(); //play audio

  key.classList.toggle("playing");


});
