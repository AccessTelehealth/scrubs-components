/* @flow */

import React from 'react'
import styles from './index.css'
import { Text, Grid } from '../'
import { ArrowLeft, ArrowRight } from 'scrubs-icons'

type IconType = 'right' | 'left'

type PropsType = {
  children?: React.Element<any>,
  icon?: IconType,
}

/** Actions are buttons with calls to action and icons */

const Action = (props: PropsType): React.Element<any> => {
  return (
    <span className={styles.Action}>
      {props.icon && props.icon === 'left' && renderIcon(props.icon)}
      <Grid align='middle'><Text small blue bold>{ props.children }</Text></Grid>
      {props.icon && props.icon !== 'left' && renderIcon(props.icon)}
    </span>
  )
}

const renderIcon = (icon: IconType): React.Element<any> | false => {
  switch (icon) {
  case 'right':
    return <Grid align='middle'><ArrowRight className={styles.ActionIconRight} /></Grid>
  case 'left':
    return <Grid align='middle'><ArrowLeft className={styles.ActionIconLeft} /></Grid>
  default:
    return false
  }
}

export default Action
