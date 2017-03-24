import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { CardPost } from 'components'

const Wrapper = styled.div`
  & > * {
    margin: 1rem;
  }
`

const PostList = ({ list, loading, ...props }) => {
  return (
    <Wrapper {...props}>
      {loading && <div>Loading</div>}
      {list.map(post => <CardPost key={post.id} loading={loading} {...post} />)}
    </Wrapper>
  )
}

PostList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool,
}

export default PostList
