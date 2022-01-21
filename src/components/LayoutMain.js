import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function LayoutMain() {
  return (
    <div>
      <ul className='navbar'>
        <li>
          <Link className='nav-item' to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link className='nav-item' to='/course'>
            Add Course
          </Link>
        </li>
        <li>
          <Link className='nav-item' to='/peo'>
            PEO-PO Mapping
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
