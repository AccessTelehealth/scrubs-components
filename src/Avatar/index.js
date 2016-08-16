/* @flow */

import React from 'react'
import styles from './index.css'

type PropsType = {
  url: string,
  small?: boolean,
  fill?: boolean
}

/** Avatars for user images */

const Avatar = (props: PropsType): React.Element<any> => {
  let className = props.small ? styles.AvatarSmall : styles.AvatarMedium
  className = props.fill ? styles.AvatarFill : className
  const backgroundImage = `url('${props.url}')`
  return (
    <div className={className} style={{backgroundImage: backgroundImage,}} />
  )
}

export default Avatar
