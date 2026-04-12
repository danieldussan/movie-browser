import { Link, useLocation } from 'react-router-dom';
import classes from './Navbar.module.css';
import { useEffect, useState } from 'react';
import { User, LogOut } from 'lucide-react';
import SearchBar from '../../features/search/SearchBar';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${classes.navbar} ${isScrolled ? classes.scrolled : ''}`}>
      <div className={classes.left}>
        <div className={classes.logo}>
          <Link to="/">MovieBrowser</Link>
        </div>
        <ul className={classes.links}>
          <li>
            <Link to="/browse" className={location.pathname === '/browse' ? classes.active : ''}>Home</Link>
          </li>
          <li>
            <Link to="/users" className={location.pathname === '/users' ? classes.active : ''}>Users</Link>
          </li>
        </ul>
      </div>

      <div className={classes.right}>
        <div className={classes.iconContainer}>
            <SearchBar />
        </div>
        <div className={classes.profileMenu}>
            <div className={classes.avatar}>
               <User className={classes.avatarIcon} />
            </div>
            <div className={classes.dropdown}>
               <Link to="/users">Manage Users</Link>
               <div className={classes.divider}></div>
               <div><LogOut size={16} /> Sign out</div>
            </div>
        </div>
      </div>
    </nav>
  );
}
