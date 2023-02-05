import {Container, Section, Title} from './App.styled';
import {Feedback} from '../Feedback/Feedback';
import {Statistics} from '../Statistics/Statistics';
import {Notification} from '../Notification/Notification'
import React from 'react';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  addFeedback = (event) => {
    const feedback = event.target.value;
    this.setState(prevState => {
      switch (feedback.toLowerCase()) {
        case 'good':
          return {good: prevState.good + 1}
        case 'neutral':
          return {neutral: prevState.neutral + 1}
        case 'bad':
          return {bad: prevState.bad + 1}
        default:
          break;
      }
    })
  }

  countTotalFeedback = () => {
    const {good, bad, neutral} = this.state;
    return (good + bad + neutral);
  }
  
  countPositiveFeedbackPercentage = () => {
    if(this.state.good > 0) {
      return Math.round(this.state.good / this.countTotalFeedback() * 100);
    } else {
      return (0);
    }
  }

  render () {
    return (
      <Container>
        <Section>
          <Title>Please leave feedback</Title>
          <Feedback addFeedback={this.addFeedback}/>
        </Section>
        <Section>
          <Title>Statictics</Title>
          {this.countTotalFeedback() > 0 
            ?<Statistics state={this.state} 
          countTotalFeedback={this.countTotalFeedback} 
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}/>
            :<Notification message='There is no feedback'/>}
          </Section>
      </Container>
    );
  }
};

export default App;
