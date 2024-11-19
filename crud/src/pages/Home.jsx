import {NavLink} from 'react-router-dom';


const Home = () => {
  return (
    <>
     <nav>
    <div className="nav-wrapper">
    <a className="brand-logo"><img src="src/assets/logo-header.png" alt="" style={{ width: '70px', height: '60px', marginRight: '5px' }} /></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a>Proveedores</a></li>
        <li><NavLink to='/'>Productos</NavLink></li>
        <li><a>Inventario</a></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
      </ul>
    </div>
  </nav>

    </>
  )
}

export default Home