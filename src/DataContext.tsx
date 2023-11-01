import { createContext, useContext } from 'react';
import data from './data/glossary.json';

export function useData() {
  return useContext(DataContext);
}
const DataContext = createContext(data);

// interface Item {
//   nome: string;
//   imagem: string[];
//   descricao: string;
//   referencias: string[];
//   fontes: string[];
// }

export function DataProvider({ children }: any) {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
