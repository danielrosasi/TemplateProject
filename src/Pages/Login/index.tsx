import "./style.css";

type Props = {};

export default function Login({}: Props) {
  return (
    <div className="container">
      <div className="banner">
        <h1>Welcome!</h1>
      </div>
      <div className="forms">
        <div className="form login">
          <h1>Bem Vindo</h1>
          <p>
            Novo por aqui? <a href="/">Criar Conta</a>
          </p>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}
