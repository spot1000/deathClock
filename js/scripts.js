var playTime = 2

var playerOne = {
  'name':'Player One',
  'hours':playTime/2,
  'minutes':0,
  'seconds':0
}

var playerTwo = {
  'name':'Player Two',
  'hours':playTime/2,
  'minutes':0,
  'seconds':0
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

$('.start1').click(function() {
  var player1 = setInterval(function() {
    myTimer(player1, playerOne, '.timerOne')
  }, 1000);
  $('.timerOne').html(playerOne.hours + ' : ' + displayTime(playerOne.minutes) + ' : ' + displayTime(playerOne.seconds));
  //
  // $('.start1').hide();
  // $('.start2').show();
  // $('.start1').html('End Turn');

  $('.stop1').click(function() {
    clearInterval(player1)
  });
});

$('.start2').click(function() {
  var player2 = setInterval(function() {
    myTimer(player2, playerTwo, '.timerTwo')
  }, 1000);
  $('.timerTwo').html(playerTwo.hours + ' : ' + displayTime(playerTwo.minutes) + ' : ' + displayTime(playerTwo.seconds));
  // $('.start2').hide();
  // $('.start1').show();

  $('.stop2').click(function() {
    clearInterval(player2)
  });
});

$(document).ready(function() {
  $('.timerOne').html(playerOne.hours + ' : ' + displayTime(playerOne.minutes) + ' : ' + displayTime(playerOne.seconds));
  $('.timerTwo').html(playerTwo.hours + ' : ' + displayTime(playerTwo.minutes) + ' : ' + displayTime(playerTwo.seconds));
})
