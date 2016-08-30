import classNames from 'classnames'
import styles from './typography.css'

export default ({
    fontSize, lineHeight, fontFamily, textDecoration, textAlign, bold, regular,
    italicised, uppercase, antialiased, truncate, underline, spaced,
  }) => {
  return classNames({
    [styles.h1]: fontSize === 1,
    [styles.h2]: fontSize === 2,
    [styles.h3]: fontSize === 3,
    [styles.h4]: fontSize === 4,
    [styles.h5]: fontSize === 5,
    [styles.fontSizeInherit]: fontSize === 'inherit',
    [styles.lineHeight1]: lineHeight === 1,
    [styles.lineHeight2]: lineHeight === 2,
    [styles.lineHeight3]: lineHeight === 3,
    [styles.lineHeight4]: lineHeight === 4,
    [styles.lineHeight5]: lineHeight === 5,
    [styles.sans]: fontFamily === 'sourceSansPro',
    [styles.fontFamilyInherit]: fontFamily === 'inherit',
    [styles.textDecorationNone]: textDecoration === 'none',
    [styles.bold]: bold,
    [styles.regular]: regular,
    [styles.italic]: italicised,
    [styles.caps]: uppercase,
    [styles.spaced]: spaced,
    [styles.leftAlign]: textAlign === 'left',
    [styles.center]: textAlign === 'center',
    [styles.rightAlign]: textAlign === 'right',
    [styles.justify]: textAlign === 'justify',
    [styles.antialiased]: antialiased,
    [styles.truncate]: truncate,
    [styles.underline]: underline,
  })
}
