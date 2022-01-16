'use strict';

module.exports = function (msg){
    //debugger;
    if(NODE_ENV == 'development'){
        console.log(`Hello ${msg}`);
    }
    alert('Hello!!!');
    
};