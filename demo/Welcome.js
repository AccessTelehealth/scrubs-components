import React from 'react'
import View from '../components/View'
import Icon from '../components/Icon'
import Section from '../components/Section'
import Text from '../components/Text'
import LogoIcon from '../icons/Logo.svg'
import welcomeBackground from '../images/app-in-hand.png'

const Welcome = () => {
  return (
    <View cover backgroundImage={welcomeBackground}>
      <Icon icon={LogoIcon} fillWhite size={1/3} marginTop={3} marginLeft={3} />
      <Section>
        <Text textWhite>Get a live medical consultation on your phone</Text>
      </Section>
    </View>
  )
}

export default Welcome
