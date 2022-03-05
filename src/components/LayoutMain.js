import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function LayoutMain() {
  return (
    <div>
      <ul className='navbar'>

        <button>
          <Link className='nav-item' to='/'>
            Home
          </Link>
        </button>

        <button>
          <Link className='nav-item' to='/coursedata'>
            Add Course
          </Link>
        </button>

        <button>
          <Link className='nav-item' to='/codata'>
            CO Detail
          </Link>
        </button>

        <button>
          <Link className='nav-item' to='/obe3'>
            OBE 3
          </Link>
        </button>

        <button>
          <Link className='nav-item' to='/podata'>
            PO Detail
          </Link>
        </button>

        <button>
          <Link className='nav-item' to='/peodata'>
            PEO Detail
          </Link>
        </button>


        <button>
          <Link className='nav-item' to='/peopomapping'>
            PEO-PO Mapping
          </Link>
        </button>

        <button>
          <Link className='nav-item' to='/copomapping'>
            CO-PO Mapping
          </Link>
        </button>

      </ul>
      <Outlet />
    </div>
  );
}
