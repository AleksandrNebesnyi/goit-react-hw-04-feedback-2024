import { useState } from 'react';
import { Title } from './Title';
import css from './App.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = Object.keys({ good, neutral, bad });

  const onBtnClick = e => {
    const keyName = e.currentTarget.name;

    switch (keyName) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const makeButton = items => {
    return items.map(item => (
      <button
        key={item}
        className={css.button}
        type="button"
        name={item}
        onClick={onBtnClick}
      >
        {item}
      </button>
    ));
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    if (good === 0) return 0;
    return Math.floor((good / countTotalFeedback()) * 100);
  };
  return (
    <div className={css.container}>
      <Title text="Please leave fidback">
        <div className={css.btnContainer}>{makeButton(options)}</div>
      </Title>

      <Title text="Statistics">
        <div>
          {countTotalFeedback() <= 0 ? (
            <p>No feedback given</p>
          ) : (
            <>
              <p className={css.statisticItem}>Good:{good}</p>
              <p className={css.statisticItem}>Neutral:{neutral}</p>
              <p className={css.statisticItem}>Bad:{bad}</p>
              <p className={css.statisticItem}>Total:{countTotalFeedback()}</p>
              <p className={css.statisticItem}>
                Positiv Feedback:{countPositiveFeedbackPercentage()}
              </p>
            </>
          )}
        </div>
      </Title>
    </div>
  );
};
