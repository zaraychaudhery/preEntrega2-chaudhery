const tratamientos=[
    {
        id: 1,
        nombre: "Peeling",
        imagen: "https://static.wixstatic.com/media/03710f_17362967f2d1428693b833e44fa73482~mv2.jpg/v1/fill/w_521,h_472,al_c,lg_1,q_80,enc_auto/Peeling%20qu%C3%ADmico.jpg",
        precio: 50000,
        stock: 20,
    },



    {
        id: 2,
        nombre: "Microblading",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQj6vWHGb9juc0L4nUiSjmqiLIHMrsDdnJKA&s",
        precio: 100000,
        stock: 10,
    },



    {
        id: 3, 
        nombre: "Extensiones Pestañas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdNNqiGyf3DceugDNESYtObpZ0XFpt6ORbHg&s",
        precio: 25000,
        stock: 5,
    },
];

const agregarTratamientos=({id, nombre, precio, imagen, stock})=>{
    const id = tratamientos.length + 1; //
    tratamientos.push({id, nombre,precio,imagen,stock});
}

const mostrarTratamientos =()=> {
    let mensajeInformacion = "";
    for (let tratamiento of tratamientos ){
        mensajeInformacion+=
      `ID : ${tratamiento.id}
    nombre: ${tratamiento.nombre}
    precio: ${tratamiento.precio}
    imagen: ${tratamiento.imagen}
    stock: ${tratamiento.stock}
    `
    }
    console.log (mensajeInformacion);
}

const solicitarInformaciondeltratamientos=()=>{
    let nombreTratamiento = prompt ("Ingresa nombre del tratamiento");
    let imagen = prompt ("Ingresa URL de la imagen");
    let precioDeltratamiento = parseFloat (prompt("Ingresa el precio"));
    let stock = parseInt (prompt("Ingresa cantidad de Tratamiento"));
    if (nombreTratamiento && !isNaN(precioDeltratamiento) && imagen && !isNaN (stock)){
        return {
            nombre: nombreTratamiento, precio: precioDeltratamiento, imagen, stock};
        }
        else{
            alert("Ingresa datos válidos");
        }
    };


const elimitarTratamientos=(nombre)=>{
    const indice = tratamientos.findIndex((tratamiento) => tratamiento.nombre === nombre);
    if (indice !== -1) {
        tratamientos.splice(indice, 1);
        console.log(`producto ${nombre} eliminado exitosamente`);
        mostrarTratamientos(); 
    } else {
        alert (`producto ${nombre} no encontrado` )
    }
};

const promocionTratamientos=(precioMaximo)=>{
    const promocionTratamientos = tratamientos.filter(
        (tratamiento) => tratamiento.precio< precioMaximo
    );
    if(promocionTratamientos.length > 0){
        console.log("Tratamientos en promoción." + precioMaximo + ":");
      
        promocionTratamientos.map((tratamiento)=> {
            console.log(tratamiento.nombre);
        });
    }
    else {
    {console.log("No existe promoción para :"+ precioMaximo)};
    }
};

const main=()=> {
    let opcion = "";

    while (opcion !== "5"){
        opcion = prompt (
            "selecciona una opción: \n1. Agregar Tratamiento \n.2 Ver Tratamiento \n.3 Eliminar tratamiento \n4. Tratamiento en promocion \n.5 Salir"
        );
        switch (opcion){
            case "1":
                const nuevoTratamiento = solicitarInformaciondeltratamientos ();
                if (nuevoTratamiento){
                agregarTratamientos (nuevoTratamiento)};
                break;
                case "2":
                 mostrarTratamientos();
                 break;
                 case "3":
                 const tratamientoAeliminar = prompt ("Ingresa tratamiento a eliminar");
                 elimitarTratamientos (tratamientoAeliminar);
                 break; 
                 case "4":
                const precioMaximo = parseFloat(
                    prompt("Ingresa el precio máximo"));
                    promocionTratamientos(precioMaximo);
                  break;
                 case "5":
                 console.log("Saliendo");
                 break;
                 default:
                 alert("No válido, ingresa otra opción")
        }
    }
};

main ();