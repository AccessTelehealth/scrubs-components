/* @flow */

import React from 'react'
import classnames from 'classnames'
import  { ml1 , mr1 } from 'traits/margin.css'
import  { right, left } from 'traits/layout.css'
import { Text, Grid, Icon } from '../'



type IconSideType = 'left' | 'right'

type PropsType = {
  children?: React.Element<any>,
  iconSide?: IconSideType,
}

/** Actions are buttons with calls to action and icons */

const Action = (props: PropsType): React.Element<any> => {
  return (
    <span className={actionClasses(props)}>
      <Grid align='middle'>
        {props.icon && props.iconSide !== 'right' && <Icon size={props.size} icon={props.icon}/>}
      </Grid>
      <Grid><Text size='h5' colour='blue' bold>{props.children}</Text></Grid>
      <Grid align='middle'>
        {props.icon && props.iconSide == 'right' && <Icon size='small' icon={props.icon}/>}
      </Grid>
    </span>
  )
}

const actionClasses = (props: PropsType): string => {
  return classnames(
    {
      [left]: !props.iconSide,
      [right]: props.iconSide === 'right',
      [ml1]: !props.iconSide,
      [mr1]: props.iconSide === 'right',
    }
  )
}


export default Action
