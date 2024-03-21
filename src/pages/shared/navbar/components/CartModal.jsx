import { handleToggle } from "../../../../utils"

const CartModal = () => {
	return (
		<div
			id='cart'
			className='hidden transition-all duration-500 ease-in-out fixed top-0 bottom-0 start-0 end-0 bg-black bg-opacity-60 z-40 flex-col justify-center'
		>
			<div className='mx-auto bg-white text-gray-600 py-4 p-6 size-full z-50 sm:rounded-3xl sm:w-[490px] sm:h-fit'>
				<div className='flex justify-between items-center'>
					<h5 className='font-bold text-lg text-black'>Your Cart</h5>
					<button
						className='text-5xl rotate-45 hover:text-red-600'
						onClick={() => handleToggle('cart')}
					>
						+
					</button>
				</div>
				<div className='py-24 text-center'>No items found.</div>
			</div>
		</div>
	)
}

export default CartModal
