'use strict';

console.log('reading js');

/*capture the submit event with an event listener for onclick and a callback function of processForm
 */
document.querySelector('#s').addEventListener('click', processForm);
document.querySelector('#r').addEventListener('click', resetForm);

function processForm(evt) {
  // capture html form inputs
  var homeCountry = document.querySelector('#homeCountry').value;
  var howLong = document.querySelector('#howLong').value;
  var impression = document.querySelector('#impression').value;
  var strain = document.querySelector('#strain').value;

  var myMsg = document.querySelector('#myMsg');
  var msgSection = document.querySelector('#msgSection');

  myMsg.innerHTML =
    'Hi, I am an immigrant from ' +
    homeCountry + ' ,and I have been in United States about ' +
    howLong + ' when I came here first I felt ' + impression +
    ' I feel strain from the effort to adapt to the new culture ' +
    strain;

  msgSection.className = 'show';

  evt.preventDefault();
}

function resetForm() {
  msgSection.className = "hide";
}
