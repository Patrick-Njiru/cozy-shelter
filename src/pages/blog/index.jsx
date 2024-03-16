import React from 'react'
import PropTypes from 'prop-types'
import { Hero, Trending } from './components'
import blogsData from '../../data/blog'

const Blogs = props => {
  return (
    <div>
      {/* Hero */}
      <Hero />
      {/* Top Blogs and Resources */}
      <Trending trending={blogsData.trending} />
    </div>
  )
}

Blogs.propTypes = {}

export default Blogs