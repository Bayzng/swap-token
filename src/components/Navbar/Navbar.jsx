import './Navbar.css'
import imgLogo from '../../assets/DLT-Africa.png';

import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';



const Navbar = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <nav>
        <div className="logo" onClick={goHome}>
          <img src="/src/assets/DLT-Africa.png" />
        </div>
        <div>
          <Link>
          <button className='connect'>Swap Token</button>
          </Link>
        </div>
        <Link to='/swap'>
          <button className='connect'>Connect Wallet</button>
        </Link>
      </nav>
    </header>

  );
};

export default Navbar;
