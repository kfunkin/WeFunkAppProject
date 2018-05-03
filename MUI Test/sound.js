/**
 * @Author: alcwynparker
 * @Date:   2018-05-01T16:30:38+01:00
 * @Last modified by:   alcwynparker
 * @Last modified time: 2018-05-01T17:02:58+01:00
 */

(function(window, document, undefined){

  // global vars
  var drumSound;
  //var drumTrigger;

  var synthSound;
  var synthTrigger;

  var keysSound;
  var keysTrigger;

  var bassSound;
  var bassTrigger;

  // init drums
  drumSound = Popcorn('#drums');
  drumSound.autoplay(true);
  drumSound.loop(true);

  //drumTrigger = document.getElementById('drumTrigger');
  // add event listner for drum trigger
  //drumTrigger.addEventListener('click', function(){
    // toggle playback
    //drumSound.paused() ? drumSound.play() : drumSound.pause();
  //);

  // init synth
  /*synthSound = Popcorn('#synth');
  synthSound.loop(true);
  synthTrigger = document.getElementById('synthTrigger');
  // add event listener for synth trigger
  synthTrigger.addEventListener('click', function(){
    synthSound.paused() ? synthSound.play() : synthSound.pause();
  });*/

  // init keys
  keysSound = Popcorn('#keys');
  keysSound.loop(true);
  keysTrigger = document.getElementById('keysTrigger');
  // add event listener for synth trigger
  keysTrigger.addEventListener('click', function(){
    keysSound.paused() ? keysSound.play() : keysSound.pause();
  });

  // init bass
  bassSound = Popcorn('#bass');
  bassSound.loop(true);
  bassTrigger = document.getElementById('bassTrigger');
  // add event listener for bassTrigger
  bassTrigger.addEventListener('click', function(){
    bassSound.paused() ? bassSound.play() : bassSound.pause();

  })

})(window, document);
