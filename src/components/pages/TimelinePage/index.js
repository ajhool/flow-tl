import React from 'react'
import Helmet from 'react-helmet'

import { PageTemplate, Header, Footer, FilterBuilder } from 'components'
import { PostForm, PostList } from 'containers'

const TimelinePage = ({filterList=[]}) => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Helmet title="Timeline" />
      <FilterBuilder list={filterList}/>
      <PostList limit={50} />
    </PageTemplate>
  )
}

export default TimelinePage
