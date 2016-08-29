/* @flow */

import React from 'react'
import classnames from 'classnames'
import { fillHeight } from 'traits/layout.css'
import { ptBar } from 'traits/padding.css'
import { bgCover, bgCenter } from 'traits/images.css'
import {
  bgBlueDark, bgGrey, bgRed, bgGreen, bgWhite, bgBlue,
} from 'traits/colours.css'



type PropsType = {
  children?: React.Element<any>,
  padTop?: bool,
  backgroundColour?: 'blue' | 'red' | 'white' | 'grey' | 'greyDark',
  backgroundImageURL?: string
}

/** Wrapper for all routes or unique views */

const View = (props: PropsType): React.Element<any> => {
  const { children, backgroundImageURL } = props
  const backgroundImage = (backgroundImageURL && `url(${backgroundImageURL})`)
  return (
    <div className={viewClasses(props)} style={backgroundImage && {backgroundImage: backgroundImage}} >
      {children}
    </div>
  )
}

const viewClasses = (props: PropsType): string => {
  return classnames(
    fillHeight, {
      [ptBar]: props.padTop,
      [ptBar]: props.padTop,
      [bgBlue]: props.backgroundColour === 'blue',
      [bgBlueDark]: props.backgroundColour === 'blueDark',
      [bgWhite]: props.backgroundColour === 'white',
      [bgGreen]: props.backgroundColour === 'green',
      [bgRed]: props.backgroundColour === 'red',
      [bgGrey]: props.backgroundColour === 'grey',
      [bgCover]: props.backgroundImageURL,
      [bgCenter]: props.backgroundImageURL,
    }
  )
}

export default View
