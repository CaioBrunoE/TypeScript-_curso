
type Props = {
    name:string
}

const SecondComponente = (props: Props) => {
  return (
    <div>
        <p>Meu segundo componente</p>
        <p>Onome dele e : {props.name}</p>
    </div>
  )
}

export default SecondComponente