import Header from '../components/header/Hearder';
import { useData } from '../DataContext';
import WordBox from '../components/word-box/WordBox';
import { useState } from 'react';

export function Menu() {
  const data = useData();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter((boxData) => {
    return boxData.nome.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <Header />
      <div className="w-full h-full font-nunito flex justify-between items-start p-10 sm:px-10 !pt-8 overflow-y-auto text-black">
        <div className="flex items-center flex-col h-full w-full justify-center">
          <h2 className="text-30">Glossário de Termos</h2>
          <p>Descubra termos utilizados no contexto de direitos digitais</p>
          <input
            type="text"
            className="bg-gray-50 border w-4/5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#9742FF] focus:border-[#9742FF] block p-2.5  dark:text-white dark:focus:ring-[#9742FF] dark:focus:border-[#9742FF]"
            placeholder="Encontre palavras interresantes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4 w-[80%] sm:mt-[3%] mt-[6%] h-full">
            {filteredData.map((boxData) => (
              <WordBox data={boxData} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
