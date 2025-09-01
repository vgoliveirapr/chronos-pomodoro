import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Heading } from './components/Heading';

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
        <Heading>Logo</Heading>
      </Container>

      <Container>
        <Heading>Menu</Heading>
      </Container>
    </>
  );
}
