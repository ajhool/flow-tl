import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'

import { ReduxField, Heading, Button } from 'components'

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
`

const MediaItemInputs = ({ indexNumber, title, mediaLink, agencyName, agencyLink }) => {
  const arrayLabel = "media[item-"+indexNumber+"]"
  return (
    <div>
      <Field name={arrayLabel+"[title]"} label="Title" component={ReduxField} />
      <Field name={arrayLabel+"[mediaLink]"} label="Webpage Url" component={ReduxField} />
      <Field name={arrayLabel+"[agencyName]"} label="News Agency Name" component={ReduxField} />
      <Field name={arrayLabel+"[agencyLink]"} label="News Agency Url" component={ReduxField} />
    </div>
  )
}

MediaItemInputs.propTypes = {
  title: PropTypes.string,
  mediaLink: PropTypes.string,
  agencyName: PropTypes.string,
  agencyLink: PropTypes.string
}

export default MediaItemInputs
