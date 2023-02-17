/* eslint-disable max-len */
import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';

const About = () => (
  <>
    <h2 className="head-text">About <span>Me</span></h2>

    <motion.div
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5, type: 'tween' }}
      className="app__profile-item"
    >
      <h1 className="head-text-name">
        Hello! My name is <span>Htet<br />Aung<br />Hlaing</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum felis quis nulla cursus maximus. Fusce eu erat vel leo bibendum vehicula. Proin sed felis purus. Quisque condimentum aliquet hendrerit. Donec venenatis ante ut tincidunt cursus. Vestibulum non ante tincidunt, porta quam in, convallis enim. Vivamus venenatis a dui eget tempus. Aliquam eu ex sed risus ultricies condimentum. Vestibulum sit amet nunc nulla. In convallis pretium est sed vestibulum. In dictum neque mollis lorem dignissim porta. Donec sit amet tristique est, ut porta tellus. Nam aliquet magna nec faucibus fringilla. Curabitur sed suscipit nibh, non condimentum elit. Donec malesuada tellus at dolor rutrum efficitur.
      </p>
    </motion.div>
  </>
);

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
