/* @flow */

import React from 'react'
import classnames from 'classnames'
import { circle } from 'traits/borders.css'
import { bgCover, bgCenter, imageSmall, imageMedium } from 'traits/images.css'
import { pt100 } from 'traits/padding.css'

type PropsType = {
  backgroundImageURL: string,
  size?: 'small' | 'fill',
}

/** Avatars for user images */

const Avatar = (props: PropsType): React.Element<any> => {
  const backgroundImage = `url(${props.backgroundImageURL})`
  return (
    <div className={avatarClasses(props)} style={{backgroundImage: backgroundImage}} />
  )
}

const avatarClasses = (props: PropsType): string => {
  return classnames(
    circle, bgCover, bgCenter, {
      [imageSmall]: props.size === 'small',
      [imageMedium]: !props.size,
      [pt100]: props.size === 'fill',
    }
  )
}

export default Avatar
