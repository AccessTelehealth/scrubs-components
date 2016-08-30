import classNames from 'classnames'
import styles from './paddings.css'

export default ({
    padding, paddingTop, paddingBottom, paddingLeft, paddingRight, paddingX, paddingY
  }) => {
  return classNames({
    [styles.p0]: padding === 0,
    [styles.p1]: padding === 1,
    [styles.p2]: padding === 2,
    [styles.p3]: padding === 3,
    [styles.p4]: padding === 4,
    [styles.pt0]: paddingTop === 0,
    [styles.pt1]: paddingTop === 1,
    [styles.pt2]: paddingTop === 2,
    [styles.pt3]: paddingTop === 3,
    [styles.pt4]: paddingTop === 4,
    [styles.pb0]: paddingBottom === 0,
    [styles.pb1]: paddingBottom === 1,
    [styles.pb2]: paddingBottom === 2,
    [styles.pb3]: paddingBottom === 3,
    [styles.pb4]: paddingBottom === 4,
    [styles.pl0]: paddingLeft === 0,
    [styles.pl1]: paddingLeft === 1,
    [styles.pl2]: paddingLeft === 2,
    [styles.pl3]: paddingLeft === 3,
    [styles.pl4]: paddingLeft === 4,
    [styles.pr0]: paddingRight === 0,
    [styles.pr1]: paddingRight === 1,
    [styles.pr2]: paddingRight === 2,
    [styles.pr3]: paddingRight === 3,
    [styles.pr4]: paddingRight === 4,
    [styles.px0]: paddingX === 0,
    [styles.px1]: paddingX === 1,
    [styles.px2]: paddingX === 2,
    [styles.px3]: paddingX === 3,
    [styles.px4]: paddingX === 4,
    [styles.py0]: paddingY === 0,
    [styles.py1]: paddingY === 1,
    [styles.py2]: paddingY === 2,
    [styles.py3]: paddingY === 3,
    [styles.py4]: paddingY === 4,
  })
}
