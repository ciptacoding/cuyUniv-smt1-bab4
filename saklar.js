// Ruang Tamu
function saklarLiving() {
  saklar1.checked == true ? lampu1.setAttribute("src", "assets/on.gif") : lampu1.setAttribute("src", "assets/off.gif");

  saklar2.checked == true ? lampu2.setAttribute("src", "assets/on.gif") : lampu2.setAttribute("src", "assets/off.gif");

  saklar3.checked == true ? lampu3.setAttribute("src", "assets/on.gif") : lampu3.setAttribute("src", "assets/off.gif");

  saklar4.checked == true ? lampu4.setAttribute("src", "assets/on.gif") : lampu4.setAttribute("src", "assets/off.gif");
}
function saklarLivingRoomAll() {
  for (let i = 0; i < lampuLivingAll.length; i++) {
    saklarLivingAll.checked == true ? lampuLivingAll[i].setAttribute("src", "assets/on.gif") : lampuLivingAll[i].setAttribute("src", "assets/off.gif");
  }
}

// kamar tidur
function saklarBed() {
  saklar5.checked == true ? lampu5.setAttribute("src", "assets/on.gif") : lampu5.setAttribute("src", "assets/off.gif");

  saklar6.checked == true ? lampu6.setAttribute("src", "assets/on.gif") : lampu6.setAttribute("src", "assets/off.gif");
}
function saklarBedRoomAll() {
  for (let i = 0; i < lampuBedAll.length; i++) {
    saklarBedAll.checked == true ? lampuBedAll[i].setAttribute("src", "assets/on.gif") : lampuBedAll[i].setAttribute("src", "assets/off.gif");
  }
}

// ruang makan
function saklarDining() {
  saklar7.checked == true ? lampu7.setAttribute("src", "assets/on.gif") : lampu7.setAttribute("src", "assets/off.gif");
}

// ruang keluarga
function saklarFamilyRoom() {
  saklar8.checked == true ? lampu8.setAttribute("src", "assets/on.gif") : lampu8.setAttribute("src", "assets/off.gif");

  saklar9.checked == true ? lampu9.setAttribute("src", "assets/on.gif") : lampu9.setAttribute("src", "assets/off.gif");

  saklar10.checked == true ? lampu10.setAttribute("src", "assets/on.gif") : lampu10.setAttribute("src", "assets/off.gif");
}
function saklarFamilyRoomAll() {
  for (let i = 0; i < lampuFamilyAll.length; i++) {
    saklarFamilyAll.checked == true ? lampuFamilyAll[i].setAttribute("src", "assets/on.gif") : lampuFamilyAll[i].setAttribute("src", "assets/off.gif");
  }
}

const lampu1 = document.getElementById("lampu1");
const lampu2 = document.getElementById("lampu2");
const lampu3 = document.getElementById("lampu3");
const lampu4 = document.getElementById("lampu4");
const lampu5 = document.getElementById("lampu5");
const lampu6 = document.getElementById("lampu6");
const lampu7 = document.getElementById("lampu7");
const lampu8 = document.getElementById("lampu8");
const lampu9 = document.getElementById("lampu9");
const lampu10 = document.getElementById("lampu10");

const saklar1 = document.getElementById("switch1");
const saklar2 = document.getElementById("switch2");
const saklar3 = document.getElementById("switch3");
const saklar4 = document.getElementById("switch4");
const saklar5 = document.getElementById("switch5");
const saklar6 = document.getElementById("switch6");
const saklar7 = document.getElementById("switch7");
const saklar8 = document.getElementById("switch8");
const saklar9 = document.getElementById("switch9");
const saklar10 = document.getElementById("switch10");

const lampuLivingAll = document.querySelectorAll(".living-room img");
const lampuBedAll = document.querySelectorAll(".bedroom img");
const lampuFamilyAll = document.querySelectorAll(".family-room img");

const saklarLivingAll = document.getElementById("switchAllLivingRoom");
const saklarBedAll = document.getElementById("switchAllBedRoom");
const saklarFamilyAll = document.getElementById("switchAllFamilyRoom");
