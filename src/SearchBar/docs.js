/* @flow */

import React from 'react'
import SearchBarString from '!raw!..//SearchBar'
import { parse } from 'react-docgen'
import { SearchBar } from '../'

const Example = (): React.Element<*> => {
  return (
    <SearchBar
      value="Search"
      placeholder="Search"
      onChange={(event) => {}}
      valid={true}
    />
  )
}

const documentation: Object = parse(SearchBarString)
export default { Example, documentation }
