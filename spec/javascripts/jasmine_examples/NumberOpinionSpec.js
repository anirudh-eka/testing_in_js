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
      var isANumberILikeCalledWith12 = function() {
        numberOpinion.isANumberILike(12);
      }

      expect(isANumberILikeCalledWith12).toThrow();
    });
  });

  describe("getLuckyNumber", function(){
    it("should return 18", function(){
      var result = numberOpinion.getLuckyNumber();
      expect(result).toEqual(18);
    });
  });
  
  describe("getRandomAcceptableNumber", function(){
    it("should return a number that is divisible by 3 and even", function(){
      var result = numberOpinion.getRandomAcceptableNumber();
      expectToBeDivisibleBy3AndEven(result);
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

var expectToBeDivisibleBy3AndEven = function(result) {
      expect(result % 2).toEqual(0);
      expect(result % 3).toEqual(0);
}
