describe('replacer', function(){
  it('is able to find a word in a string and replace it', function() {
    expect(replacer('hello world', 'hello', 'bye')).to.equal('bye world')
  });

  it('is able to find multiple same words and replace all of them', function(){
    expect(replacer('blue green blue red blue purple', 'blue', 'yellow')).to.equal('yellow green yellow red yellow purple')
  })

});
