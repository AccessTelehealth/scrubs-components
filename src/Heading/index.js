/* @flow */

import React from 'react'
import { mb1 } from 'traits/margin.css';
import classnames from 'classnames'
import Text from '../Text'

type PropsType = {
  children?:React.Element<any>
}

/** A heading, used to denote the start of a Section */

const Heading = (props: PropsType) : React.Element<any> => {
  return (
    <div className={headingClasses()}>
      <Text tag="h3" blue>
        {props.children}
      </Text>
    </div>
  )
}


const headingClasses = (): string => {
  return classnames(mb1)
}


export default Heading
