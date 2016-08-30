import classNames from 'classnames'
import styles from './colours.css'

export default ({
    textColour, fillColour, backgroundColour, borderColour
  }) => {
  return classNames({
    [styles.textBlue]: textColour === 'blue',
    [styles.textBlueDark]: textColour === 'blueDark',
    [styles.textGrey]: textColour === 'grey',
    [styles.textGreyDark]: textColour === 'greyDark',
    [styles.textRed]: textColour === 'red',
    [styles.textGreen]: textColour === 'green',
    [styles.textOffWhite]: textColour === 'offWhite',
    [styles.textWhite]: textColour === 'white',
    [styles.textTransparent]: textColour === 'transparent',
    [styles.fillBlue]: fillColour === 'blue',
    [styles.fillBlueDark]: fillColour === 'blueDark',
    [styles.fillGrey]: fillColour === 'grey',
    [styles.fillGreyDark]: fillColour === 'greyDark',
    [styles.fillRed]: fillColour === 'red',
    [styles.fillGreen]: fillColour === 'green',
    [styles.fillOffWhite]: fillColour === 'offWhite',
    [styles.fillWhite]: fillColour === 'white',
    [styles.fillTransparent]: fillColour === 'transparent',
    [styles.bgBlue]: backgroundColour === 'blue',
    [styles.bgBlueDark]: backgroundColour === 'blueDark',
    [styles.bgGrey]: backgroundColour === 'grey',
    [styles.bgGreyDark]: backgroundColour === 'greyDark',
    [styles.bgRed]: backgroundColour === 'red',
    [styles.bgGreen]: backgroundColour === 'green',
    [styles.bgOffWhite]: backgroundColour === 'offWhite',
    [styles.bgWhite]: backgroundColour === 'white',
    [styles.bgTransparent]: backgroundColour === 'transparent',
    [styles.borderBlue]: borderColour === 'blue',
    [styles.borderBlueDark]: borderColour === 'blueDark',
    [styles.borderGrey]: borderColour === 'grey',
    [styles.borderGreyDark]: borderColour === 'greyDark',
    [styles.borderRed]: borderColour === 'red',
    [styles.borderGreen]: borderColour === 'green',
    [styles.borderOffWhite]: borderColour === 'offWhite',
    [styles.borderWhite]: borderColour === 'white',
    [styles.borderTransparent]: borderColour === 'transparent',
  })
}
