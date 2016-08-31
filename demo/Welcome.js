import React from 'react'
import View from '../components/View'
import Icon from '../components/Icon'
import Section from '../components/Section'
import LargeBlueButton from '../components/LargeBlueButton'
import LargeButton from '../components/LargeButton'
import Text from '../components/Text'
import LogoIcon from '../icons/Logo.svg'
import welcomeBackground from '../images/app-in-hand.png'

const Welcome = () => {
  return (
    <View backgroundSize='cover' backgroundImage={welcomeBackground}>
      <Icon icon={LogoIcon} fillColour='white' size={1/3} marginTop={3} marginLeft={3} />
      <Section absolute fillWidth style={{top: '45%'}} paddingX={4}>
        <Text textWhite centerAlign fontSize={1} lineHeight={2} marginBottom={2}>
          Get a live medical consultation on your phone
        </Text>
        <Text textWhite bold fillWidth centerAlign fontSize={2} lineHeight={2} marginBottom={4}>
          See how it works
        </Text>
        <Section paddingX={3}>
          <LargeBlueButton fillWidth marginBottom={2}>
            Sign Up
          </LargeBlueButton>
          <LargeButton fillWidth borderWhite textWhite>
            Registered? Sign In
          </LargeButton>
        </Section>
      </Section>
      <Section absolute fillWidth centerAlign style={{bottom: 0}} paddingX={4} paddingY={4}>
        <Text textWhite fontSize={3} bold>Have a Question? Ask us</Text>
      </Section>
    </View>
  )
}

export default Welcome
