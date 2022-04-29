import React, { ReactElement } from 'react';
import './App.css';
import { Card } from './ui-kit/Card';
import { Footer } from './ui-kit/Footer';
import { Stylesheet, variables } from './ui-kit/styles';

const style: Stylesheet = {
  main: {
    flex: '1 1 auto',
    paddingRight: '20px', 
    paddingLeft: '20px', 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: variables.color.neutralDarker,
  },
};

function App(): ReactElement {
  return (
    <>
      <div style={style.main}>
        <Card />
      </div>
    
      <Footer />
    </>
  );
}

export default App;
