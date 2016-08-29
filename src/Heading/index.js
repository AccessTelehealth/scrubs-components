/* @flow */

import React from 'react'
import { mb1 } from 'traits/margin.css'
import { py2 } from 'traits/padding.css'
import { borderSmallBottom } from 'traits/borders.css'
import { borderBlueDark } from 'traits/colours.css'
import classnames from 'classnames'
import Text from '../Text'

type PropsType = {
  children?: React.Element<any>,
  border?: boolean
}

/** A heading, used to denote the start of a Section */

const Heading = (props: PropsType) : React.Element<any> => {
  return (
    <div className={headingClasses(props)}>
      <Text colour='blue' tag='h3' size='h3' >
        {props.children}
      </Text>
    </div>
  )
}

const headingClasses = (props: PropsType): string => {
  return classnames(
      mb1,
    {
      [borderSmallBottom]: props.border,
      [borderBlueDark]: props.border,
      [py2]: props.border,
    }
  )
}

export default Heading
