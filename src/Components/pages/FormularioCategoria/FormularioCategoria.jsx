import { useState } from "react";

export function FormularioCategoria() {
  const [descipcionCategoria, setDescripcionCategoria] = useState("");
  const [nombreCategoria, setNombreCategoria] = useState("");

  function ProcesarFormulario(evento) {
    evento.preventDefault();
    let datosCategoria = {
      decripcion: descipcionCategoria,
      nombre: nombreCategoria,
    };
    console.log(datosCategoria);
  }

  return (
    <>
      <br />
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h3>Registro de categoria</h3>
            <form
              className="p-5 border rounded shadow"
              onSubmit={ProcesarFormulario}
            >
              <div className="row mt-3">
                <div className="col-12 col-md-6">
                  <label className="form-label">Descripcion: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={descipcionCategoria}
                    onChange={function (evento) {
                      setDescripcionCategoria(evento.target.value);
                    }}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Nombre: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={nombreCategoria}
                    onChange={function (evento) {
                      setNombreCategoria(evento.target.value);
                    }}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-outline-success my-3 w-100"
              >
                Registrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}