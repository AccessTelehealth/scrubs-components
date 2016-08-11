/* @flow */

import React from 'react'
import styles from './index.css'
import Text from 'scrubs-components/Text'
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
      <Text small blue bold>{ props.children }</Text>
      {props.icon && props.icon !== 'left' && renderIcon(props.icon)}
    </span>
  )
}

const renderIcon = (icon: IconType): React.Element<any> | false => {
  switch (icon) {
  case 'right':
    return <ArrowRight className={styles.ActionIconRight} />
  case 'left':
    return <ArrowLeft className={styles.ActionIconLeft} />
  default:
    return false
  }
}

export default Action
