import { BsInstagram, BsGithub } from 'react-icons/bs';
import Header from '../components/header/Hearder';
import { useData } from '../DataContext';

export function Verbete() {
  const data = useData();

  return (
    <>
      <Header />
      <div className="w-full h-full font-merriweather flex justify-between items-start p-10 sm:px-[20%] !pt-8 overflow-y-auto text-black">
        <div
          key={data[0].id}
          className="flex items-center flex-col h-full gap-5 w-full justify-center"
        >
          <h2 className="sm:text-40 text-30">{data[0].nome}</h2>

          <p>{data[0].descricao}</p>
          <img
            className="w-1/2"
            src={`../../src/assets/${data[0].imagem}`}
            alt={data[0].nome}
          />
          <h3 className="bg-slate-900 w-4/5 h-1 mt-2" />
          <h3 className="uppercase italic">Referências</h3>
          <ul>
            {data[0].referencias &&
              data[0].referencias.map((referencia, index) => (
                <li key={index}>{referencia}</li>
              ))}
          </ul>
          <h3 className="uppercase italic">Fontes</h3>
          <ul>
            {data[0].fontes.map((fonte, index) => (
              <li key={index}>
                <a href={fonte} target="_blank" rel="noopener noreferrer">
                  {fonte}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
