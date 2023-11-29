import { v4 as uuid } from 'uuid';
import { IoMdArrowRoundBack } from "react-icons/io";
import Header from '../components/header/Hearder';
import { useData } from '../DataContext';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export function Verbete() {
  const data = useData();
  const { id } = useParams();
  const verbeteData = data.find((item) => item.id === id);
  if (!verbeteData) {
    return (
      <div>Não foi possível encontrar o verbete com o ID especificado</div>
    );
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Link
        className="flex self-start flex-col"
        to={`/menu`}
      >
        <div className='flex justify-center items-center w-full h-8 bg-[#9742FF] m-6 text-white gap-3 rounded-md sm:text-16 text-14'><IoMdArrowRoundBack/> Voltar</div>
      </Link>
      <div className="w-full h-full font-merriweather flex justify-between items-start p-10 sm:px-[20%] !pt-4 overflow-y-auto text-black">
        
        <div
          key={verbeteData.id}
          className="flex items-center flex-col h-full gap-5 w-full justify-center"
        >
          <h2 className="sm:text-40 text-30">{verbeteData.nome}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: verbeteData.descricao,
            }}
          ></p>
          {verbeteData.imagem.map((imagem) => (
            <img
              key={uuid()}
              className="w-1/2"
              src={new URL(`/src/assets/${imagem}`, import.meta.url).href}
              alt={verbeteData.nome}
            />
          ))}
          <h3 className="bg-slate-900 w-4/5 h-1 mt-2" />
          <h3 className="uppercase italic">Referências</h3>
          <ul>
            {verbeteData.referencias &&
              verbeteData.referencias.map((referencia, index) => (
                <li key={index}>{referencia}</li>
              ))}
          </ul>
          <h3 className="uppercase italic">Fontes</h3>
          <ul>
            {verbeteData.fontes.map((fonte, index) => (
              <li key={index} className='mb-2 underline'>
                <a href={fonte} target="_blank" rel="noopener noreferrer">
                 Fonte {index + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
