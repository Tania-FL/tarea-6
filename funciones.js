function ejercicio1() {
    let productos = ['Tortillas', 'Café', 'Huevos', 'Leche'];
    console.log('Productos iniciales:', productos);
    

    productos.push('Pan', 'Galletas');
    console.log('Productos después de agregar más:', productos);
    
    productos.pop();
    console.log('Productos después de eliminar el último elemento:', productos);
    
    console.log('Lista de productos:');
    productos.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto}`);
    });
}

ejercicio1();


function ejercicio2() {
  
    let estudiante = {
        nombre: 'Tania',
        edad: 26,
        carrera: 'Ingeniería en Computación',
        promedio: 9.5
    };
    
    console.log('Información del estudiante:', estudiante);
    
  
    estudiante.semestre = 2;
    estudiante.universidad = 'Universidad Nacional Autonoma de México';
    
    console.log('Información del estudiante actualizada:', estudiante);
    

    console.log('Claves del objeto:');
    for (let clave in estudiante) {
        console.log(clave);
    }
    
    console.log('Valores del objeto:');
    for (let clave in estudiante) {
        console.log(estudiante[clave]);
    }
}

ejercicio2();
