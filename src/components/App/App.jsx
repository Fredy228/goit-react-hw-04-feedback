import {Container, Section, Title} from './App.styled';
import {Feedback} from '../Feedback/Feedback';
import {Statistics} from '../Statistics/Statistics';
import {Notification} from '../Notification/Notification'
import {useState} from 'react';

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = (event) => {
    const feedback = event.target.value;
    switch (feedback.toLowerCase()) {
      case 'good':
        return setGood(prevS => prevS + 1)
      case 'neutral':
        return setNeutral(prevS => prevS + 1)
      case 'bad':
        return setBad(prevS => prevS + 1)
      default:
        break;
    }
  }

   const countTotalFeedback = () => {
    return (good + bad + neutral);
  }
  
  const countPositiveFeedbackPercentage = () => {
    if(good > 0) {
      return Math.round(good / countTotalFeedback() * 100);
    } else {
      return (0);
    }
  }

    return (
      <Container>
        <Section>
          <Title>Please leave feedback</Title>
          <Feedback addFeedback={addFeedback}/>
        </Section>
        <Section>
          <Title>Statictics</Title>
          {countTotalFeedback() > 0 
            ?<Statistics state={{good, neutral, bad}} 
          countTotalFeedback={countTotalFeedback} 
          countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}/>
            :<Notification message='There is no feedback'/>}
          </Section>
      </Container>
    );
  
};
