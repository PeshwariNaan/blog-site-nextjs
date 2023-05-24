//eslint-disable
import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/josh.jpg"
          alt="An image showing a devilishly handsome devil"
          width={300}
          height={300}
        />
      </div>
      <h1>Hello, Im Josh</h1>
      <p>
        I write about web development with a love for frontend frameworks like
        React and NextJS
      </p>
    </section>
  );
};
export default Hero;
