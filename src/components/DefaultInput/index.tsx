/*
  Criando UnionType dentro das props ao invés de colocar tipos de dados garante rigidez
  variável : 'text' | 'teste'
  Intersection: combinando dois elementos, unindo todos os valores obrigando ter todos os valores
  type A = {
    b: string
  }
  & { a: number }
  Posso gerar Herança usando os componentprops
  Usando a Intersection 
  Exemplo: 
  type DefaultInputProps = {
    id: string; -> Personalizado
  } & React.ComponentProps<'input'>; -> Herdando do input do html
  
  Posso ter props opcional basta adicionar um ? no nome da variável
  labelText?: string;

  {} => Habilitacao de código javascript ou atribuição de variáveis

  Criando condições no javascript para trazer elementos html ou não
  Se for informado labelText ele irá plotar o label
  Condição com if e else
  {labelText ? <label htmlFor={id}>{labelText}</label> : ''}

  Condicao sem else
  {labelText && <label htmlFor={id}>{labelText}</label>}

  Quando dentro das props estou "herdando" de outro componente posso usar o ...rest para o que for passado
  desse componente, as configurações dele como style, padding, etc. passar pro componente exemplo:
  <DefaultInput id='meuInput' => minha propriedade da "classe" do defaultInput
                labelText='Teste' => minha propriedade da "classe" do defaultInput
                style='caixinha' => irá parar no ...rest />
  
  Aplicando no componente
  export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
  }: DefaultInputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input id={id} type={type} {...rest} />
    </>
  );
}
*/

type DefaultInputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input id={id} type={type} {...rest} />
    </>
  );
}
