function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div.target')
}

function deepestChild(){
  let children = [];
  children = document.getElementById('grand-node').querySelectorAll('div') 
  return children[children.length-1]
}

function increaseRankBy(n){
  
}