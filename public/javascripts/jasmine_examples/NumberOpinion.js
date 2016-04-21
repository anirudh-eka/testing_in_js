function NumberOpinion() {
}
NumberOpinion.prototype.isANumberILike = function(num) {
  if(num == 12){
    throw new Error("12 shouldnt be a number");
  }
  return this.__isDivisibleBy3(num);
};
NumberOpinion.prototype.getLuckyNumber = function() {
  return 18;
};

NumberOpinion.prototype.getRandomAcceptableNumber = function() {
  while(true) {
    var num = Math.floor(Math.random() * 100);
    if (this.__isDivisibleBy3(num) && num % 2 == 0){
      return num
    }
  }
};

NumberOpinion.prototype.__isDivisibleBy3 = function(num) {
  return num % 3 == 0;
};
