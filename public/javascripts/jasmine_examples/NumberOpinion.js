function NumberOpinion(service) {
  this.service = service;
}
NumberOpinion.prototype.isANumberILike = function(num) {
  if(num == 12){
    throw new Error("12 shouldnt be a number");
  }
  return this.service.isDivisibleBy3(num);
};
NumberOpinion.prototype.getLuckyNumber = function() {
  return 18;
};

NumberOpinion.prototype.getRandomAcceptableNumber = function() {
  while(true) {
    var num = Math.floor(Math.random() * 100);
    if (this.service.isDivisibleBy3(num) && num % 2 == 0){
      return num
    }
  }
};

