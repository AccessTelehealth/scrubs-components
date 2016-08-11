/* @flow */

import React from 'react'
import FieldString from '!raw!scrubs-components/Field'
import { parse, } from 'react-docgen'
import { Field, } from 'scrubs-components'
import { getFieldById, } from 'scrubs-libs'

type ValueType = string

type FieldType = {
  value: ValueType,
  placeholder: string,
  id: string,
  label: string,
  hint?: string,
  validateField: (id: string, fields: Array<any>) => string | true,
}

class example extends React.Component {
  state: {
    fields: Array<FieldType>
  }

  constructor() {
    super()
    this.state = {
      fields: [{
        label: 'Username',
        id: 'username',
        value: '',
        hint: 'Usernames are used for logins',
        placeholder: 'Placeholder',
        validateField: (id: string, fields: Array<FieldType>): string | true => {
          const field = getFieldById(id, fields)
          if (field.value.length < 5) {
            return 'Should be more than 5 characters'
          } else {
            return true
          }
        },
      },]
    }
  }

  updateField(id: string, values: {}) {
    this.setState({
      fields: [{
        ...this.state.fields[0],
        ...values,
      },]
    })
  }

  render(): React.Element<any>  {
    return (
      <Field
        id="username"
        fields={this.state.fields}
        editable={false}
        updateFieldValue={this.updateField.bind(this)} />
    )
  }
}

const documentation: Object = parse(FieldString)
export default { example, documentation, }
