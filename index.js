'use strict';
const fnRegex = /^function(?:.+)?(?:\s+)?\((.+)?\)(?:\s+|\n+)?\{(?:\s+|\n+)?((?:.|\n)+)\}$/m;
module.exports = function strToFunction(fnString){
  let fnMetadata = fnRegex.exec(fnString);
  let args = [];
  let fnArgs = fnMetadata[1];
  if (fnArgs){
    fnArgs.split(',').forEach((item) => { 
      args.push(item.trim()); 
    });
  }
  args.push(fnMetadata[2]);
  return new Function(...args);
};