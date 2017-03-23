import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { TagInputs, Button } from 'components'

const Wrapper = styled.div`
  & > * {
    margin: 1rem;
  }
`

const TagInputsList = ({ addItem, list, ...props }) => {
  return (
    <Wrapper {...props}>
      {list.map((tagInput, idx) => (<TagInputs key={'itemInputs-'+idx} indexNumber={idx} {...tagInput} />))}
      <TagInputs key={'itemInputs-'+list.length} indexNumber={list.length} />
      <Button>Save Tag</Button>
    </Wrapper>
  )
}

TagInputsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  addItem: PropTypes.func.isRequired
}

export default TagInputsList
