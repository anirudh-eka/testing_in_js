describe("NumberOpinion", function() {
  var numberOpinion;

  beforeEach(function() {
    numberOpinion = new NumberOpinion();
  });

  describe("isANumberILike", function(){
    it("should return true when number is divisible by 3", function() {
      var result = numberOpinion.isANumberILike(3);
      expect(result).toBeTruthy();
    });

    it("should return false when number is not divisible by 3", function() {
      var result = numberOpinion.isANumberILike(8);
      expect(result).toBeFalsy();
    });

    it("should throw exception when number is 12", function(){
      var errorIsThrown = false;
      try {
        numberOpinion.isANumberILike(12);
      }
      catch(error){
        errorIsThrown = true;
      }

      expect(errorIsThrown).toBeTruthy();
    });
  });

  describe("getLuckyNumber", function(){
    it("should return 18", function(){
      var result = numberOpinion.getLuckyNumber();
      expect(result == 18).toEqual(true);
    });
  });
  
  describe("getRandomAcceptableNumber", function(){
    it("should return a number that is divisible by 3 and even", function(){
      var result = numberOpinion.getRandomAcceptableNumber();
      expect(result % 2).toEqual(0);
      expect(result % 3).toEqual(0);
    });
  });

  describe("__isDivisibleBy3", function(){
    it("should return true when number is divisible by 3", function(){
      var result = numberOpinion.__isDivisibleBy3(9);
      expect(result).toBeTruthy();
    });
    it("should return false when number is not divisible by 3", function(){
      var result = numberOpinion.__isDivisibleBy3(10);
      expect(result).toBeFalsy();
    });
  });
});
