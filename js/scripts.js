var playTime = 4200;
var playerTime = playTime/2;

var playerOne = {
  'name':'Player One',
  'hours':Math.floor(playerTime/(Math.pow(60,2))),
  'minutes':Math.floor(playerTime/60)%60,
  'seconds':playerTime%60,
  'active':false,
  'paused':false,
  'interval': ''
}

var playerTwo = {
  'name':'Player One',
  'hours':Math.floor(playerTime/(Math.pow(60,2))),
  'minutes':Math.floor(playerTime/60)%60,
  'seconds':playerTime%60,
  'active':false,
  'paused':false,
  'interval': ''
}

function reset() {
  playerOne.mintues = 0;
  playerOne.seconds = 0;
  playerTwo.mintues = 0;
  playerTwo.seconds = 0;

}

function displayTime(num) {
  if (num < 10) {
    return '0'+num.toString();
  }
  else {
    return num.toString();
  }
}

function myTimer(playerTimer, timer) {

  if (!playerTimer.paused) {

      playerTimer.seconds--;
      if (playerTimer.seconds < 0) {
        playerTimer.seconds = 59;
        playerTimer.minutes--;
        if (playerTimer.minutes < 0) {
          playerTimer.hours--;
          playerTimer.minutes = 59;
        }
      }
      if (playerTimer.hours == 0 && playerTimer.minutes == 0 && playerTimer.seconds == 0) {
        $(timer).html('Time Up ' + playerTimer.name);
        clearInterval(playerTimer.interval);
      }
      else {
        $(timer).html(playerTimer.hours + ':' + displayTime(playerTimer.minutes) + ':' + displayTime(playerTimer.seconds));
      }
  }
  else {
    return
  }
}

$('.start1').click(function() {
  if (!playerOne.active && !(playerTwo.paused || playerOne.paused)) {
    playerOne.interval = setInterval(function() {
      myTimer(playerOne, '.timerOne')
    }, 1000);
    $('.timerOne').html(playerOne.hours + ':' + displayTime(playerOne.minutes) + ':' + displayTime(playerOne.seconds));
    playerOne.active = true;
    //
    // $('.start1').hide();
    // $('.start2').show();
    // $('.start1').html('End Turn');

    $('.stop1').click(function() {
      clearInterval(playerOne.interval)
      playerOne.active = false;
    });
  }
  else {
    return
  }
});

$('.start2').click(function() {
  if (!playerTwo.active && !(playerTwo.paused || playerOne.paused)) {
    playerTwo.interval = setInterval(function() {
      myTimer(playerTwo, '.timerTwo')
    }, 1000);
    $('.timerTwo').html(playerTwo.hours + ':' + displayTime(playerTwo.minutes) + ':' + displayTime(playerTwo.seconds));
    playerTwo.active = true;
    // $('.start2').hide();
    // $('.start1').show();

    $('.stop2').click(function() {
      clearInterval(playerTwo.interval)
      playerTwo.active = false
    });
  }
  else {
    return
  }
});

function pause() {
  console.log(playerOne.active)
  console.log(playerTwo.active)
  if (playerOne.active) {
    if (!playerOne.paused) {
      playerOne.paused = true;
      $('.pause').text('Resume Game');
    }
    else {
      playerOne.paused = false;
      $('.pause').text('Pause Game');
    }
  }
  else {
    if (!playerTwo.paused) {
      playerTwo.paused = true;
      $('.pause').text('Resume Game');
    }
    else {
      playerTwo.paused = false;
      $('.pause').text('Pause Game');
    }
  }
  $('.pause').blur()
}

$('.pause').click(function(){
  pause()
});

$('.more').mousedown(() => {
  console.log('clicked');
  playTime += 60;
  playerTime = playTime/2;
  console.log(playTime);
  console.log(playerTime);
  $('.time').html('Total Game Time: ' + Math.floor(playTime/(Math.pow(60,2))) + ' hours, ' + Math.floor(playTime/60)%60 + ' minutes');
});

$('.less').click(() => {
  if (playerTime > 30) {
    console.log('clicked');
    playTime -= 60;
    playerTime = playTime/2;
    console.log(playTime);
    console.log(playerTime);
    $('.time').html('Total Game Time: ' + Math.floor(playTime/(Math.pow(60,2))) + ' hours, ' + Math.floor(playTime/60)%60 + ' minutes');
  }
});

$('.start').click(() => {
  playerOne = {
    'name':'Player One',
    'hours':Math.floor(playerTime/(Math.pow(60,2))),
    'minutes':Math.floor(playerTime/60)%60,
    'seconds':playerTime%60,
    'active':false,
    'paused':false
  }

  playerTwo = {
    'name':'Player Two',
    'hours':Math.floor(playerTime/(Math.pow(60,2))),
    'minutes':Math.floor(playerTime/60)%60,
    'seconds':playerTime%60,
    'active':false,
    'paused':false
  }
  if ($('#pOne').val() != '') {
      playerOne.name = $('#pOne').val();
  }
  if ($('#pTwo').val() != '') {
      playerOne.name = $('#pTwo').val();
  }

  $('.timerTwo').html(playerTwo.hours + ':' + displayTime(playerTwo.minutes) + ':' + displayTime(playerTwo.seconds));
  $('.timeselect').hide();
  $('.playerOneName').html(playerOne.name);
  $('.playerTwoName').html(playerTwo.name);
  $('.clock').removeClass('hidden');
  $('.pauseReset').removeClass('hidden');

  $(".start1").click()

});

$('.restart').click(() => {
  playTime = 4200
  $('.timeselect').show()
  $('.clock').addClass('hidden');
  $('.pauseReset').addClass('hidden');
  clearInterval(playerOne.interval);
  clearInterval(playerTwo.interval);
})

$(window).keypress(function(e) {
  if ((e.keyCode == 32) && (playerOne.active || playerTwo.active)) {
    pause();
    console.log('Space pressed');
  }
});




$(document).ready(function() {
  $('.timerOne').html('0 : 00 : 00');
  $('.timerTwo').html('0 : 00 : 00');
  $('.time').html('Total Game Time: ' + Math.floor(playTime/(Math.pow(60,2))) + ' hours, ' + Math.floor(playTime/60)%60 + ' minutes')
})
