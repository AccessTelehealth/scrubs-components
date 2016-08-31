import classNames from 'classnames'
import styles from './images.css'

export default ({
    backgroundSize,
  }) => {
  return classNames({
    [styles.cover]: backgroundSize === 'cover',
    [styles.contain]: backgroundSize === 'contain',
  })
}
