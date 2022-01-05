import { useState } from 'react';

import Container from './components/container/Container';
import Section from './components/section/Section';
import FeedbackOptions from './components/feedbackOptions/FeedbackOptions';
import Statistics from './components/statistics/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        break;
    }
  };

  const total = good + neutral + bad;
  const positive = `${Math.round((good / total) * 100)}%`;
  const statisticsData = { good, neutral, bad, total, positive };

  return (
    <>
      <Container>
        <Section title="Please rate the product">
          <FeedbackOptions
            data={{ good, neutral, bad }}
            onBtnClick={onLeaveFeedback}
          />
        </Section>
        <Section title="Rating statistics">
          {total ? <Statistics data={statisticsData} /> : <p>No stats yet</p>}
        </Section>
      </Container>
    </>
  );
};

export default App;
