
/*jshint expr:true*/
/*global describe, it*/
'use strict';

var expect = require('chai').expect;
var Portfolio = require('../../app/models/portfolio.js');


describe('Portfolio', function(){
  describe('Constructor', function(){
    it('Should show a new stock Portfolio', function(){
      var tech = new Portfolio('Tech Portfolio');
      expect(tech).to.be.instanceof(Portfolio);
      expect(tech.name).to.be.equal('Tech Portfolio');
      expect(tech.stocks).to.be.length(0);

    });
  });
});
