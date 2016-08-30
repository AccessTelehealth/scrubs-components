/* @flow */

import React from 'react'
import Grid from '../Grid'
import classnames from 'classnames'
import { bgBlueDark, bgGrey, bgRed, bgGreen, bgWhite, bgBlue, bgTransparent} from 'traits/colours.css'
import { px3, pt3 } from 'traits/padding.css'
import { bar } from 'traits/layout.css'
import { fixed, top0, left0, right0 } from 'traits/position.css'


type PropsType = {
  children?: Array<React.Element<any>> | React.Element<any>,
  fixed?: bool,
  backgroundColour?: 'blue' | 'red' | 'white' | 'grey' | 'greyDark' | 'green' | 'transparent' | 'blueDark',
}

/** Optionally fixed topbar for orientation and navigation */

const Topbar = (props: PropsType) : React.Element<any> => {
  const { children } = props
  const contents = Array.isArray(children)
    ? renderChildren(children)
    : <Grid cols={12} align='middle' textAlign='center'>{children}</Grid>
  return (
    <div className={topbarClasses(props)}>
      {contents}
    </div>
  )
}

const renderChildren = (children): React.Element<any> | false => {
  return (
    <div>
      <Grid cols={3} align='middle'>{children[0]}</Grid>
      <Grid cols={6} align='middle' textAlign='center'>{children[1]}</Grid>
      <Grid cols={3} align='middle' textAlign='right'>{children.length === 3 && children[2]}</Grid>
    </div>
  )
}

const topbarClasses = (props: PropsType): string => {
  return classnames(
      px3, pt3, bar, {
        [fixed]: props.fixed,
        [top0]: props.fixed,
        [left0]: props.fixed,
        [right0]: props.fixed,
        [bgBlue]: props.backgroundColour === 'blue',
        [bgBlueDark]: props.backgroundColour === 'blueDark',
        [bgTransparent]: props.backgroundColour === 'transparent',
        [bgWhite]: props.backgroundColour === 'white',
        [bgGreen]: props.backgroundColour === 'green',
        [bgRed]: props.backgroundColour === 'red',
        [bgGrey]: props.backgroundColour === 'grey',
      }
  )
}

export default Topbar
