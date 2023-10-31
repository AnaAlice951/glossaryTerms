import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const calculateLineClamp = (title: string) => {
  if (title.length <= 10) {
    return 4;
  } else if (title.length <= 23) {
    return 3;
  } else {
    return 2;
  }
};

const WordBox = ({ data }: any) => {
  const descriptionLineClamp = calculateLineClamp(data.nome);
  const [isFocus, setIsFocus] = useState(false);
  const [mediaQuery, setMediaQuery] = useState(
    window.matchMedia('(max-width: 768px)')
  );

  console.log('mediaQuery', mediaQuery);
  useEffect(() => {
    setMediaQuery(window.matchMedia('(max-width: 639px)'));
  }, [mediaQuery]);

  return (
    <div
      className="text-[#1f1f1f] sm:p-[5%] p-8 font-nunito flex flex-col w-full h-60 justify-start items-center rounded-[2.5rem] border border-gray-300 hover:border-[#9742FF] shadow-indigo-500/50 shadow-md"
      onMouseEnter={() => setIsFocus(true)}
      onMouseLeave={() => setIsFocus(false)}
    >
      <h2 className="flex self-start font-semibold text-22 mb-2 line-clamp-2 sm:line-clamp-3">
        {data.nome}
      </h2>
      <p className={`line-clamp-${descriptionLineClamp}`}>{data.descricao}</p>
      {(mediaQuery.matches || isFocus) && (
        <Link
          className="flex self-end  justify-end mt-1 w-fit"
          to={`/verbete/${data.id}`}
        >
          <button
            type="button"
            className="text-white flex bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-normal rounded-lg text-12 px-5 py-2 text-center mr-2 mb-2"
          >
            Leia mais
          </button>
        </Link>
      )}
    </div>
  );
};

export default WordBox;
