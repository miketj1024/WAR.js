var expect = chai.expect;


describe('myFucntion', function() {
    describe('#shuffle', function() {
        it(' it should shuffle cards', function(){
            const input = [1, 2, 3, 4, 5];
            const output = shuffle(...input);
            expect(output).to.not.deep.equal(input);
    });

    it('should thrw an error if array is same as input', function() {
        expect(function() {
            shuffle(...input);
        }).to.throw(Error);
        });
     });
});





