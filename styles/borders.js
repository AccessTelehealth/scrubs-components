import classNames from 'classnames'
import styles from './borders.css'

export default ({
    border, borderTop, borderBottom, borderLeft, borderRight,
    rounded, roundedTop, roundedBottom, roundedLeft, roundedRight, circle
  }) => {
  return classNames({
    [styles.borderSmall]: border === 1,
    [styles.borderTopSmall]: borderTop === 1,
    [styles.borderBottomSmall]: borderBottom === 1,
    [styles.borderLeftSmall]: borderLeft === 1,
    [styles.borderRightSmall]: borderRight === 1,
    [styles.borderMedium]: border === 2,
    [styles.borderTopMedium]: borderTop === 2,
    [styles.borderBottomMedium]: borderBottom === 2,
    [styles.borderLeftMedium]: borderLeft === 2,
    [styles.borderRightMedium]: borderRight === 2,
    [styles.borderLarge]: border === 3,
    [styles.borderTopLarge]: borderTop === 3,
    [styles.borderBottomLarge]: borderBottom === 3,
    [styles.borderLeftLarge]: borderLeft === 3,
    [styles.borderRightLarge]: borderRight === 3,
    [styles.borderNone]: border === 0,
    [styles.rounded]: rounded,
    [styles.circle]: circle,
    [styles.roundedTop]: roundedTop,
    [styles.roundedRight]: roundedRight,
    [styles.roundedBottom]: roundedBottom,
    [styles.roundedLeft]: roundedLeft,
  })
}
