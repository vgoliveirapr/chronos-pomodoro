/* Como estamos dentro de um código Javascript não da pra usar a class da tag HTML
   Sendo uma palavra reservada da linguagem devemos usar a className no lugar
*/

/* Importando um css modular - Exclusivo pode criar classes de css com o mesmo nome separar por modulos */
import styles from './Heading.module.css';

/*Usando Children do componente => Valor dentro das tags do Html
  Nas dentro das tags <> são atributos
*/
export function Heading(props) {
  console.log(props.attr);
  return <h1 className={styles.heading}>{props.children}</h1>;
}
