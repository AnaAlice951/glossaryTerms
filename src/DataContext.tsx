import { createContext, useContext } from 'react';
import data from './data/glossary.json';

export function useData() {
  return useContext(DataContext);
}
const DataContext = createContext(data);


export function DataProvider({ children }: any) {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
