'use strict';


function Portfolio (name){
this.name = name;
this.stocks = [];
}

Portfolio.prototype.addStock = function(stock){
this.stocks.push(stock);
};

module.exports = Portfolio;
