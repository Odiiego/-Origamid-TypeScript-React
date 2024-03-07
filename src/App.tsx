import React from 'react'
import Input from './Input'

type Venda = {
  id: string;
  nome:string;
  preco: number;
  status: string
}

 const App = () => {
  const [start, setStart] = React.useState("")
  const [end, setEnd] = React.useState("")
  const [data, setData] = React.useState<null | Venda[]>(null)

  React.useEffect(() => {
    if (start !== '' && end !== "") {
      fetch(`https://data.origamid.dev/vendas/?inicio=${start}&final=${end}`)
        .then((r) => r.json())
        .then((json) => setData(json as Venda[]))
        .catch((error) => console.log(error))
    }
  }, [start, end])

  return (
    <div>
      <div>
        <Input label="start" type="date" value={start} setState={setStart} />
        <Input label="end" type="date" value={end} setState={setEnd} />
      </div>
      
      <ul>
        {data && data.map(venda => <li key={venda.id}>{venda.nome}: {venda.status}</li>)}
      </ul>
    </div>
  )
}

export default App