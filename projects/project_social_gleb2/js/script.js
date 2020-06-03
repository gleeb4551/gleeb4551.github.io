"use strict";
function show_rule1() {
	document.getElementById("hider").style.display = "block";
	document.getElementById("hider1").style.display = "none";
    document.getElementById("hider2").style.display = "none";
    document.getElementById("hider3").style.display = "none";
    document.getElementById("hider4").style.display = "none";
    document.getElementById("hider5").style.display = "none";
    document.getElementById("hider6").style.display = "none";
    document.getElementById("hider7").style.display = "none";
    document.getElementById("hider8").style.display = "none";
}
function show_rule2(){
	document.getElementById("hider").style.display = "none";
	document.getElementById("hider1").style.display = "block";
    document.getElementById("hider2").style.display = "none";
    document.getElementById("hider3").style.display = "none";
    document.getElementById("hider4").style.display = "none";
    document.getElementById("hider5").style.display = "none";
    document.getElementById("hider6").style.display = "none";
    document.getElementById("hider7").style.display = "none";
    document.getElementById("hider8").style.display = "none";
}
function show_rule3(){
    document.getElementById("hider").style.display = "none";
    document.getElementById("hider1").style.display = "none";
    document.getElementById("hider2").style.display = "block";
    document.getElementById("hider3").style.display = "none";
    document.getElementById("hider4").style.display = "none";
    document.getElementById("hider5").style.display = "none";
    document.getElementById("hider6").style.display = "none";
    document.getElementById("hider7").style.display = "none";
    document.getElementById("hider8").style.display = "none";
}
function show_rule4(){
    document.getElementById("hider").style.display = "none";
    document.getElementById("hider1").style.display = "none";
    document.getElementById("hider2").style.display = "none";
    document.getElementById("hider3").style.display = "block";
    document.getElementById("hider4").style.display = "none";
    document.getElementById("hider5").style.display = "none";
    document.getElementById("hider6").style.display = "none";
    document.getElementById("hider7").style.display = "none";
    document.getElementById("hider8").style.display = "none";
}
function show_rule5(){
    document.getElementById("hider").style.display = "none";
    document.getElementById("hider1").style.display = "none";
    document.getElementById("hider2").style.display = "none";
    document.getElementById("hider3").style.display = "none";
    document.getElementById("hider4").style.display = "block";
    document.getElementById("hider5").style.display = "none";
    document.getElementById("hider6").style.display = "none";
    document.getElementById("hider7").style.display = "none";
    document.getElementById("hider8").style.display = "none";
}
function show_rule6(){
    document.getElementById("hider").style.display = "none";
    document.getElementById("hider1").style.display = "none";
    document.getElementById("hider2").style.display = "none";
    document.getElementById("hider3").style.display = "none";
    document.getElementById("hider4").style.display = "none";
    document.getElementById("hider5").style.display = "block";
    document.getElementById("hider6").style.display = "none";
    document.getElementById("hider7").style.display = "none";
    document.getElementById("hider8").style.display = "none";

}
function show_rule7(){
    document.getElementById("hider").style.display = "none";
    document.getElementById("hider1").style.display = "none";
    document.getElementById("hider2").style.display = "none";
    document.getElementById("hider3").style.display = "none";
    document.getElementById("hider4").style.display = "none";
    document.getElementById("hider5").style.display = "none";
    document.getElementById("hider6").style.display = "block";
    document.getElementById("hider7").style.display = "none";
    document.getElementById("hider8").style.display = "none";


}
function show_rule8(){
    document.getElementById("hider").style.display = "none";
    document.getElementById("hider1").style.display = "none";
    document.getElementById("hider2").style.display = "none";
    document.getElementById("hider3").style.display = "none";
    document.getElementById("hider4").style.display = "none";
    document.getElementById("hider5").style.display = "none";
    document.getElementById("hider6").style.display = "none";
    document.getElementById("hider7").style.display = "block";
    document.getElementById("hider8").style.display = "none";

}
function show_rule9(){
    document.getElementById("hider").style.display = "none";
    document.getElementById("hider1").style.display = "none";
    document.getElementById("hider2").style.display = "none";
    document.getElementById("hider3").style.display = "none";
    document.getElementById("hider4").style.display = "none";
    document.getElementById("hider5").style.display = "none";
    document.getElementById("hider6").style.display = "none";
    document.getElementById("hider7").style.display = "none";
    document.getElementById("hider8").style.display = "block";

}
function areaReactangle() {
    let a = document.forma1.t1.value;
    let b = document.forma1.t2.value;
    let c = document.forma1.t3.value;
    let result = ((10*a)+(6.25*b)-(5*c)+5);
    document.forma1.res.value=result;

}
function areaReactangle2() {
    let h = document.forma2.f1.value;
    let k = document.forma2.f2.value;
    let v = document.forma2.f3.value;
    let result2 = ((10*h)+(6.25*k)-(5*v)-161);
    document.forma2.res2.value=result2;

}


var pomodoro = {
    started : false,
    minutes : 0,
    seconds : 0,
    fillerHeight : 0,
    fillerIncrement : 0,
    interval : null,
    minutesDom : null,
    secondsDom : null,
    fillerDom : null,
    init : function(){
      var self = this;
      this.minutesDom = document.querySelector('#minutes');
      this.secondsDom = document.querySelector('#seconds');
      this.fillerDom = document.querySelector('#filler');
      this.interval = setInterval(function(){
        self.intervalCallback.apply(self);
      }, 1000);
      document.querySelector('#work').onclick = function(){
        self.startWork.apply(self);
      };
      document.querySelector('#shortBreak').onclick = function(){
        self.startShortBreak.apply(self);
      };
      document.querySelector('#longBreak').onclick = function(){
        self.startLongBreak.apply(self);
      };
      document.querySelector('#stop').onclick = function(){
        self.stopTimer.apply(self);
      };
    },
    resetVariables : function(mins, secs, started){
      this.minutes = mins;
      this.seconds = secs;
      this.started = started;
      this.fillerIncrement = 200/(this.minutes*60);
      this.fillerHeight = 0;  
    },
    startWork: function() {
      this.resetVariables(25, 0, true);
    },
    startShortBreak : function(){
      this.resetVariables(5, 0, true);
    },
    startLongBreak : function(){
      this.resetVariables(15, 0, true);
    },
    stopTimer : function(){
      this.resetVariables(25, 0, false);
      this.updateDom();
    },
    toDoubleDigit : function(num){
      if(num < 10) {
        return "0" + parseInt(num, 10);
      }
      return num;
    },
    updateDom : function(){
      this.minutesDom.innerHTML = this.toDoubleDigit(this.minutes);
      this.secondsDom.innerHTML = this.toDoubleDigit(this.seconds);
      this.fillerHeight = this.fillerHeight + this.fillerIncrement;
      this.fillerDom.style.height = this.fillerHeight + 'px';
    },
    intervalCallback : function(){
      if(!this.started) return false;
      if(this.seconds == 0) {
        if(this.minutes == 0) {
          this.timerComplete();
          return;
        }
        this.seconds = 59;
        this.minutes--;
      } else {
        this.seconds--;
      }
      this.updateDom();
    },
    timerComplete : function(){
      this.started = false;
      this.fillerHeight = 0;
    }
};
window.onload = function(){
  pomodoro.init();
};
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


