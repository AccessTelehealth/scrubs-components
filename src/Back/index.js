/* @flow */

import React from 'react'
import Action from '../Action'
import Link from '../Link'

type PropsType = {
  to?: string,
  onClick?: () => void
}

/** Back button to return to the previous page */

const Back = (props: PropsType): React.Element<any> => {
  return (
    <Link to={props.to && props.to} onClick={props.onClick && props.onClick}>
      <Action icon="left">
        Back
      </Action>
    </Link>
  )
}

export default Back
