import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_KEY = 'videoplayer-current-time';
const timeStorage = JSON.parse(localStorage.getItem(TIME_KEY));
console.log(timeStorage);

const player = new Player('vimeo-player');

player.on('play', function () {
  console.log('video is playing');
});

player.on('timeupdate', throttle(onTimeSet, 1000));
function onTimeSet(event) {
  localStorage.setItem(TIME_KEY, JSON.stringify(event));
  //   console.log(time);
}
player
  .setCurrentTime(timeStorage.seconds)
  .then(function (seconds) {
   
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
      
        break;
        default:
        break;
    }
  });
