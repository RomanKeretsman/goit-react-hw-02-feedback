import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.scss';
import { v4 as randomID } from 'uuid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={styles.feedbackBtnWrapper}>
    {options.map(option => (
      <button
        key={randomID()}
        type="button"
        className={styles.feedbackBtn}
        name={option.toLowerCase()}
        onClick={event => {
          onLeaveFeedback(event);
        }}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
