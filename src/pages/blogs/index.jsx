import React from 'react'
import PropTypes from 'prop-types'
import { Hero, Trending } from './components'

const Blogs = props => {
  return (
    <div>
      {/* Hero */}
      <Hero />
      {/* Top Blogs and Resources */}
      <Trending />
    </div>
  )
}

Blogs.propTypes = {}

export default Blogs