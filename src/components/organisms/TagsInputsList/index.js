import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { TagsInputs, Button } from 'components'

const Wrapper = styled.div`
  & > * {
    margin: 1rem;
  }
`

const TagsInputsList = ({ list, loading, ...props }) => {
  return (
    <Wrapper {...props}>
      {list.map((tagInput, idx) => (
          <TagsInputs key={'itemInputs-'+idx} indexNumber={idx} {...tagInput} />
        )
      )}
      <TagsInputs key={'itemInputs-'+list.length} indexNumber={list.length} />
      <Button>Add Tag</Button>
    </Wrapper>
  )
}

TagsInputsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool,
}

export default TagsInputsList
