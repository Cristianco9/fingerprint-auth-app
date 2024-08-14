import '../styles/LoginForm.css';

export default function Form() {
  return (
    <form className="login-form">

      <div className="login-form-main-container">
        <h1 className="title">Bienvenido</h1>
        <p className="sub-title">Por favor inicia sesión</p>

        <div className="fields-container">
          <div className="form-element">
            <label className="form-label">Usuario</label>
            <input
              className="value-input"
              placeholder="ingrese su usuario"
              type="text"
              id="username"
              value=""
              required
            />
          </div>

          <div className="form-element">
            <label className="form-label">Contraseña</label>
            <input
              className="value-input"
              placeholder="ingrese su contraseña"
              type="text"
              id="password"
              value=""
              required
            />
          </div>
        </div>

        <button className="forgot-password-btn">Olvidé la contraseña</button>

        <button className="sign-in-btn">Ingresar</button>
      </div>

    </form>
  )
}
