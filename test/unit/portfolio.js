
/*jshint expr:true*/
/*global describe, it*/
'use strict';

var expect = require('chai').expect;
var Portfolio = require('../../app/models/portfolio');
var Stock = require('../../app/models/stock');

describe('Portfolio', function(){
  describe('Constructor', function(){
    it('Should show a new stock Portfolio', function(){
      var tech = new Portfolio('Tech Portfolio');
      expect(tech).to.be.instanceof(Portfolio);
      expect(tech.name).to.be.equal('Tech Portfolio');
      expect(tech.stocks).to.be.length(0);

    });
  });
  describe('.addStock',function(){
    it('Should add stocks to portfolio', function(){
      var tech = new Portfolio('tech');
      var aapl = new Stock('aapl', 100);
      var goog = new Stock('goog', 56);

      tech.addStock(aapl);
      tech.addStock(goog);
      expect(tech.stocks).to.be.length(2);
      
    });
  });
});
