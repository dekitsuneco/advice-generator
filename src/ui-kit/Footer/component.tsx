import React, { ReactElement } from 'react';
import { Stylesheet, variables } from '../styles';

const style: Stylesheet = {
  footer: {
    paddingTop: '7px',
    paddingBottom: '7px',
    backgroundColor: variables.color.neutralDark,
    color: variables.color.primary,
    fontSize: '11.2px',
    textAlign: 'center',
  },
  footerLink: {
    color: 'hsl(228, 45%, 44%)',
  },
};


export const Footer = (): ReactElement => (
  <div style={style.footer}>
    Challenge by <a 
      style={style.footerLink} 
      href="https://www.frontendmentor.io?ref=challenge" 
      target="_blank" 
      rel="noreferrer"
    >
        Frontend Mentor
      </a>. 
    Coded by <a 
      style={style.footerLink} 
      href="https://github.com/dekitsuneco/"
    >
      dekitsuneco
    </a>.
  </div>
);

