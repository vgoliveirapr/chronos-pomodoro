/* Como estamos dentro de um código Javascript não da pra usar a class da tag HTML
   Sendo uma palavra reservada da linguagem devemos usar a className no lugar
*/

/* Importando um css modular - Exclusivo pode criar classes de css com o mesmo nome separar por modulos */
import styles from './Heading.module.css';

export function Heading() {
  return <h1 className={styles.heading}>Olá Mundo!</h1>;
}
