import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home(){
  return(
      <nav className="navbar navbar-expand-lg bg-danger-subtle p-4">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav fw-bold">
            <li className="nav-item">
              <Link className="nav-link" href="/navbar">Navbar</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/position">Position</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/stuck">Stuck</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/dflex">D-flex</Link>
            </li>
          </ul>
        </div>
      </nav>
  )
}
