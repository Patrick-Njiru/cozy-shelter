import { useState } from "react"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import contactData from "../../../data/contact"
import { handleSlide } from "../../../utils"

const OurLocations = () => {
	const [leftClicks, setLeftClicks] = useState(6)
	const [rightClicks, setRightClicks] = useState(0)

	return (
		<section className='bg-neutral-50 bg-opacity-50 relative pt-48 pb-32'>
			<div className='show-on-scroll flex flex-col space-y-6 justify-between px-6 sm:px-10 sm:flex-row sm:space-y-0 sm:space-x-6 sm:items-center md:px-16'>
				<h1 className='font-black text-2xl sm:w-1/2 sm:text-3xl md:text-4xl'>
					Our Locations
				</h1>
				<p className='text-gray-600 font-medium sm:w-1/2 md:text-lg'>
					Lorem ipsum dolor sit amet consectetur adipiscing elitolmi mauris convallis
					mauris ultricies dolor viverra.
				</p>
			</div>
			<div
				id='scroll-container-3'
				className='show-on-scroll transition-all duration-1000 ease-in-out max-w-screen overflow-x-scroll flex items-center justify-start pt-8 px-6 sm:px-10 md:px-16'
			>
				{contactData.ourLocations.map((locationDetails) => (
					<div
						key={locationDetails.id}
						className='relative me-9 min-w-full sm:min-w-[500px]'
					>
						<img src={locationDetails.img} className='opacity-0 w-full' />
						<div
							className='absolute top-0 bottom-0 start-0 end-0 flex flex-col justify-end rounded-xl text-white'
							style={{
								background: `url(${locationDetails.img}) no-repeat`,
								backgroundSize: "100% 100%",
								backgroundPosition: "center",
							}}
						>
							<div className='space-y-3 px-8 py-10 pt-20 sm:pt-80 bg-gradient-to-t from-black bg-opacity-50 rounded-b-xl'>
								<h1 className='font-extrabold text-xl sm:text-2xl md:text-3xl'>
									{locationDetails.title}
								</h1>
								<p className='font-bold'>{locationDetails.location}</p>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className='relative px-5 w-full flex justify-between top-[-300px] sm:px-9 md:px-12'>
				<button
					type='button'
					id='cabin-scroll-left'
					className={
						leftClicks == 6
							? "invisible "
							: "" +
							  "inline transition-all duration-500 ease-in-out bg-red-500 text-white p-5 text-2xl rounded-full z-20 hover:bg-red-600 hover:scale-95 sm:text-3xl"
					}
					onClick={() => handleSlide("left", "locations", setLeftClicks, setRightClicks)}
				>
					<BsArrowLeft />
				</button>
				<button
					type='button'
					id='cabin-scroll-right'
					className={
						rightClicks == 6
							? "invisible "
							: "" +
							  "inline transition-all duration-500 ease-in-out bg-red-500 text-white p-5 text-2xl rounded-full z-20 hover:bg-red-600 hover:scale-95 sm:text-3xl"
					}
					onClick={() => handleSlide("right", "locations", setRightClicks, setLeftClicks)}
				>
					<BsArrowRight />
				</button>
			</div>
		</section>
	)
}

export default OurLocations
