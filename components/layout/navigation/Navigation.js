import Link from 'next/link';
import Logo from '../logo/Logo';
import classes from './main-navigation.module.css';

const Navigation = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navigation;
