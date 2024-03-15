import React, { useState } from "react"
import PropTypes from "prop-types"
import { woodCabin } from "../../../data/blogs"

const Trending = ({ a }) => {
	const [isHovered, setIsHovered] = useState(false)
	return (
		<section className='px-6 sm:px-10 md:px-16 mt-10'>
			<div className='justify-between lg:flex'>
				<div
					className='relative rounded-3xl h-[550px] lg:w-[45%] lg:h-screen'
					onMouseOver={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<img src={woodCabin} alt='woodcabin' className='opacity-0 size-full' />

					<div
						className='absolute rounded-3xl bg-blend-darken start-0 end-0 top-0 bottom-0 z-10 transition-all duration-600 ease-linear p-6 py-8 pb-0'
						style={{
							background: `rgba(0,0,0,0.4) url(${woodCabin}) no-repeat`,
							backgroundSize: isHovered ? "110% 110%" : "100% 100%",
							backgroundPosition: "center",
						}}
					>
						<div className='flex justify-end'>
						<h4 className='text-lg bg-white rounded-full p-3 py-2 w-fit font-medium z-10 h-1/5'>
							Resources
						</h4>
          </div>
          <div className="flex h-4/5 items-end">
					<div className='text-white space-y-3'>
						<p className='text-lg font-light'>April 5, 2022</p>
						<p className='font-bold text-2xl'>
							30 magical wood cabin ideas to inspire your next-off vacation
						</p>
						<p className='text-lg font-light'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
							inventore eveniet, natus perferendis nostrum mollitia quas asperiores.
						</p>
					</div>

          </div>
					</div>
				</div>
				<div className='h-full lg:w-1/2'></div>
			</div>
		</section>
	)
}

Trending.propTypes = {}

export default Trending
