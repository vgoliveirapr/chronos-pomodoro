/*Importando meus componentes criados*/
import { PlayCircleIcon } from 'lucide-react';
import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { DefaultInput } from './components/DefaultInput';
import { Footer } from './components/Footer';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

import { useState } from 'react';

import './styles/global.css';
import './styles/theme.css';

export function App() {
  {
    /*Criação de variáveis para utilização dentro do componente
      Hook padrão de nomenclatura do react "use" + Tchanana
    */
  }
  //Sempre que eu usar useState, não vou usar atribuição diretamente (nomeViavel = 1 || nomeViavel += 1)
  //essa variável aqui foi feito uma desestruturação
  //const [numero, setNumero] = useState(() => {
  //  console.log('Lazy inicialization');
  //  return 0;
  //});

  const [numero, setNumero] = useState(0);

  function handleClick() {
    //setNumero(prevState => prevState + 1);
    //Dessa maneira eu preservo o valor anterior pra se caso eu precisasse chamar o mesmo método diversas vezes eele irá executar todas as vezes
    //E irá informar pros componentes que usam essa variável para serem renderizados novamente
    //Caso usasse o setNumero(numero + 1) o componente só sofreria apenas uma atualização por causa da dependência da variável numero
    setNumero(prevState => prevState + 1);
  }

  return (
    <>
      {/*Comentário é assim entre chaves dentro do componente
        Posso passar atributos também pelo componente escolhendo seu nome
        no exemplo tenho o attr que é um number
        e attr2 que é uma string

        <Heading attr={123} attr2='String'>
          Olá Mundo 2!
        </Heading>

        Função anonima
        () => console.log(numero, Date.now())
      */}

      {/*Utilização de Hooks (Ganchos)*/}
      <Heading>Número: {numero}</Heading>
      <button onClick={handleClick}>Aumenta</button>

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
            <DefaultInput
              id='meuInput'
              labelText={numero.toString()}
              type='text'
              placeholder='Digite algo'
              defaultValue='Valor preenchido'
            />
          </div>
          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon />} color='green' />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}
