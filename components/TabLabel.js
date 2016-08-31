import React from 'react'
import Text from './Text'

const TabLabel = ({ active, ...props }) => {
  return (
    <Text
      bold fontSize={5} centerAlign textBlue={active} textGreyDark={!active}
      paddingY={3} {...props}
    />
  )
}

export default TabLabel
