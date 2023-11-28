import classes from './HeroBullets.module.css';

export const Hero = () => {
  return (
    <div className={classes.imgWrapper}>
      <img src="/images/BG.jpg" alt="img" />
      <h1 className={classes.mainTitle}>IONI</h1>
      <span className={classes.phoneNumber}>+1 (514) 229-9090</span>
    </div>
  );
};
