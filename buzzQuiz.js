

"use strict";

// When clicking checkbox, add 20 to learn language variable

var learnHebrew=0;
var learnFrench=0;
var learnChinese=0;


var addHebrew=function(){
  learnHebrew+=20;

};

var addFrench=function(){
    learnFrench+=20;

};

var addChinese=function(){
    learnChinese+=20;

};

//sort functions

var langArr=[addHebrew().value,addFrench().value,addChinese().value];
var sortedFunctions=function () {
    langArr.sort();
    var largest=langArr[2];
};


// print the variable with the highest number

var showAnswer=function(){
    alert("you should learn ");
};

