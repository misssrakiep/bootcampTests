describe('countAllFromTown()', function(){
  it('Should return all number plates from Stellies', function(){
    var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
    assert.deepEqual(fromStellies, ['CL 124', 'CL 345', 'CL 341']);
  });
});
