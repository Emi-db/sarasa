var fs = require ("fs")

function listar () {
    let tareas = fs.readFileSync("./tareas.json")
    let arrayTareas = JSON.parse(tareas);
    
    arrayTareas.forEach(function(_arrayTareas){
       console.log(_arrayTareas.titulo)}
    )
    
}
    module.exports = listar;

