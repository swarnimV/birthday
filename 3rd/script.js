const radiosBtns = document.flavorPicker.cakeFlavors;
const chocolate = document.querySelector("#pick-chocolate");
const yellow = document.querySelector("#pick-yellow");
const redVelvet = document.querySelector("#pick-red-velvet");
const birthdayCake = document.querySelector(".birthday-cake");

function selectCake() {
  if (chocolate.checked === true) {
    birthdayCake.classList.add("birthday-cake--chocolate");
    birthdayCake.classList.remove(
      "birthday-cake--yellow",
      "birthday-cake--red-velvet"
    );
  } else if (yellow.checked === true) {
    birthdayCake.classList.add("birthday-cake--yellow");
    birthdayCake.classList.remove(
      "birthday-cake--chocolate",
      "birthday-cake--red-velvet"
    );
  } else if (redVelvet.checked === true) {
    birthdayCake.classList.add("birthday-cake--red-velvet");
    birthdayCake.classList.remove(
      "birthday-cake--chocolate",
      "birthday-cake--yellow"
    );
  }
}

document.addEventListener("DOMContentLoaded", function () {
  for (var i = 0; i < radiosBtns.length; i++) {
    radiosBtns[i].addEventListener("change", function () {
      selectCake();
    });
  }

  // select chocolate by default
  chocolate.checked = true;
  // trigger on change event
  if ("createEvent" in document) {
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("change", false, true);
    chocolate.dispatchEvent(evt);
  } else {
    chocolate.fireEvent("onchange");
  }
});
