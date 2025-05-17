
Crie um custom hook chamado useFetch.

1 - Este hook deve retornar a interface:
interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

Onde T é um valor genérico que deverá ser passado quando o Hook for utilizado.

2 - data, loading e error são estados reativos (useState).

3 - O hook deve receber a URL e OPTIONS como argumentos (interfaces de fetch).

4 - O fetch deve ocorrer em um useEffect, com dependência apenas da URL.

5 - Use AbortController para abortar o fetch caso o componente desmonte, antes do fetch ser concluído.

6 - Teste o Hook com a api: https://data.origamid.dev/produtos
