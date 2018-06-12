document.onload = function(e){ 
   var x = document.getElementsByTagName("TITLE");
   x.innerHTML = 'this is title from outer js' 
}

console.log("hello from outer");
