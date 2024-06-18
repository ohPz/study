function showClock() {
  var currentDate = new Date();
  var divClock = document.getElementById('divClock');
  var msg = '';
  if (currentDate.getHours() > 12) {
    //시간이 12보다 크다면 오후 아니면 오전
    msg += '오후 ';
    msg += currentDate.getHours() - 12 + '시 ';
  } else {
    msg += '오전 ';
    msg += currentDate.getHours() + '시 ';
  }

  msg += currentDate.getMinutes() + '분 ';
  msg += currentDate.getSeconds() + '초';

  divClock.innerText = msg;

  if (currentDate.getMinutes() > 58) {
    //정각 1분전부터 빨강색으로 출력
    divClock.style.color = 'red';
  }
  setTimeout(showClock, 1000); //1초마다 갱신
}
