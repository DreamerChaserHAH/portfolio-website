import React from 'react';
import { motion } from 'framer-motion';
import Typist from 'react-text-typist';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <div style={{ marginTop: 50 }}>
            <Typist className="head-text" sentences={['Hello, I am Htet Aung Hlaing']} typingSpeed="100" loop={false} />
          </div>
        </div>
        <div className="tag-cmp app__flex">
          <Typist className="p-text" sentences={['Game Developer', 'Freelancer']} startDelay="3000" typingSpeed="150" deletingSpeed="200" />
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.unitylogo} alt="profile_bg" />

    </motion.div>

  </div>
);

export default AppWrap(Header, 'home');
