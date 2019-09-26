var suits = ["Diamonds","Hearts","Spades","Clubs"];
var ranks = ["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"];

var deck = [];

suits.forEach(function(suit) {
  ranks.forEach(function(rank) {
  	deck.push(card + " of " + suit);
  });
});

deck.forEach(function(card){
  $("ul").append("<li>" + card + "</li>");
});
