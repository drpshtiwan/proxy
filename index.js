const args = require('yargs').argv;
const vistYoutube = require('./functions.js')

const votes = args.views ? args.views : 10;
for(var i = 1; i <= views ; i++) {
    vistYoutube(i);
}


