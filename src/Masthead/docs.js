/* @flow */

import React from 'react'
import MastheadString from '!raw!..//Masthead'
import { parse } from 'react-docgen'
import { convertDate } from 'scrubs-libs'
import { Masthead, Headline, Byline } from '../'

const Example = (): React.Element<*> => {
  return (
    <Masthead>
      <Headline>Consultation with Dr Mark Edmin</Headline>
      <Byline>{convertDate(new Date())}</Byline>
    </Masthead>
  )
}

const documentation: Object = parse(MastheadString)
export default { Example, documentation }
