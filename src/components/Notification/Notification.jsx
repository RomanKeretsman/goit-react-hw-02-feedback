import PropTypes from 'prop-types';
import styles from './Notification.module.scss'

const Notification = ({ message }) => (
  <p className={styles.notificationText}>{message}</p>
);

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
