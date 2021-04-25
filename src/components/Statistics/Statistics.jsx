import PropTypes from 'prop-types';
import { v4 as randomID } from 'uuid';
import styles from './Statistics.module.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const positiveStats = positivePercentage();
  return (
    <ul className={styles.statisticsList}>
      <li key={randomID()} className={styles.statisticsItem}>
        <span className={styles.statisticsText}>Good: {good}</span>
      </li>
      <li key={randomID()} className={styles.statisticsItem}>
        <span className={styles.statisticsText}>Neutral: {neutral}</span>
      </li>
      <li key={randomID()} className={styles.statisticsItem}>
        <span className={styles.statisticsText}>Bad: {bad}</span>
      </li>
      <li key={randomID()} className={styles.statisticsItem}>
        <span className={styles.statisticsText}>Total: {total()}</span>
      </li>
      <li key={randomID()} className={styles.statisticsItem}>
        <span className={styles.statisticsText}>
          Positive feedback: {positiveStats}%
        </span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
export default Statistics;
