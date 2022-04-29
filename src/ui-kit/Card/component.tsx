import React from 'react';
import { Stylesheet, variables } from '../styles';
import divider from '../../images/pattern-divider-mobile.svg';
import dice from '../../images/icon-dice.svg';

const style: Stylesheet = {
  wrapper: {
    position: 'relative',
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
  },
  cardTitle: {
    marginBottom: '30px',
    color: variables.color.primaryDark,
    textAlign: 'center',
    fontSize: '12px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  },
  cardAdvice: {
    marginBottom: '25px',
    color: variables.color.primary,
    fontSize: variables.fontSize.medium,
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
    borderRadius: '50%',
  },
};

export const Card = () => {
  return (
    <div style={style.wrapper} className="advicer">
      <div style={style.card} className="card">
        <div style={style.container} className="container">
          <div style={style.cardBody} className="card__body">
            <div style={style.cardTitle} className="card__title">
              {'Advice #117'}
            </div>
            <div style={style.cardAdvice} className="card__advice">
              {'"It is easy to sit up and take notice, what\' difficult is getting up and taking action."'}
            </div>
            <div className="card__divider" style={style.cardDivider}>
              <img src={divider} alt="Divider line." />
            </div>
            <div className="card__qr-code" style={style.cardDice}>
            <img src={dice} alt="Dice icon." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

