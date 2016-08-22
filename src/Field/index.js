/* @flow */

import React from 'react'
import classnames from 'classnames'
import { mb2 } from 'traits/margin.css';
import { Input, Label, Hint } from '../'
import { getFieldById } from 'scrubs-libs'

type ValueType = string

type FieldType = {
  value: ValueType,
  placeholder: string,
  id: string,
  label: string,
  hint?: string,
  validateField: (id: string, fields: Array<any>) => string | true,
}

type PropsType = {
  fields: Array<FieldType>,
  id: string,
  editable: boolean,
  updateFieldValue: (id: string, values: {[key: string]: ValueType}) => void,
}

/** Wrapper for inputs with labels, valid states and hint */

class Field extends React.Component {
  props: PropsType

  onInputChange(event: Event) {
    const { updateFieldValue, id } = this.props
    event.preventDefault()
    let target = event.target
    let value = target instanceof HTMLInputElement ? target.value : ''
    updateFieldValue(id, {
      value: value,
    })
  }

  render(): React.Element<any> {
    const { fields, id } = this.props
    const field = getFieldById(id, fields)
    const {
      placeholder, label, hint, validateField, value,
    } = field
    const errorMessage = validateField(id, fields)
    const fieldIsInvalid = typeof errorMessage === 'string'
    const errorText =  typeof errorMessage === 'string' ? errorMessage : 'No errors'
    const fieldHasError = fieldIsInvalid && value.length !== 0
    const hintText = fieldHasError ? errorText : hint
    return (
      <div className={fieldClasses()}>
        <Label text={label} />
        <Input
          value={value}
          placeholder={placeholder}
          valid={!fieldHasError}
          onChange={this.onInputChange.bind(this)}
        />
        {hintText && <Hint text={hintText} error={fieldHasError} />}
      </div>
    )
  }
}

const fieldClasses = (): string => {
  return classnames(mb2)
}

export default Field
