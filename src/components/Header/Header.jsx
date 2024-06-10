import { NavLink } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
  return (
    <>
      <header className="header" id="header">
        <div className="container">
          <nav className="header__nav">
            <NavLink to="/" className="header__link">
              Каталог
            </NavLink>
            <NavLink to="/clients" className="header__link">
              наши клиенты
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};
