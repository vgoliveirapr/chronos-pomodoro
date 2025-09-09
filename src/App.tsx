import { Container } from './components/Container';
import { Logo } from './components/Logo';

import './styles/theme.css';
import './styles/global.css';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';

export function App() {
  return (
    <>
      {/*Comentário é assim entre chaves dentro do componente
        Posso passar atributos também pelo componente escolhendo seu nome
        no exemplo tenho o attr que é um number
        e attr2 que é uma string

        <Heading attr={123} attr2='String'>
          Olá Mundo 2!
        </Heading>
      */}
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput id='meuInput' labelText='Task:' type='text' />
          </div>
          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <p>Ciclos</p>
            <p>0 0 0 0 0</p>
          </div>

          <div className='formRow'>
            <button>Iniciar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
