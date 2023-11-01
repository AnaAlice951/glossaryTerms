import Header from '../components/header/Hearder';
import { useData } from '../DataContext';
import { useParams } from 'react-router-dom';

export function Verbete() {
  const data = useData();
  const { id } = useParams();
  const verbeteData = data.find((item) => item.id === id);

  if (!verbeteData) {
    return (
      <div>Não foi possível encontrar o verbete com o ID especificado</div>
    );
  }
  return (
    <>
      <Header />

      <div className="w-full h-full font-merriweather flex justify-between items-start p-10 sm:px-[20%] !pt-8 overflow-y-auto text-black">
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
              className="w-1/2"
              src={`/public/assets/${imagem}`}
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
