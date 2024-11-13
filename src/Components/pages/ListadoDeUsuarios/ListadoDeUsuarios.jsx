import { useState,useEffect } from "react";
export function ListadoUsuarios(){

    //Simulando conjundo de datos que vienen del back
    let usuarios=[
        {
            id: 9,
            nombre: "Sebastian Osorio Morales",
            telefono: "3046141703",
            ciudad: "Medellín"
        },
        {
            id: 3,
            nombre: "Alma Marcela Gozo",
            telefono: "3112084495",
            ciudad: "Cali"
        },
        {
            id: 12,
            nombre: "Ana Silva",
            telefono: "200444679",
            ciudad: "Bucaramanga"
        },
        {
            id: 28,
            nombre: "Susana Horia",
            telefono: "314234651",
            ciudad: "Bogotá"
        },
        {
            id: 18,
            nombre: "Elvio Lador",
            telefono: "3046141703",
            ciudad: "San Jeronimo"
        }

    ]

    const[datosAPI, setDatosApi]=useState(null)
    const[estadoCarga, setEstadoCarga]=useState(true)

    //Programo el useEffect para garantizar la llamada al servicio y llamar los datos
    // useEffect(function(){},[
    //     //Se llama al servicio(back)

    //     function(){
    //     //Se carga la variable de estado de los datos de servicio
    //     setDatosApi(usuarios)
    //     //se cambia variable de estado de carga
    //     setEstadoCarga(false)
    //     }
    // ])

    return(
        <>
        <br /> <br /> <br />
        {console.log(usuarios)}
        <h3>LISTADO DE USUARIOS</h3>

        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-3">
            {
            //Renderizando un arreglo de objetos
            usuarios.map(function(usuario){
                return(
                    <div className="col">
                        <div className="card h-100 shadow p-5">
                            <h5>{usuario.nombre}</h5>
                            <h4>Ciudad: {usuario.ciudad}</h4>
                            <h4>Telefono {usuario.telefono}</h4>
                        </div>
                    </div>
                )
            })
        }
            </div>
        </div>

        </>
    )

}