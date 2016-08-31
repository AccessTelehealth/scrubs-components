import React from 'react'
import View from '../components/View'
import Icon from '../components/Icon'
import LogoIcon from '../icons/Logo.svg'
import welcomeBackground from '../images/app-in-hand.png'

const Welcome = (props) => {
  return (
    <View cover backgroundImage={welcomeBackground}>
      <Icon icon={LogoIcon} fillWhite />
    </View>
  )
}

export default Welcome
