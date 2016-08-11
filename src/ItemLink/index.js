/* @flow */

import React from 'react'
import Item from 'scrubs-components/Item'
import Link from 'scrubs-components/Link'

type PropsType = {
  children: React.Element<any>,
  to?: string,
  onClick?: () => void
}

/** A simple wrapper for items that are also links  */

const ItemLink = (props: PropsType) : React.Element<any> => {
  const { children, to, onClick, } = props
  return (
    <Item>
      <Link to={to && to} onClick={onClick && onClick}>
        {children}
      </Link>
    </Item>
  )
}

export default ItemLink
