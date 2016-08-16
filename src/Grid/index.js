/* @flow */

import React from 'react'
import styles from './index.css'

type PropsType = {
  children?:React.Element<any>,
  cols: 1|2|3|4|5|6|7|8|9|10|11|12,
  align?: 'top'|'middle'|'bottom'|'baseline',
  textAlign?: 'right'|'left'|'center'
}

/** Grid component for breaking up lists */

const Grid = (props: PropsType): React.Element<any> => {
  const style = {
    width: `${props.cols / 12 * 100}%`
  }
  const align = props.align ? capitaliseFirstLetter(props.align) : 'Normal'
  const textAlign = props.textAlign ? capitaliseFirstLetter(props.textAlign) : 'Normal'
  const className = styles[`Grid${align}${textAlign}`]
  return (
    <div className={className} style={style}>
      {props.children}
    </div>
  )
}

function capitaliseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default Grid
