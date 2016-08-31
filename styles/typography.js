import classNames from 'classnames'
import styles from './typography.css'

export default ({
    fontSize, lineHeight, fontFamily, fontWeight, textAlign, italic, uppercase,
    spaced, antialiased, truncate, underline,
  }) => {
  return classNames({
    [styles.h1]: fontSize === 1,
    [styles.h2]: fontSize === 2,
    [styles.h3]: fontSize === 3,
    [styles.h4]: fontSize === 4,
    [styles.h5]: fontSize === 5,
    [styles.fontSizeInherit]: fontSize === 'inherit',
    [styles.lineHeight0]: lineHeight === 0,
    [styles.lineHeight1]: lineHeight === 1,
    [styles.lineHeight2]: lineHeight === 2,
    [styles.lineHeight3]: lineHeight === 3,
    [styles.lineHeight4]: lineHeight === 4,
    [styles.lineHeight5]: lineHeight === 5,
    [styles.sans]: fontFamily === 'sans',
    [styles.fontFamilyInherit]: fontFamily === 'inherit',
    [styles.bold]: fontWeight === 'bold',
    [styles.regular]: fontWeight === 'regular',
    [styles.leftAlign]: textAlign === 'left',
    [styles.centerAlign]: textAlign === 'center',
    [styles.rightAlign]: textAlign === 'right',
    [styles.justify]: textAlign === 'justify',
    [styles.italic]: italic,
    [styles.uppercase]: uppercase,
    [styles.spaced]: spaced,
    [styles.antialiased]: antialiased,
    [styles.truncate]: truncate,
    [styles.underline]: underline,
  })
}
