import { Hero, Latest, Subscribe, Trending } from './components'
import blogsData from '../../data/blog'

const Blogs = () => {
  return (
    <div>
      {/* Hero */}
      <Hero />
      {/* Top Blogs and Resources */}
      <Trending trending={blogsData.trending} />
      {/* Subscribe */}
      <Subscribe />
      {/* Latest Posts */}
      <Latest latestPosts={blogsData.latestPosts} />
    </div>
  )
}

export default Blogs