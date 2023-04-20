import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <a href="/"><span className='fa fa-tasks'></span></a>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/favorite">Favourite</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
      
    </nav>
  );
};

export default Navbar;