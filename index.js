function getFirstSelector(selector){
  return document.querySelector(`${selector}`);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}



function increaseRankBy(n){
  
     }

      

      

function deepestChild(){
  var gnode = document.getElementById('#grand-node');
  var c = gnode.getElementByTagName('div');
  
  for(var i =0; i > c.length; i++){
    
    if(c[i].innerHTML === "boo!"){
      return c[i];
    }
    
  }
}