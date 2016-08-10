/*
 * assert-is
 * https://github.com/goliatone/assert-is
 *
 * Copyright (c) 2015 goliatone
 * Licensed under the MIT license.
 */

'use strict';

var is = require('is');
var assert = require('assert');
// https://github.com/tj/better-assert/blob/master/index.js

for(var method in is){
    if(!is.hasOwnProperty(method)) return
    if(typeof is[method] !== 'function') return

    assert[methodName(method)] = (function(_method){
        //TODO: get 'is' method.length, and then pass that
        //to parent, then get last one as meesage
        return function(value, message){
            if(is[_method].call(is, value)) return true;
            if(typeof message === 'function') message();
            else throw new Error(getMessage(_method, typeof value, message));
        }
    })(method);
}

function is(type, value, message){
    var method = methodName(type);
    return assert[method].call(null, value, message);
}

function methodName(name){
    return 'is' + capitalize(name);
}

function capitalize(name){
    return name.charAt(0).toUpperCase() + name.slice(1);
}

function getMessage(method, type, message){
    if(! message) message = 'Expecting [#method#] type, got [#type#] instead.';
    return message.replace(/#method#/g, method).replace(/#type#/g,type);
}


module.exports = assert;
