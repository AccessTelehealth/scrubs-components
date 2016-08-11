/* @flow */

import React from 'react'
import styles from './index.css'

type PropsType = {
  url: string,
  small?: bool,
}

/** Avatars for user images */

const Avatar = (props: PropsType): React.Element<any> => {
  const className = props.small ? styles.AvatarSmall : styles.AvatarMedium
  const backgroundImage = `url('${props.url}')`
  return (
    <div className={className} style={{backgroundImage: backgroundImage,}} />
  )
}

export default Avatar
