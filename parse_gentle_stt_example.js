// parse_gentle_stt_example.js

var gentleParser = require("./parse_gentle_stt.js")

var demoJson = require("./example/allign.json")


var lines = gentleParser(demoJson)

console.log(lines);