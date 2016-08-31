import React from 'react'
import Text from './Text'

const TabLabel = ({ active, ...props }) => {
  return (
    <Text
      fontWeight='bold' fontSize={5} textAlign='center' textColour={active ? 'blue' : 'greyDark'}
      paddingY={3} {...props}
    />
  )
}

export default TabLabel
