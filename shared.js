var backdrop = document.querySelector('.backdrop');

var selectPlanButton = document.querySelectorAll('.plan button');

console.log(selectPlanButton);

for (var i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener('click', function() {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
  });
}