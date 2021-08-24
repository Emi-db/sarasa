let fs = require("fs");
const listar = require("./listartareas.js");




//console.log(tareasJson)


switch (process.argv[2]) {
    case "listar":
        console.log(listar());
        break;
    case undefined:
        console.log("Atención")
        break;
    default: 
        console.log("Dale maestro")
        break;
}