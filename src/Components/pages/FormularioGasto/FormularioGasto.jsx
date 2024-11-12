import { useState } from "react";

export function FormularioGasto() {
  const [montoGasto, setMontoGasto] = useState("");
  const [fechaGasto, setFechaGasto] = useState("");
  const [descipcionGasto, setDescripcionGasto] = useState("");
  const [nombreGasto, setNombreGasto] = useState("");

  function ProcesarFormulario(evento) {
    evento.preventDefault();
    let datosGasto = {
      monto: montoGasto,
      fecha: fechaGasto,
      decripcion: descipcionGasto,
      nombre: nombreGasto,
    };
    console.log(datosGasto);
  }

  return (
    <>
      <br />
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h3>Registro de Gasto</h3>
            <form
              className="p-5 border rounded shadow"
              onSubmit={ProcesarFormulario}
            >
              <div className="row mt-3">
                <div className="col-12 col-md-6">
                  <label className="form-label">Monto: </label>
                  <input
                    type="number"
                    className="form-control"
                    value={montoGasto}
                    onChange={function (evento) {
                      setMontoGasto(evento.target.value);
                    }}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Fecha Gasto: </label>
                  <input
                    type="date"
                    className="form-control"
                    value={fechaGasto}
                    onChange={function (evento) {
                      setFechaGasto(evento.target.value);
                    }}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Descripcion: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={descipcionGasto}
                    onChange={function (evento) {
                      setDescripcionGasto(evento.target.value);
                    }}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Nombre: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={nombreGasto}
                    onChange={function (evento) {
                      setNombreGasto(evento.target.value);
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
