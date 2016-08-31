import classNames from 'classnames'
import styles from './images.css'

export default ({
    cover, contain,
  }) => {
  return classNames({
    [styles.cover]: cover,
    [styles.contain]: contain,
  })
}
