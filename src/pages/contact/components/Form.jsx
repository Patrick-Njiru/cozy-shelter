import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube } from "react-icons/bi"

const Form = () => {
	return (
		<section className='px-6'>
			<form className='show-on-scroll relative -top-80 border rounded-3xl bg-white p-10 mx-auto w-full shadow-xl space-y-6 md:p-20 md:w-[700px]'>
				<div className='flex flex-col space-y-6 justify-between sm:flex-row sm:space-y-0'>
					<div className='show-on-scroll flex flex-col space-y-3 md:w-[47%]'>
						<label
							htmlFor='name'
							className='font-bold text-center sm:text-start md:text-lg'
						>
							Full name
						</label>
						<input
							type='text'
							id='name'
							placeholder='Name'
							className='border p-4 py-4 shadow rounded-full outline outline-red-500 outline-0 hover:outline-1 focus:outline-1 focus:outline-red-500 md:py-5'
						/>
					</div>
					<div className='show-on-scroll flex flex-col space-y-3 md:w-[47%]'>
						<label
							htmlFor='email'
							className='font-bold text-center sm:text-start md:text-lg'
						>
							Email address
						</label>
						<input
							type='email'
							id='email'
							placeholder='example@email.com'
							className='border p-4 py-4 shadow rounded-full outline outline-red-500 outline-0 hover:outline-1 focus:outline-1 focus:outline-red-500 md:py-5'
						/>
					</div>
				</div>
				<div className='flex flex-col space-y-6 justify-between sm:flex-row sm:space-y-0'>
					<div className='show-on-scroll flex flex-col space-y-3 md:w-[47%]'>
						<label
							htmlFor='phone'
							className='font-bold text-center sm:text-start md:text-lg'
						>
							Phone
						</label>
						<input
							type='tel'
							id='phone'
							placeholder='(123) 456 - 789'
							className='border p-4 py-4 shadow rounded-full outline outline-red-500 outline-0 hover:outline-1 focus:outline-1 focus:outline-red-500 md:py-5'
						/>
					</div>
					<div className='show-on-scroll flex flex-col space-y-3 md:w-[47%]'>
						<label
							htmlFor='subject'
							className='font-bold text-center sm:text-start md:text-lg'
						>
							Subject
						</label>
						<input
							type='text'
							id='subject'
							placeholder='ex. Support'
							className='border p-4 py-4 shadow rounded-full outline outline-red-500 outline-0 hover:outline-1 focus:outline-1 focus:outline-red-500 md:py-5'
						/>
					</div>
				</div>
				<div className='show-on-scroll flex flex-col space-y-3'>
					<label
						htmlFor='message'
						className='font-bold text-center sm:text-start md:text-lg'
					>
						Message
					</label>
					<textarea
						name=''
						id='message'
						cols='30'
						rows='5'
						placeholder='Please type your message here...'
						className='border p-4 py-4 shadow rounded-2xl outline outline-0 hover:outline-1 focus:outline-1 focus:outline-red-500 md:py-5'
					></textarea>
				</div>
				<div className='flex flex-col space-y-6 justify-between items-center sm:space-y-0 sm:flex-row'>
					<button
						type='submit'
						to='/about'
						className='show-on-scroll inline transition-all duration-500 ease-in-out bg-red-500 text-white px-7 py-4 font-semibold w-fit rounded-full relative top-0 hover:bg-red-600 hover:-top-1 sm:text-lg sm:px-10 sm:py-6'
						onClick={(e) => e.preventDefault()}
					>
						Submit
					</button>
					<div className='show-on-scroll flex justify-between space-x-4'>
						<BiLogoFacebook className='transition-all duration-500 ease-ease-in-out relative top-0 text-red-500 text-4xl p-2 border shadow-md rounded-full cursor-pointer hover:text-white hover:bg-red-500 hover:-top-1' />
						<BiLogoTwitter className='transition-all duration-500 ease-ease-in-out relative top-0 text-red-500 text-4xl p-2 border shadow-md rounded-full cursor-pointer hover:text-white hover:bg-red-500 hover:-top-1' />
						<BiLogoInstagram className='transition-all duration-500 ease-ease-in-out relative top-0 text-red-500 text-4xl p-2 border shadow-md rounded-full cursor-pointer hover:text-white hover:bg-red-500 hover:-top-1' />
						<BiLogoYoutube className='transition-all duration-500 ease-ease-in-out relative top-0 text-red-500 text-4xl p-2 border shadow-md rounded-full cursor-pointer hover:text-white hover:bg-red-500 hover:-top-1' />
					</div>
				</div>
			</form>
		</section>
	)
}

export default Form
