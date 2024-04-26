function convertir() {
    var valor = parseFloat(document.getElementById('valor').value);
    var unidad_origen = document.getElementById('unidad_origen').value;
    var unidad_destino = document.getElementById('unidad_destino').value;
    
    // Convertir todas las unidades a gramos primero
    var valor_en_gramos = convertirAGramos(valor, unidad_origen);
    
    // Convertir de gramos a la unidad de destino
    var resultado = convertirDesdeGramos(valor_en_gramos, unidad_destino);
    
    document.getElementById('resultado').value = resultado;
}

function convertirAGramos(valor, unidad) {
    switch(unidad) {
        case 'my': return valor * 1000000000; // 1 miriagramo = 1,000,000 g
        case 'kg': return valor * 1000; // 1 kilogramo = 1000 g
        case 'hg': return valor * 100; // 1 hectogramo = 100 g
        case 'dag': return valor * 10; // 1 decagramo = 10 g
        case 'g': return valor;
        case 'dg': return valor / 10; // 1 decigramo = 0.1 g
        case 'cg': return valor / 100; // 1 centigramo = 0.01 g
        case 'mg': return valor / 1000; // 1 miligramo = 0.001 g
        default: return NaN;
    }
}

function convertirDesdeGramos(valor, unidad) {
    switch(unidad) {
        case 'my': return valor / 1000000000; // 1 miriagramo = 1,000,000 g
        case 'kg': return valor / 1000; // 1 kilogramo = 1000 g
        case 'hg': return valor / 100; // 1 hectogramo = 100 g
        case 'dag': return valor / 10; // 1 decagramo = 10 g
        case 'g': return valor;
        case 'dg': return valor * 10; // 1 decigramo = 0.1 g
        case 'cg': return valor * 100; // 1 centigramo = 0.01 g
        case 'mg': return valor * 1000; // 1 miligramo = 0.001 g
        default: return NaN;
    }
}
