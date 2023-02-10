
var wordList = ["APRENDE", "HACE", "CREA", "ENSEÑA"];
var point = 0;

function changeText(){
  $("#text-hero-variable").text(wordList[point]);
  if(point < wordList.length){
    point++;
  }
  else{
    point=0;
  }
  setTimeout(changeText, 2000);
}
changeText();