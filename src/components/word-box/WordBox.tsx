import { Link } from 'react-router-dom';

const WordBox = ({ data }: any) => {
  return (
    <div className="text-[#1f1f1f] sm:p-[5%] sm:pb-[2%] p-8 font-nunito flex flex-col w-full h-60 justify-start items-center rounded-[2.5rem] border border-gray-300 hover:border-[#9742FF] shadow-indigo-500/50 shadow-md">
      <h2 className="flex self-start font-semibold text-22 mb-2 line-clamp-2 sm:line-clamp-3">
        {data.nome}
      </h2>
      <p className="line-clamp-3">{data.descricao}</p>

      <Link
        className="flex sm:self-end self-center justify-end mt-5 w-fit"
        to={`/verbete/${data.id}`}
      >
        <button
          type="button"
          className="text-white flex bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-normal rounded-lg text-14 px-5 py-2 text-center mr-2 mb-2"
        >
          Leia mais
        </button>
      </Link>
    </div>
  );
};

export default WordBox;
