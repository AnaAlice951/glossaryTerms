import { BsInstagram, BsGithub } from 'react-icons/bs';
import Header from '../components/header/Hearder';
import { useData } from '../DataContext';
import WordBox from '../components/word-box/WordBox';

export function Word() {
  const data = useData();

  return (
    <>
      <Header />
      <div className="w-full h-full font-merriweather flex justify-between items-start p-10 sm:px-10 !pt-8 overflow-y-auto text-black">
        <div className="flex items-center flex-col h-full w-full justify-center">
          <h2 className="text-30">Glossário de Termos</h2>
          <p>Descubra termos utilizados no contexto de direitos digitais</p>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Encontre palavras interresantes..."
            required
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4 w-[80%] sm:mt-[3%] mt-[6%]">
            {data.map((boxData) => (
              <WordBox data={boxData} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
