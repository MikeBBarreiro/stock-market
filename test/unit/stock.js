
/*jshint expr:true*/
/*global describe, it*/
'use strict';

 var expect = require('chai').expect;
var Stock = require('../../app/models/stock.js');

describe('Stock', function(){
  describe('constructor', function(){
    it('Should create a new stock object', function(){
      var aapl = new Stock('aApL', '100');

      expect(aapl).to.be.instanceof(Stock);
      expect(aapl.symbol).to.equal('AAPL');
      expect(aapl.count).to.equal(100);
      expect(aapl.price).to.equal(0);
      });
    });
  describe('.getQuote', function(){
    it('should get a quote from a webservice', function(done){
      Stock.getQuote('aapl', function(quote){
        expect(quote).to.be.at.least(0);
        done();
  });
  });
  });
});
