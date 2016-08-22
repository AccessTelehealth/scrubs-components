/* @flow */

import React from 'react'
import classnames from 'classnames'
import {
  fillBlueDark, fillBlue, fillGrey, fillGreyDark, fillRed, fillGreen,
  fillOffWhite, fillWhite, fillTransparent
} from 'traits/colours.css'
import { iconSmall, iconMedium, iconLarge} from 'traits/icons.css'
import {
  ArrowLeft, ArrowRight, Caduceus, Certificate, Chat,
  Clipboard, CreditCard, Cross, Download, Email, FlipCamera, Heart, History,
  Home, LogoStacked, Logout, Minus, Mute, Pathology, Phone, Plus, Prescription,
  Profile, PromoCode, Settings, SignOut, Speaker, Tick, Unmute, VideoCall,
} from 'scrubs-icons'

type IconType =
 'arrowLeft' | 'arrowRight' | 'caduceus' | 'certificate'| 'chat' | 'clipboard' |
 'creditCard' | 'cross' | 'download' | 'email' | 'clipCamera' | 'heart' |
 'history' | 'home' | 'logoStacked' | 'logout' | 'minus' | 'mute' | 'pathology' |
 'phone' | 'plus' | 'prescription' | 'profile' | 'promoCode' | 'settings' |
 'signOut' | 'speaker' | 'tick' | 'unmute'  | 'videoCall'


type PropsType = {
  icon?: IconType,
  colour?: 'blue' | 'red' | 'white' | 'grey' | 'greyDark' | 'green' | 'offWhite'
  | 'white' | 'transparent',
  size?: 'small' | 'large'
}

/** Icons are SVG images with fill colours and sizes */

const Icon = (props: PropsType): React.Element<any> => {
  return <span>{props.icon}</span>
}
      // {props.icon && renderIcon(props)}
//
// const renderIcon = (props: PropsType) => {
//   const icon = props.icon
//   switch (icon) {
//   case 'arrowLeft':
//     return <ArrowLeft className={iconClasses(props)} />
//   case 'arrowRight':
//     return <ArrowRight className={iconClasses(props)} />
//   case 'caduceus':
//     return <Caduceus className={iconClasses(props)} />
//   case 'certificate':
//     return <Certificate className={iconClasses(props)} />
//   case 'chat':
//     return <Chat className={iconClasses(props)} />
//   case 'clipboard':
//     return <Clipboard className={iconClasses(props)} />
//   case 'creditCard':
//     return <CreditCard className={iconClasses(props)} />
//   case 'cross':
//     return <Cross className={iconClasses(props)} />
//   case 'download':
//     return <Download className={iconClasses(props)} />
//   case 'email':
//     return <Email className={iconClasses(props)} />
//   case 'flipCamera':
//     return <FlipCamera className={iconClasses(props)} />
//   case 'heart':
//     return <Heart className={iconClasses(props)} />
//   case 'history':
//     return <History className={iconClasses(props)} />
//   case 'home':
//     return <Home className={iconClasses(props)} />
//   case 'logoStacked':
//     return <LogoStacked className={iconClasses(props)} />
//   case 'logout':
//     return <Logout className={iconClasses(props)} />
//   case 'minus':
//     return <Minus className={iconClasses(props)} />
//   case 'mute':
//     return <Mute className={iconClasses(props)} />
//   case 'pathology':
//     return <Pathology className={iconClasses(props)} />
//   case 'phone':
//     return <Phone className={iconClasses(props)} />
//   case 'plus':
//     return <Plus className={iconClasses(props)} />
//   case 'prescription':
//     return <Prescription className={iconClasses(props)} />
//   case 'profile':
//     return <Profile className={iconClasses(props)} />
//   case 'promoCode':
//     return <PromoCode className={iconClasses(props)} />
//   case 'settings':
//     return <Settings className={iconClasses(props)} />
//   case 'signOut':
//     return <SignOut className={iconClasses(props)} />
//   case 'speaker':
//     return <Speaker className={iconClasses(props)} />
//   case 'tick':
//     return <Tick className={iconClasses(props)} />
//   case 'unmute':
//     return <Unmute className={iconClasses(props)} />
//   case 'videoCall':
//     return <VideoCall className={iconClasses(props)} />
//   default:
//     return false
//   }
// }
//
// const iconClasses = (props: PropsType): string => {
//   return classnames(
//     {
//       [iconMedium]: !props.size,
//       [iconSmall]: props.size === 'small',
//       [iconLarge]: props.size === 'large',
//       [fillBlueDark]: !props.colour,
//       [fillBlue]: props.colour === 'blue',
//     }
//   )
// }

export default Icon
