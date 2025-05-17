import { fetchi } from './useFetch';

interface User {
  id: number,
  nome: string,
  email: string,
}


const url = 'https://data.origamid.dev/produtos';


function App() {
  const {data, loading, error} = fetchi<User[]>(url)
 

  if(loading) return <h1> Carregando...</h1>
  if(!data) return "Nenhum dado encontrado"
 
  return (
    <>
      <div>
      {data.map((data) => <ul key={data.id}>
      <li> {data.nome}</li>
      </ul>)}
    </div>
    </>
  )
}

export default App
