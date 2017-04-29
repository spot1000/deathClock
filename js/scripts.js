var playTime = 2

var playerOne = {
  'name':'Player One',
  'hours':playTime/2,
  'minutes':0,
  'seconds':0,
  'active':false,
  'paused':false
}

var playerTwo = {
  'name':'Player Two',
  'hours':playTime/2,
  'minutes':0,
  'seconds':0,
  'active':false,
  'paused':false
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

function myTimer(playerClear, playerTimer, timer, stop) {

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
        $(timer).html('Time has run out for ' + playerTimer.name);
        clearInterval(playerClear);
      }
      else {
        $(timer).html(playerTimer.hours + ' : ' + displayTime(playerTimer.minutes) + ' : ' + displayTime(playerTimer.seconds));
      }

      $(stop).click(function() {
        clearInterval(playerClear);
      });
  }
  else {
    return
  }
}

$('.start1').click(function() {
  if (!playerOne.active && !playerTwo.paused) {
    var player1 = setInterval(function() {
      myTimer(player1, playerOne, '.timerOne')
    }, 1000);
    $('.timerOne').html(playerOne.hours + ' : ' + displayTime(playerOne.minutes) + ' : ' + displayTime(playerOne.seconds));
    playerOne.active = true;
    //
    // $('.start1').hide();
    // $('.start2').show();
    // $('.start1').html('End Turn');

    $('.stop1').click(function() {
      clearInterval(player1)
      playerOne.active = false;
    });
  }
});

$('.start2').click(function() {
  if (!playerTwo.active && !playerOne.paused) {
    var player2 = setInterval(function() {
      myTimer(player2, playerTwo, '.timerTwo')
    }, 1000);
    $('.timerTwo').html(playerTwo.hours + ' : ' + displayTime(playerTwo.minutes) + ' : ' + displayTime(playerTwo.seconds));
    playerTwo.active = true;
    // $('.start2').hide();
    // $('.start1').show();

    $('.stop2').click(function() {
      clearInterval(player2)
      playerTwo.active = false
    });
  }
});

$('.pause').click(function() {
  console.log(playerOne.active)
  console.log(playerTwo.active)
  if (playerOne.active) {
    if (!playerOne.paused) {
      playerOne.paused = true;
      $('.pause').text('Restart Game');
    }
    else {
      playerOne.paused = false;
      $('.pause').text('Pause game');
    }
  }
  else {
    if (!playerTwo.paused) {
      playerTwo.paused = true;
      $('.pause').text('Restart game');
    }
    else {
      playerTwo.paused = false;
      $('.pause').text('Pause Game');
    }
  }
});


$(document).ready(function() {
  $('.timerOne').html(playerOne.hours + ' : ' + displayTime(playerOne.minutes) + ' : ' + displayTime(playerOne.seconds));
  $('.timerTwo').html(playerTwo.hours + ' : ' + displayTime(playerTwo.minutes) + ' : ' + displayTime(playerTwo.seconds));
})
