import 'react-phone-input-2/lib/style.css';

import { useSelector } from 'react-redux';

import { RootState } from '../../app/rootReducer';
// import { Footer } from '../../features/components/Footer/Footer';
import { Header } from '../../features/components/Header';
import { Hero } from '../../features/components/Hero/Hero';

import classes from './Main.module.css';

const Main = () => {
  const isOpen = useSelector((state: RootState) => state.user.user);

  // eslint-disable-next-line no-console
  console.log(isOpen);

  return (
    <section className={classes.container}>
      <Header />
      <Hero />
    </section>
  );
};

export default Main;
