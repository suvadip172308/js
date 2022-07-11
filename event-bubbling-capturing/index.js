document.addEventListener('click', (event) => {
    console.log('Execute DOCUMENT');
  }, true);

document.getElementById('grandparent')
  .addEventListener('click', (event) => {
    console.log('Execute GRAND-PARENT');
  }, true);

document.getElementById('parent')
  .addEventListener('click', (event) => {
    console.log('Execute PARENT');
    //event.stopPropagation();
  }, false);

document.getElementById('child')
  .addEventListener('click', (event) => {
    console.log('Execute CHILD');
    //event.stopPropagation();
  }, true);