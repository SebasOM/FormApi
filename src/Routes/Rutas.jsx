import { Routes, Route } from "react-router-dom"
import { Menu } from "../Components/common/Menu/Menu"
import { Home } from "../Components/pages/Home/Home"
import { Usuarios } from "../Components/pages/Usuarios/Usuarios";
import { Gastos } from "../Components/pages/Gastos/Gasto";
import { Ingresos } from "../Components/pages/Ingresos/Ingresos";
import { Categoria } from "../Components/pages/Categoria/Categoria";

export function Rutas(){
    return(
    <>
        <Menu></Menu>
        <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/usuarios" element={ <Usuarios /> } />
        <Route path="/gastos" element={ <Gastos /> } />
        <Route path="/ingresos" element={ <Ingresos /> } />
        <Route path="/categoria" element={ <Categoria /> } />
      </Routes>
    </>
    );
}