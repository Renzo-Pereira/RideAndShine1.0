import { Layout } from "../components/Layout";

const Contacto = () =>{

    return  <Layout>
        <form className="row g-3 needs-validation">
  <div className="col-md-4">
    <label  className="form-label">Nombre</label>
    <input type="text" className="form-control" id="validationCustom01" required></input>
  </div>
  <div className="col-md-4">
    <label  className="form-label">Apellido</label>
    <input type="text" className="form-control" id="validationCustom02" required></input>
  </div>
  <div className="col-md-4">
    <label  className="form-label">Usuario</label>
    <div className="input-group has-validation">
      <span className="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required></input>
    </div>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required></input>
      <label className="form-check-label">
        Acepto los terminos de condición
      </label>
    </div>
  </div>
  <div className="col-12">
    <button className="boton_personalizado" type="submit">Enviar</button>
  </div>
</form>
        </Layout>
}

export default Contacto;