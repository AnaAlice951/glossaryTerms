const WordBox = ({ data }: any) => {
  console.log(data);

  return (
    <div className="text-[#1f1f1f] line-clamp-2 p-8 font-nunito flex flex-col w-full h-60 justify-start items-center rounded-[2.5rem] border border-gray-300 hover:border-[#9742FF] shadow-indigo-500/50 shadow-md">
      <div>
        <h2 className="font-semibold text-22 mb-2">{data.nome}</h2>
        <p className="line-clamp-4">{data.descricao}</p>
      </div>
    </div>
  );
};

export default WordBox;
