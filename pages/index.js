import React from 'react'

import Page from '@/components/page'
import PostsList from '@/components/posts-list'
import getPosts from '@/lib/get-posts'

const Blog = ({ posts }) => {
  return (
    <Page description="Notes for your cloud preparation">
      <article>
        <PostsList posts={posts} />
      </article>
    </Page>
  )
}

export const getStaticProps = () => {
  const posts = getPosts()

  return {
    props: {
      posts
    }
  }
}

export default Blog
