const sideArrows = document.querySelectorAll('.side_arrow');
const aboutList = document.querySelectorAll('.dropdownHead');
const ulsAbout = document.querySelectorAll('.ulAbout');

function rotateImage(index) {
  const arrow = sideArrows[index];
  arrow.classList.toggle('rotate');
}

function removeBorder(index) {
  const aboutItem = aboutList[index];
  aboutItem.classList.toggle('open');
}

function fillContent(index) {
  const aboutUl = ulsAbout[index];
  aboutUl.classList.toggle('showUlAbout');
}

aboutList.forEach((element, index) => {
  element.addEventListener('click', () => {
    rotateImage(index);
    removeBorder(index);
    fillContent(index);
  });
});
