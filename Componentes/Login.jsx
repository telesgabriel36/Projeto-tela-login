import {FaUser, FaLock} from 'react-icons/fa'

import { useState } from 'react';

import "./Login.css"

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        alert("Enviando os dados: " + username + " - " + password);
    };

  return (

    <div className="conteiner">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o Sistema</h1>
        <div className='input-field'>
          <input type="Email" placeholder="E-mail" 
          onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className='Icon'/>
        </div>

        <div className='input-field'>
          <input type="password" placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)} />
          <FaLock className='Icon'/>
        </div>

        <div className="recall-forget">
            <label>
                <input type="checkbox" />
                Lembrar de mim
            </label>
            <a href="#">Esqueceu a senha?</a>
        </div>

        <button>Entrar</button>

        <div className="signup-link">
            <p>
                Não tem uma conta? <a href="#">Registrar</a>
            </p>
        </div>


      </form>
    </div>
  );
};

export default Login;
