import React, { ReactElement, useEffect, useState } from 'react';
import { Stylesheet, variables } from '../styles';
import { Text } from '../Text';
import axios from 'axios';
import divider from '../../images/pattern-divider-mobile.svg';
import dice from '../../images/icon-dice.svg';

const style: Stylesheet = {
  wrapper: {
    position: 'relative',
    maxWidth: '410px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  card: {
    width: '100%',
    paddingTop: '40px',
    paddingBottom: '40px',
    backgroundColor: variables.color.neutralDark,
    borderRadius: '8px',
  },
  container: {
    margin: '0 auto',
    paddingLeft: '30px',
    paddingRight: '30px',
  },
  cardBody: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  cardTitle: {
    marginBottom: '30px',
  },
  title: {
    color: variables.color.primaryDark,
    fontSize: variables.fontSize.smaller,
    letterSpacing: '2px',
    textTransform: 'uppercase',
  },
  cardAdvice: {
    marginBottom: '25px',
    textAlign: 'center',
  },
  cardDivider: {
    marginBottom: '30px',
  },
  cardDice: {
    position: 'absolute',
    bottom: '-32.5px',
    width: '65px',
    height: '65px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: variables.color.primaryDark,
    border: 'none',
    borderRadius: '50%',
  },
  cardDiceActive: {
    boxShadow: `
      0 0 12px #0fa,
      0 0 22px #0fa,
      0 0 31px #0fa
    `,
    cursor: 'pointer',
  },
};
interface AdviceObject {
  id: number,
  advice: string,
}

interface SlipObject {
  slip: AdviceObject
}


export const Card = (): ReactElement => {
  console.count('Rendered');
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [advice, setAdvice] = useState<AdviceObject>({
    id: 0,
    advice: '',
  });

  const fetchAdvice = async () => {
    const url: string = 'https://api.adviceslip.com/advice';

    setIsLoading(true);

    const { data } = await axios.get<SlipObject>(url);
    const newAdvice = data.slip.advice;
    const newAdviceID = data.slip.id;
    setAdvice({ id: newAdviceID, advice: newAdvice });

    setIsLoading(false);
  };
  
  useEffect(() => {
    fetchAdvice();
  }, []);
  

  return (
    <div style={style.wrapper}>
      <div style={style.card}>
        <div style={style.container}>
          <div style={style.cardBody}>
            <div style={style.cardTitle}>
              <Text style={style.title}>
                {`Advice ${isLoading ? '' : `#${advice.id}`}`}
              </Text>
            </div>
            <div style={style.cardAdvice}>
              <Text>
                {isLoading ? 'Loading..' : advice.advice}
              </Text>
            </div>
            <div style={style.cardDivider}>
              <img src={divider} alt="Divider line." />
            </div>
            <button 
              style={
                { 
                  ...style.cardDice,
                  ...(isHovered ? style.cardDiceActive : {}), 
                }
              }
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => fetchAdvice()}
            >
              <img src={dice} alt="Dice icon." />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

