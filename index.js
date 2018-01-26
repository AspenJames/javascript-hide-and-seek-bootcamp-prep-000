function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target');
}

function deepestChild(){
  let children = [];
  children = document.getElementById('grand-node').querySelectorAll('div'); 
  return children[children.length-1];
}

function increaseRankBy(n){
  let ranks = [];
  ranks = document.getElementsByClassName('ranked-list').querySelectorAll('li');
  for(let i=0;i<ranks.length;i++){
    ranks[i].innerText = parseInt(ranks[i].innerText) + n;
  }
  return
}