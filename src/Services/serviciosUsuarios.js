import { Await } from "react-router-dom"

export async function registrarUsuario(datosUsuario){
    const URL ='http://localhost:8000/usuarios'
let peticion={
    method:"POST",
        headers:{"Content-Type":"application/jason"},
        body:JSON.stringify(datosEnvio)
    }
    let respuestaInicial=await fetch(URL, peticion)
    let usuarios=await respuestaInicial.json()

    return usuarios
}

export async function buscarUsuario(){

    const URL ='http://localhost:8000/usuarios'

    let peticion={
        method:"GET"
    }

    let respuestaInicial=await fetch(URL, peticion)
    let usuarios=await respuestaInicial.json()

    return usuarios

}
