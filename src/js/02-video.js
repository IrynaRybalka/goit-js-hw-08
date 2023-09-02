import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const time_key = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);
 

const getCurrentTime = function (currentTime) {
  const seconds = currentTime.seconds;
  localStorage.setItem(time_key, JSON.stringify(seconds));
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(time_key)) || 0);
