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
      <Section position='absolute' width='fill' style={{top: '45%'}} paddingX={4}>
        <Text textColour='white' textAlign='center' fontSize={1} lineHeight={2} marginBottom={2}>
          Get a live medical consultation on your phone
        </Text>
        <Text textColour='white' fontWeight='bold' width='fill' textAlign='center' fontSize={2} lineHeight={2} marginBottom={4}>
          See how it works
        </Text>
        <Section paddingX={3}>
          <LargeBlueButton width='fill' marginBottom={2}>
            Sign Up
          </LargeBlueButton>
          <LargeButton width='fill' textColour='white'>
            Registered? Sign In
          </LargeButton>
        </Section>
      </Section>
      <Section position='absolute' width='fill' textAlign='center' style={{bottom: 0}} paddingX={4} paddingY={4}>
        <Text textColour='white' fontSize={3} fontWeight='bold'>Have a Question? Ask us</Text>
      </Section>
    </View>
  )
}

export default Welcome
