import { BsInstagram, BsGithub } from 'react-icons/bs';
import Header from '../components/header/Hearder';

export function Home() {
  const instagramURL = 'https://www.instagram.com/anaalice951';
  const gitHubURL = 'https://github.com/AnaAlice951';
  return (
    <>
      <Header />
      <div className="w-full h-full font-merriweather flex justify-between items-start p-10 lg:p-20 overflow-y-auto">
        <div className="flex flex-col h-full gap-5 lg:gap-20 w-full justify-center">
          <p className="font-bold text-[50px] lg:text-[80px] text-black_75">
            Verbetes - Direito Digital
          </p>
          <p className="font-bold text-14 lg:text-16  text-black_75">
            Grupo: Ana Alice, Brenner Lucas, Daniele Januario, Gabriel Alves,
            Hebert Boniek <br></br>Henrique Vieira, Italo Oliveira, Luana
            Aparecida, Pablo Augusto
          </p>
          <div className="flex flex-row lg:gap-20 gap-10 mt-5">
            <a
              href={instagramURL}
              className="h-3 w-9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram className="lg:w-10 lg:h-10 w-7 h-7" />
            </a>
            <a href={gitHubURL} target="_blank" rel="noopener noreferrer">
              <BsGithub className="lg:w-10 lg:h-10 w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
