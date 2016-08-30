/** @flow **/


import React from 'react'
import classnames from 'classnames'
import { Icon } from '../'
import { circle } from 'traits/borders.css'
import { inlineBlock } from 'traits/layout.css'
import { lineHeight0 } from 'traits/typography.css'
import {
  bgBlueDark, bgGrey, bgRed, bgGreen, bgWhite, bgBlue, bgBlueOpaque,
} from 'traits/colours.css'

type PropsType = {
  children?: React.Element<any>,
  backgroundColour?: 'blue' | 'red' | 'white' | 'grey' | 'greyDark' | 'blueOpaque',
}

/** IconBackground is an Icon with a round background of optional colours  **/

const IconBackground = (props: PropsType): React.Element<any> => {
  return (
    <div className={iconBackgroundClasses(props)}>
      <Icon icon={props.icon} size={props.size} fill={props.fill}/>
    </div>
  )
}


const iconBackgroundClasses = (props: PropsType): string => {
  return classnames(
    circle, inlineBlock, lineHeight0,
    {
      [bgGrey]: !props.backgroundColour,
      [bgBlueOpaque]: props.backgroundColour === 'blueOpaque',
      [bgBlueDark]: props.backgroundColour === 'blueDark',
      [bgWhite]: props.backgroundColour === 'white',
      [bgGreen]: props.backgroundColour === 'green',
      [bgRed]: props.backgroundColour === 'red',
    }
  )
}




export default IconBackground
