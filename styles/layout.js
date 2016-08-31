import classNames from 'classnames'
import styles from './layout.css'

export default ({
  verticalAlign, display, overflow, clearfix, float, width, height, borderBox, position
  }) => {
  return classNames({
    [styles.alignBaseline]: verticalAlign === 'baseline',
    [styles.alignTop]: verticalAlign === 'top',
    [styles.alignMiddle]: verticalAlign === 'middle',
    [styles.alignBottom]: verticalAlign === 'bottom',
    [styles.inline]: display === 'inline',
    [styles.block]: display === 'block',
    [styles.inlineBlock]: display === 'inlineBlock',
    [styles.table]: display === 'table',
    [styles.tableCell]: display === 'tableCell',
    [styles.overflowHidden]: overflow === 'hidden',
    [styles.overflowScroll]: overflow === 'scroll',
    [styles.overflowAuto]: overflow === 'auto',
    [styles.clearfix]: clearfix,
    [styles.left]: float === 'left',
    [styles.right]: float === 'right',
    [styles.fitWidth]: width === 'fit',
    [styles.fillWidth]: width === 'fill',
    [styles.fitHeight]: height === 'fit',
    [styles.fillHeight]: height === 'fill',
    [styles.borderBox]: borderBox,
    [styles.absolute]: position === 'absolute',
    [styles.relative]: position === 'relative',
    [styles.fixed]: position === 'fixed',
  })
}
