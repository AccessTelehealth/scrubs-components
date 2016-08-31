import React from 'react'
import Input from './Input'

const TextArea = (props) => {
  return (
    <Input tagName='textarea' style={{resize: 'vertical'}} {...props} />
  )
}

export default TextArea
