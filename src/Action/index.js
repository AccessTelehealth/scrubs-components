/* @flow */

import React from 'react'
import styles from './index.css'
import { Text, Grid } from '../'
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


type IconSideType = 'left' | 'right'

type PropsType = {
  children?: React.Element<any>,
  icon?: IconType,
  iconSide?: IconSideType,
}

/** Actions are buttons with calls to action and icons */

const Action = (props: PropsType): React.Element<any> => {
  return (
    <span className={styles.Action}>
      {props.icon && props.iconSide !== 'right' && renderIcon(props)}
      <Grid align='middle'><Text size={'small'} colour={'blue'} bold>{ props.children }</Text></Grid>
      {props.icon && props.iconSide === 'right' && renderIcon(props)}
    </span>
  )
}

const renderIcon = (props: PropsType) => {
  const { icon, iconSide } = props
  const side = iconSide === 'left' ? styles.ActionIconLeft : styles.ActionIconRight
  switch (icon) {
  case 'arrowLeft':
    return <Grid align='middle'><ArrowLeft className={side} /></Grid>
  case 'arrowRight':
    return <Grid align='middle'><ArrowRight className={side} /></Grid>
  case 'caduceus':
    return <Grid align='middle'><Caduceus className={side} /></Grid>
  case 'certificate':
    return <Grid align='middle'><Certificate className={side} /></Grid>
  case 'chat':
    return <Grid align='middle'><Chat className={side} /></Grid>
  case 'clipboard':
    return <Grid align='middle'><Clipboard className={side} /></Grid>
  case 'creditCard':
    return <Grid align='middle'><CreditCard className={side} /></Grid>
  case 'cross':
    return <Grid align='middle'><Cross className={side} /></Grid>
  case 'download':
    return <Grid align='middle'><Download className={side} /></Grid>
  case 'email':
    return <Grid align='middle'><Email className={side} /></Grid>
  case 'flipCamera':
    return <Grid align='middle'><FlipCamera className={side} /></Grid>
  case 'heart':
    return <Grid align='middle'><Heart className={side} /></Grid>
  case 'history':
    return <Grid align='middle'><History className={side} /></Grid>
  case 'home':
    return <Grid align='middle'><Home className={side} /></Grid>
  case 'logoStacked':
    return <Grid align='middle'><LogoStacked className={side} /></Grid>
  case 'logout':
    return <Grid align='middle'><Logout className={side} /></Grid>
  case 'minus':
    return <Grid align='middle'><Minus className={side} /></Grid>
  case 'mute':
    return <Grid align='middle'><Mute className={side} /></Grid>
  case 'pathology':
    return <Grid align='middle'><Pathology className={side} /></Grid>
  case 'phone':
    return <Grid align='middle'><Phone className={side} /></Grid>
  case 'plus':
    return <Grid align='middle'><Plus className={side} /></Grid>
  case 'prescription':
    return <Grid align='middle'><Prescription className={side} /></Grid>
  case 'profile':
    return <Grid align='middle'><Profile className={side} /></Grid>
  case 'promoCode':
    return <Grid align='middle'><PromoCode className={side} /></Grid>
  case 'settings':
    return <Grid align='middle'><Settings className={side} /></Grid>
  case 'signOut':
    return <Grid align='middle'><SignOut className={side} /></Grid>
  case 'speaker':
    return <Grid align='middle'><Speaker className={side} /></Grid>
  case 'tick':
    return <Grid align='middle'><Tick className={side} /></Grid>
  case 'unmute':
    return <Grid align='middle'><Unmute className={side} /></Grid>
  case 'videoCall':
    return <Grid align='middle'><VideoCall className={side} /></Grid>
  default:
    return false
  }
}

export default Action
