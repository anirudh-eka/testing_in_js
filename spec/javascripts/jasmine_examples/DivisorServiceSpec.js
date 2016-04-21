describe("DivisorService", function() {
  var divisorService;
  
  beforeEach(function(){
    divisorService = new DivisorService();
  });


  describe("isDivisibleBy3", function(){
    it("should return true when number is divisible by 3", function(){
      var result = divisorService.isDivisibleBy3(9);
      expect(result).toBeTruthy();
    });
    it("should return false when number is not divisible by 3", function(){
      var result = divisorService.isDivisibleBy3(10);
      expect(result).toBeFalsy();
    });
  });
});
