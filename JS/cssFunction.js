function arrowUp(input, arrow, arrowbox) {
 arrow.style.transform = "rotate(180deg)";
 arrowbox.style.borderRadius = "0 5px 0 0";
 input.style.borderRadius = "5px 0 0 0";
}

function arrowDown(input, arrow, arrowbox) {
 arrow.style.transform = "rotate(360deg)";
 arrowbox.style.borderRadius = "0 5px 5px 0";
 input.style.borderRadius = "5px 0 0 5px";
}

function closeInputListe(arrowBoxName, listeName) {
 arrowBoxName.addEventListener("click", function () {
  listeName.style.display = "none";
  listeName.innerHTML = " ";
 });
}
