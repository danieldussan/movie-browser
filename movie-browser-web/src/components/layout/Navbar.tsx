import { Link, useLocation } from 'react-router-dom';
import classes from './Navbar.module.css';
import { useEffect, useState } from 'react';
import { User, LogOut, ChevronDown } from 'lucide-react';
import SearchBar from '../../features/search/SearchBar';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isProfileOpen && !target.closest(`.${classes.profileMenu}`)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isProfileOpen]);

  return (
    <nav className={`${classes.navbar} ${isScrolled ? classes.scrolled : ''}`}>
      <div className={classes.left}>
        <div className={classes.logo}>
          <Link to="/">MOVIEBROWSER</Link>
        </div>
        <ul className={classes.links}>
          <li>
            <Link 
              to="/browse" 
              className={location.pathname === '/browse' || location.pathname === '/' ? classes.active : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/users" className={location.pathname === '/users' ? classes.active : ''}>
              Users
            </Link>
          </li>
        </ul>
      </div>

      <div className={classes.right}>
        <SearchBar />
        <div 
          className={classes.profileMenu}
          onMouseEnter={() => setIsProfileOpen(true)}
          onMouseLeave={() => setIsProfileOpen(false)}
        >
          <div className={classes.avatarWrapper}>
            <div className={classes.avatar}>
              <User className={classes.avatarIcon} />
            </div>
            <ChevronDown 
              size={16} 
              className={`${classes.chevron} ${isProfileOpen ? classes.chevronOpen : ''}`} 
            />
          </div>
          
          {isProfileOpen && (
            <div className={classes.dropdown}>
              <Link to="/users" onClick={() => setIsProfileOpen(false)}>
                <User size={16} />
                <span>Manage Users</span>
              </Link>
              <div className={classes.divider}></div>
              <div className={classes.signOut}>
                <LogOut size={16} />
                <span>Sign out</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
