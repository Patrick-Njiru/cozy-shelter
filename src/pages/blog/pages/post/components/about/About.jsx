import { blogPostImg } from "../../../../../../data/blogs"
import StickySubscribeCard from "./StickySubscribeCard"

const About = () => {
	return (
		<section className='mt-12 text-lg leading-loose'>
			<div className='relative flex flex-col space-y-8 justify-start px-6 sm:px-10 md:px-16 lg:space-y-0 lg:flex-row lg:justify-between'>
				<div className='space-y-8 lg:w-[66%]'>
					<h1 className='show-on-scroll text- text-3xl md:text-5xl font-bold'>
						Glamping is a different experience
					</h1>
					<p className='show-on-scroll text-gray-600'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim
						urna adipiscing praesent velit viverra sit semper lorem eu cursus vel
						hendrerit elementum morbi curabitur etiam nibh justo, lorem aliquet donec
						sed similem.
					</p>
					<div className='show-on-scroll text-gray-600'>
						<li>
							Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor
						</li>
						<li>
							Adipiscing elit ut aliquam purus sit amet viverra suspendisse potent i
						</li>
						<li>Mauris commodo quis imperdiet massa tincidunt nunc pulvinar</li>
						<li>
							Adipiscing elit ut aliquam purus sit amet viverra suspendisse potenti
						</li>
					</div>
					<h2 className='show-on-scroll text- text-2xl md:text-4xl font-bold'>
						Glamping doesn&apos;t need to be expensive
					</h2>
					<p className='show-on-scroll text-gray-600'>
						Vitae congue eu consequat ac felis placerat vestibulum lectus mauris
						ultrices cursus sit amet dictum sit amet justo donec enim diam porttitor
						lacus luctus accumsan tortor posuere praesent tristique magna sit amet purus
						gravida quis blandit turpis.
					</p>
					<img
						src={blogPostImg}
						alt='glamping'
						className='show-on-scroll w-full rounded-3xl'
					/>
					<p className='show-on-scroll text-gray-600'>
						At risus viverra adipiscing at in tellus integer feugiat nisl pretium fusce
						id velit ut tortor sagittis orci a scelerisque purus semper eget at lectus
						urna duis convallis. porta nibh venenatis cras sed felis eget neque laoreet
						suspendisse interdum consectetur libero id faucibus nisl donec pretium
						vulputate sapien nec sagittis aliquam nunc lobortis mattis aliquam faucibus
						purus in.
					</p>
					<h3 className='show-on-scroll text- text-xl md:text-3xl font-bold'>
						It&apos;s not for everyone, but if it&apos;s for you, you will love it
					</h3>
					<p className='show-on-scroll text-gray-600'>
						At risus viverra adipiscing at in tellus integer feugiat nisl pretium fusce
						id velit ut tortor sagittis orci a scelerisque purus semper eget at lectus
						urna duis convallis. porta nibh venenatis cras sed felis eget neque laoreet
						suspendisse interdum consectetur libero id faucibus nisl donec pretium
						vulputate sapien nec sagittis aliquam nunc lobortis mattis aliquam faucibus
						purus in.
					</p>
					<div className='show-on-scroll text-gray-600'>
						<li>
							Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor
						</li>
						<li>
							Adipiscing elit ut aliquam purus sit amet viverra suspendisse potent i
						</li>
						<li>Mauris commodo quis imperdiet massa tincidunt nunc pulvinar</li>
						<li>
							Adipiscing elit ut aliquam purus sit amet viverra suspendisse potenti
						</li>
					</div>
					<h4 className='show-on-scroll text- text-lg md:text-2xl font-bold'>
						What about glamping by yourself?
					</h4>
					<p className='show-on-scroll text-gray-600'>
						Nisi quis eleifend quam adipiscing vitae aliquet bibendum enim facilisis
						gravida neque. Velit euismod in pellentesque massa placerat volutpat lacus
						laoreet non curabitur gravida odio aenean sed adipiscing diam donec
						adipiscing tristique risus. amet est placerat in egestas erat imperdiet sed
						euismod nisi.
					</p>
					<div className='show-on-scroll block px-20 py-24 border shadow rounded-3xl text-xl md:text-2xl'>
						<q>
							Nisi quis eleifend quam adipiscing vitae aliquet bibendum enim facilisis
							gravida neque velit euismod in pellentesque massa placerat
						</q>
					</div>
					<h5 className='show-on-scroll text- md:text-xl font-bold'>
						Tell us about your Glamping experience
					</h5>
					<p className='show-on-scroll text-gray-600'>
						Eget lorem dolor sed viverra ipsum nunc aliquet bibendum felis donec et odio
						pellentesque diam volutpat commodo sed egestas aliquam sem fringilla ut
						morbi tincidunt augue interdum velit euismod eu tincidunt tortor aliquam
						nulla facilisi aenean sed adipiscing diam donec adipiscing ut lectus arcu
						bibendum at varius vel pharetra nibh venenatis cras sed felis eget dolor.
					</p>
				</div>
				<StickySubscribeCard />
			</div>
		</section>
	)
}

export default About
