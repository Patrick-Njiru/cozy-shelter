import { emailIcon } from "../../../../../../data/blog-post"

const StickySubscribeCard = () => {
	return (
		<div className='hidden border top-4 bottom-0 space-y-6 p-6 py-10 rounded-2xl h-fit shadow-lg md:block md:w-[430px] lg:sticky lg:w-[30%]'>
			<img src={emailIcon} alt='email' />
			<h3 className='font-bold text-xl'>Subscribe to our newsletter</h3>
			<p>At risus viverra adipiscing at in tellus integer feugiat nisl pretiua</p>
			<input
				type='email'
				className='h-16 rounded-full ps-3 shadow border w-full outline outline-0 hover:outline-1 focus:outline-red-500'
				placeholder='Enter your email'
			/>
			<button
				to='/blog'
				className='w-full transition-all duration-500 ease-in-out bg-red-500 text-white px-6 py-4 text-lg font-semibold rounded-full relative top-0 border shadow-md hover:bg-red-600 hover:text-white hover:-top-1 sm:px-9 sm:py-6'
			>
				Subscribe
			</button>
		</div>
	)
}

export default StickySubscribeCard
