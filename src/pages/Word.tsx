import { BsInstagram, BsGithub } from 'react-icons/bs';
import Header from '../components/header/Hearder';
import { useData } from '../DataContext';

export function Word() {
  const data = useData();

  return (
    <>
      <Header />
      <div className="w-full h-full font-merriweather flex justify-between items-start p-10 sm:px-[20%] !pt-8 overflow-y-auto text-black">
        <div className="flex items-center flex-col h-full w-full justify-center">
          <p>Glossário de Termos</p>
        </div>
      </div>
    </>
  );
}
