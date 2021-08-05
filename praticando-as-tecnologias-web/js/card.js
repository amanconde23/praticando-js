// var cardColor = document.querySelectorAll('.card-colors');

// for( var i = 0; i < cardColor.length; i++){
//   cardColor[i].addEventListener('click', function(){
//     // pega a li que esta sendo clicada
//     var card = this.parentNode.parentNode.parentNode;
//     // pega qual cor esta sendo clicada
//     card.dataset.color = this.dataset.color;
//     for( var i = 0; i < cardColor.length; i++){
//       cardColor[i].classList.remove('isActive');
//     }
//     // adicionar classe na cor que esta sendo selecionada
//     this.classList.add('isActive');
//   })
// }

var cardColor = document.querySelectorAll('.card-options');
var cards = document.querySelector('.cards');


cards.addEventListener('click', function(event){
  var colorPicked = event.target;
  var card = document.querySelector('.card');
  var cardContent = card.querySelector('.card-content');

  if(colorPicked.dataset.color){
    card.dataset.color = colorPicked.dataset.color;
    for(var i = 0; i < cardColor.length; i++){
      cardColor[i].classList.remove('isActive');
    }
    colorPicked.classList.add('isActive');
  }

  if(colorPicked.classList.contains('card_delete')){
    card.remove();
  }

  if(colorPicked.classList.contains('card_edit')){
    if(cardContent.getAttribute('contenteditable') == 'false'){
      cardContent.setAttribute('contenteditable', 'true');
      cardContent.focus();
      card.classList.add('isActive')
    }else{
      cardContent.setAttribute('contenteditable', 'false');
      cardContent.blur();
      card.classList.remove('isActive')
    }
  }
})

