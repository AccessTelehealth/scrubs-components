import classNames from 'classnames'
import styles from './layout.css'

export default ({
  alignBaseline, alignTop, alignMiddle, alignBottom, inline, block,
  inlineBlock, table, tableCell, overflowHidden, overflowScroll, overflowAuto,
  clearfix, left, right, fit, fillWidth, fillHeight, borderBox,
  absolute, relative, fixed,
  }) => {
  return classNames({
    [styles.alignBaseline]: alignBaseline,
    [styles.alignTop]: alignTop,
    [styles.alignMiddle]: alignMiddle,
    [styles.alignBottom]: alignBottom,
    [styles.inline]: inline,
    [styles.block]: block,
    [styles.inlineBlock]: inlineBlock,
    [styles.table]: table,
    [styles.tableCell]: tableCell,
    [styles.overflowHidden]: overflowHidden,
    [styles.overflowScroll]: overflowScroll,
    [styles.overflowAuto]: overflowAuto,
    [styles.clearfix]: clearfix,
    [styles.left]: left,
    [styles.right]: right,
    [styles.fit]: fit,
    [styles.fillWidth]: fillWidth,
    [styles.fillHeight]: fillHeight,
    [styles.borderBox]: borderBox,
    [styles.absolute]: absolute,
    [styles.relative]: relative,
    [styles.fixed]: fixed,
  })
}
