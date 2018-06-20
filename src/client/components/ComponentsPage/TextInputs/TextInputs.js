import React, { Fragment } from 'react'

import { TextInput, MultiLineText } from '@pearson-components/elements-sdk/build/dist.elements-sdk'

const TextInputs = () => (
  <Fragment>
    <h1>Text Input Fields</h1>
    <TextInput
      id="a"
      inputState="default"
      changeHandler={() => {}}
      labelText="First Name"
      placeholder="First Name"
      infoMessage="This is an info message"
      errorMessage="This is an error message"
    />
    <TextInput
      id="b"
      fancy
      inputState="default"
      changeHandler={() => {}}
      labelText="First Name"
      placeholder="First Name"
      infoMessage="This is an info message"
      errorMessage="This is an error message"
    />
    <TextInput
      id="c"
      inputState="error"
      changeHandler={() => {}}
      labelText="First Name"
      placeholder="First Name"
      infoMessage="This is an info message"
      errorMessage="This is an error message"
    />
    <TextInput
      id="d"
      fancy
      inputState="error"
      changeHandler={() => {}}
      labelText="First Name"
      placeholder="First Name"
      infoMessage="This is an info message"
      errorMessage="This is an error message"
    />
    <TextInput
      id="e"
      inputState="disabled"
      changeHandler={() => {}}
      labelText="First Name"
      placeholder="First Name"
      infoMessage="This is an info message"
      errorMessage="This is an error message"
    />
    <TextInput
      password
      fancy
      id="PasswordInputFancy"
      changeHandler={() => {}}
      labelText="Password"
      placeholder="Your password"
      infoMessage="This is an info message"
      errorMessage="This is an error message"
      showText="show"
      hideText="hide"
      isNotVisibleMsg="Password is hidden"
      isVisibleMsg="Password is visible"
    />
    <TextInput
      password
      id="PasswordInputBasic"
      changeHandler={() => {}}
      labelText="Password"
      placeholder="Your password"
      infoMessage="This is an info message"
      errorMessage="This is an error message"
      showText="show"
      hideText="hide"
      isNotVisibleMsg="Password is hidden"
      isVisibleMsg="Password is visible"
    />
    <TextInput
      password
      id="PasswordInputBasicError"
      inputState="error"
      changeHandler={() => {}}
      labelText="Password"
      value="12345"
      infoMessage="This is an info message"
      errorMessage="This is an error message"
      showText="show"
      hideText="hide"
      isNotVisibleMsg="Password is hidden"
      isVisibleMsg="Password is visible"
    />
    <MultiLineText
      id="Multi"
      labelText="Multi-line label"
      placeholder="Many words displayed over multiple lines."
      changeHandler={() => {}}
      infoMessage="This is an info message"
      errorMessage="This is an error message"
    />
    <MultiLineText
      id="Multi2"
      inputState="error"
      labelText="Multi-line label"
      placeholder="Many words displayed over multiple lines."
      changeHandler={() => {}}
      infoMessage="This is an info message"
      errorMessage="This is an error message"
    />
  </Fragment>
)

export default TextInputs
