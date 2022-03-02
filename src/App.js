import React , {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Buscador = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
` ;

//estilizando o botão
const Botao = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family:  Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;
  :hover {
    cursor:pointer;
    background-size: 400px;
  }
`;


function App() {

  // state de frases
  const [frase, guardarFrase] = useState({});

  const consultarAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json()
    guardarFrase(frase[0]);
  }

  // Carregar uma frase
  useEffect( () => {
    consultarAPI()
  }, []);

  return (
    <Buscador>
    <Frase
        frase={frase}
      />
 <Botao
        onClick={consultarAPI}
      >
        Buscar frase
      </Botao>
    </Buscador>
  );
}

export default App;
