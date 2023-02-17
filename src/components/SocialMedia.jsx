import React from 'react';
import { BsTwitter, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.twitter.com/" target="_blank" rel="noreferrer"> <BsTwitter /> </a>
    </div>
    <div>
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"> <FaFacebookF /> </a>
    </div>
    <div>
      <a href="https://www.github.com/" target="_blank" rel="noreferrer"> <BsGithub /> </a>
    </div>
  </div>
);

export default SocialMedia;
