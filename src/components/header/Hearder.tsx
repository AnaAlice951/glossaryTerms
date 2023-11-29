import { Link } from 'react-router-dom';
import { usePaths } from '../../hooks/usePaths';
import image from '../../assets/roxouna.png';

export function Header() {
  const general = 'text-slate-300';
  const current = 'text-white font-bold';
  const unaUrl = 'https://www.una.br/'
  const { isCurrentPage } = usePaths();

  return (
    <header className="w-full h-20 bg-black_75 flex sm:justify-between justify-center items-center px-6 py-4 sm:text-16 text-12">
      <nav className="flex sm:gap-6 gap-4 items-center">
        <div className=' pr-8'>
          <a href={unaUrl} target="_blank" rel="noopener noreferrer" className='' >
                <img className="sm:w-24 w-20 bg-contain" src={image}/>
              </a>
          </div>
        <Link to={'/'} className={isCurrentPage('/') ? current : general}>
          Pagina Inicial
        </Link>
        <Link to={'/menu'} className={isCurrentPage('/menu') ? current : general}>
          Todos Verbetes
        </Link>
      </nav>
    </header>
  );
}

export default Header;
