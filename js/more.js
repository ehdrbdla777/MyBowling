function showMore(){
  const hide = document.querySelectorAll('.hide');
  const first = Array.from(hide).slice(0, 5);
  first.forEach(item => {
    item.classList.remove('hide');
  });
  if(hide.length <= 4){
    hideMoreButton();
  }
}

function hideMoreButton(){
  document.getElementById('moreBtn').classList.add('hide');
}
