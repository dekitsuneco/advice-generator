import React, { CSSProperties, ReactElement } from 'react';
import { Stylesheet, variables } from '../styles';

const style: Stylesheet = {
  title: {
    color: variables.color.primary,
    textAlign: 'center',
    fontSize: variables.fontSize.medium,
  },
};

interface TextProps {
  children: string | undefined | null;
  style?: CSSProperties;
}

export const Text = ({ 
  children, 
  style: customStyles = {}, 
}: TextProps): ReactElement => (
  <span style={{ ...style.title, ...customStyles }}>
    {children}
  </span>
);

