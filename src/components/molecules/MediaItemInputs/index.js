import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'

import { ReduxField, Heading, Button } from 'components'

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
`

const MediaItemInputs = (title, mediaLink, agencyName, agencyLink) => {
  return (
    <div>
      <Field name="title" label="Title" component={ReduxField} />
      <Field name="mediaLink" label="Webpage Url" component={ReduxField} />
      <Field name="agencyName" label="News Agency Name" component={ReduxField} />
      <Field name="agencyLink" label="News Agency Url" component={ReduxField} />
    </div>
  )
}

MediaItemInputs.propTypes = {
  title: PropTypes.String,
  mediaLink: PropTypes.String,
  agencyName: PropTypes.String,
  agencyLink: PropTypes.String
}

export default MediaItemInputs
