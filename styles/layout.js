import classNames from 'classnames'
import styles from './layout.css'

export default ({
    verticalAlign, display, overflow, clearfix, float, width, height, boxSizing,
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
    [styles.fit]: width === 'fit',
    [styles.fillWidth]: width === 'fill',
    [styles.fillHeight]: height === 'fill',
    [styles.borderBox]: boxSizing === 'borderBox',
  })
}
