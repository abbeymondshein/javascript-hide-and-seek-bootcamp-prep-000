function getFirstSelector(selector){
  //returns first element that matches
  let match = document.querySelector(selector);
  return match;
}

function nestedTarget(){
  //Define a function nestedTarget() that pulls a .target out of #nested (# is used for IDs in selectors — but you knew that because you read the docs, right? :) ). (Note that in index.html #nested and .target just happen to be divs. This method should work with arbitrary elements.)
  let targetFound = document.getElementById('nested').querySelector('div.target');
  return targetFound;
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (let i=0; i<lis.length; i++){
    lis[i].innerHTML = (parseInt(i)+1).toString();
  }
}

function deepestChild() {
  //Define a function deepestChild() that pulls out the most deeply nested child element from div#grand-node. (Remember, you can iterate over elements and call querySelector() and querySelectorAll() on them. This is challenging to implement correctly, but not beyond your ability!)
  
  const mostDeeply = document.getElementById('grand-node').querySelectorAll()
}