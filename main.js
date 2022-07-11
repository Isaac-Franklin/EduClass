var timermain = document.querySelector("#timer1700");
var testDivFromTop = document.querySelector(".underherosectionB").offsetTop;
var pageHeight = window.innerHeight;
var count = 0;

if (
  document.body.scrollTop > testDivFromTop - pageHeight ||
  document.documentElement.scrollTop > testDivFromTop - pageHeight
) {
  var counter = setInterval(timer, 100);
}

function timer() {
  count = count + 50;
  //   console.log(count);
  if (count >= 1700) {
    clearInterval(counter);
  }
  timermain.innerHTML = count + "K";
}
