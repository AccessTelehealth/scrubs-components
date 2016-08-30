/* @flow */

import React from 'react'
import classnames from 'classnames'
import { relative } from 'traits/position.css'
import { Icon, Input } from '../'

type PropsType = {
  children?: React.Element<any>,
}

/** A search input field **/

const SearchBar = (props: PropsType) : React.Element<any> => {
  return (
    <div className={searchBarClasses()}>
      <Icon icon="search" fill="greyDark" positioned />
      <Input
        value="Search"
        placeholder="Search" //or the search icon?
        onChange={(event) => {}}
        valid={true}
        inputType='search'
        textColour='greyDark'
        pill
      />
    </div>
  )
}

const searchBarClasses = (): string => {
  return classnames( relative )
}

export default SearchBar
