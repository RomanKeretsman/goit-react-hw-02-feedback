import { Component } from 'react';

import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section';
import Notification from './components/Notification';
import Container from './components/Container';



export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = event => {
    const { name } = event.target;

    this.setState({ [name]: this.state[name] + 1 });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, val) => {
      return acc + val;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const good = this.state.good;
    const total = this.countTotalFeedback();
    const percentage = Math.round((good / total) * 100);
    return isNaN(percentage) ? 0 : percentage;
  };

  render() {
    const options = ['Good', 'Neutral', 'Bad'];
    const { good, neutral, bad } = this.state;
    const message = 'No feedback given';
    const {
      countTotalFeedback,
      countPositiveFeedbackPercentage,
      addFeedback,
    } = this;
    return (
      <Container>
        <Section title="Leave your feedback">
          <FeedbackOptions options={options} onLeaveFeedback={addFeedback} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message={message} />
          )}
        </Section>
      </Container>
    );
  }
}