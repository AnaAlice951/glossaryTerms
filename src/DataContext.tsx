import { createContext, useContext, useEffect, useState } from 'react';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import data from './data/glossary.json';

export function useData() {
  return useContext(DataContext);
}
const DataContext = createContext(data);

interface Item {
  nome: string;
  imagem: string[];
  descricao: string;
  referencias: string[];
  fontes: string[];
}

export function DataProvider({ children }: any) {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
