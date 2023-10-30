import { Link } from 'react-router-dom';
import { usePaths } from '../../hooks/usePaths';
import image from '../../assets/logo_una_roxa.png';

export function Header() {
  const general = 'text-slate-300';
  const current = 'text-white font-bold';

  const { isCurrentPage } = usePaths();

  return (
    <header className="w-full h-20 bg-black_75 flex sm:justify-between justify-center items-center px-6 py-4 sm:text-16 text-12">
      <nav className="flex sm:gap-6 gap-4 items-center">
        <img className="w-32" src={image} />
        <Link to={'/'} className={isCurrentPage('/') ? current : general}>
          Pagina Inicial
        </Link>
        <Link
          to={'/verbete'}
          className={isCurrentPage('/') ? current : general}
        >
          Verbetes
        </Link>
      </nav>
    </header>
  );
}

export default Header;
