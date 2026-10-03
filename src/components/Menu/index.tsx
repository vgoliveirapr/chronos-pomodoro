import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  /*
    //Criação de variáveis para utilização dentro do componente
    //Hook padrão de nomenclatura do react "use" + Tchanana
    
    //Sempre que eu usar useState, não vou usar atribuição diretamente (nomeViavel = 1 || nomeViavel += 1)
    //essa variável aqui foi feito uma desestruturação
    
    //Exemplo de Lazy Inicialization, caso use uma função dentro da inicialização do componente ela será executada uma vez apenas na renderização
    //do componente pela primeira vez
    //const [numero, setNumero] = useState(() => {
    //  console.log('Lazy inicialization');
    //  return 0;
    //});
    
    //Padrão de nomenclatura da desestruturação set + tchanana
    //Hook: useState => Programação Reativa => "Atualizar os componentes" onde é usado
    const [numero, setNumero] = useState(0);
       function handleClick() {
    
      //setNumero(prevState => prevState + 1)
      //^^^^^^^^^^^^^^^^^^^^^^^^^^
      //Dessa maneira eu preservo o valor anterior pra se caso eu precisasse chamar o mesmo método diversas vezes ele irá executar todas as vezes
      //E irá informar pros componentes que usam essa variável para serem atualizados
      //Caso usasse o setNumero(numero + 1) o componente só sofreria apenas uma atualização por causa da dependência da variável numero
      setNumero(prevState => prevState + 1);
    }

      Utilização de Hooks (Ganchos) -> handleClick, função criada dentro do componente
      <Heading>Número: {numero}</Heading>
      <button onClick={handleClick}>Aumenta</button>
  */

  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); // Não segue o link
    setTheme(prevTheme => {
      const nextTheme = prevTheme == 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }
  /*
  //Tipos de utilização do hook useEffect => Hook responsável por trabalhar com os efeitos colaterais (Parte do código que o React não está
  //acompanhando/monitorando)
  // Somente a função => Executado toda vez que o componente é renderizado na tela
  useEffect(() => {
    console.log('', Date.now());
  });

  // Função + array de dependência vazio => Executa apenas quando o React monta o componente na tela pela primeira vez
  useEffect(() => {
    console.log('', Date.now());
  }, []);

  //Função + array de dependência (Estado que será monitorado para uso do efeito colateral) => Executa apenas quando o valor da dependência mudar
  useEffect(() => {
    console.log('', Date.now());
  }, [theme]);
 */

  // Função + array de dependência vazio (Estado que será monitorado para uso do efeito colateral)
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      {/* aria-label => Texto que irá ser lido pelos leitores de tela (Acessibilidade) */}
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Página Inicial'
        title='Página Inicial'
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Histórico'
        title='Histórico'
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Tema'
        title='Tema'
        onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
