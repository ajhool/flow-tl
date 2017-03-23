import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'

import { ReduxField, Heading, Button } from 'components'

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
`

const TagInputs = ({indexnumber, keyword, score}) => {
  const arrayLabel = "tags[item-" + indexnumber + "]"

  return (
    <div>
      <Field name={arrayLabel+"[keyword]"} label="Keyword" component={ReduxField} />
      <Field name={arrayLabel+"[score]"} label="Score" component={ReduxField} />
    </div>
  )
}

TagInputs.propTypes = {
  keyword: PropTypes.string,
  score: PropTypes.number
}

export default TagInputs
