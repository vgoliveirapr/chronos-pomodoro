/* Como estamos dentro de um código Javascript não da pra usar a class da tag HTML
   Sendo uma palavra reservada da linguagem devemos usar a className no lugar
*/

/* Importando um css modular - Exclusivo pode criar classes de css com o mesmo nome separar por modulos */
import styles from './Heading.module.css';

/* Usando tipagem para os componentes nesse caso seria o props, garantindo que vai vir o valor correto
   Da pra usar pra garantir que vai vir os valores pro componente
   Tipo React.ReactNode => Todos os tipos que o react reconhece como children dele inclusive componentes
*/
type HeadingProps = {
  children: React.ReactNode;
};

/*Usando Children do componente => Valor dentro das tags do Html
  Dentro das tags <> são atributos
  Da pra desestruturar uma "classe" com { ABC } sendo ABC as "propriedades" da minha tipagem e
  Sendo usado esse ABC como uma variável
*/
export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}
