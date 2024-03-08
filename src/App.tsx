import React from 'react';
import useFetch from './useFetch';

type Produto = {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
  descricao: string;
  internacional: boolean;
};

const App = () => {
  const [id, setId] = React.useState('P001');
  const produtos = useFetch<Produto[]>('https://data.origamid.dev/produtos/');
  const produto = useFetch<Produto>(`https://data.origamid.dev/produtos/${id}`);

  return (
    <section className="flex">
      <ul>
        {produtos.data?.map((produto: Produto) => {
          return (
            <li>
              <button onClick={() => setId(produto.id)}>{produto.id}</button>
            </li>
          );
        })}
      </ul>
      {produto.loading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ margin: '1rem' }}>
          <p>ID: {produto.data?.id}</p>
          <p>Nome: {produto.data?.nome}</p>
          <p>Preço: R${produto.data?.preco}</p>
          <p>Quantidade: {produto.data?.quantidade}</p>
          <p>Descrição: {produto.data?.descricao}</p>
        </div>
      )}
    </section>
  );
};

export default App;
