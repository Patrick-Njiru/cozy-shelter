import { NavLink } from "react-router-dom"
import {
	BiLogoFacebook,
	BiLogoInstagram,
	BiLogoTwitter,
	BiLogoYoutube,
	BiUpArrowAlt,
} from "react-icons/bi"
import footerImages from "../../../data/footer"
import InstagramImage from "./InstagramImage"
import { logo } from "../../../data"

const Footer = () => {
	return (
		<footer className='border-t py-24 px-6 sm:px-10 md:px-16'>
			<div className='flex flex-col space-y-12 md:space-y-0 md:justify-between md:flex-row md:flex-wrap'>
				<div className='mb-8 lg:my-0 lg:w-[30%]'>
					<NavLink
						to='/'
						className='transition-all duration-500 ease-in-out group flex space-x-3 hover:scale-95 hover:opacity-70'
					>
						<img
							src={logo}
							alt='logo'
							className='transition-all duration-500 ease-in-out h-8'
						/>
						<h1 className='font-black text-xl group-hover:scale-95 sm:text-2xl md:text-3xl'>
							<span>Cozy</span>
							<span className='text-red-800'>Shelter</span>
						</h1>
					</NavLink>
					<p className='text-gray-600 mt-6 mb-10'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
						repudiandae dolorem.
					</p>
					<div className='flex space-x-4'>
						<BiLogoFacebook className='transition-all duration-500 ease-ease-in-out relative top-0 text-red-500 text-4xl p-2 border shadow-md rounded-full cursor-pointer hover:text-white hover:bg-red-500 hover:-top-1' />
						<BiLogoTwitter className='transition-all duration-500 ease-ease-in-out relative top-0 text-red-500 text-4xl p-2 border shadow-md rounded-full cursor-pointer hover:text-white hover:bg-red-500 hover:-top-1' />
						<BiLogoInstagram className='transition-all duration-500 ease-ease-in-out relative top-0 text-red-500 text-4xl p-2 border shadow-md rounded-full cursor-pointer hover:text-white hover:bg-red-500 hover:-top-1' />
						<BiLogoYoutube className='transition-all duration-500 ease-ease-in-out relative top-0 text-red-500 text-4xl p-2 border shadow-md rounded-full cursor-pointer hover:text-white hover:bg-red-500 hover:-top-1' />
					</div>
				</div>
				<div className='flex flex-col space-y-12 sm:space-x-4 sm:justify-between sm:space-y-0 sm:flex-row md:w-2/3 lg:w-[35%]'>
					<div className='space-y-6'>
						<h4 className='font-bold text-lg sm:text-xl md:text-2xl'>Pages</h4>
						<div className='flex flex-col space-y-3 text-gray-600 text-lg'>
							<NavLink
								to='/'
								className='transition-all duration-200 w-fit hover:text-red-500'
							>
								Home
							</NavLink>
							<NavLink
								to='/about'
								className='transition-all duration-200 w-fit hover:text-red-500'
							>
								About
							</NavLink>
							<NavLink
								to='/blog'
								className='transition-all duration-200 w-fit hover:text-red-500'
							>
								Blog
							</NavLink>
							<NavLink
								to='/blog/blog-post'
								className='transition-all duration-200 w-fit hover:text-red-500'
							>
								Blog Post
							</NavLink>
							<NavLink
								to='/contact'
								className='transition-all duration-200 w-fit hover:text-red-500'
							>
								Contact
							</NavLink>
							<NavLink
								to='/rooms'
								className='transition-all duration-200 w-fit hover:text-red-500'
							>
								Rooms
							</NavLink>
							<NavLink
								to='/rooms/room-single'
								className='transition-all duration-200 w-fit hover:text-red-500'
							>
								Room Single
							</NavLink>
							<NavLink
								to='/rooms/rooms-category'
								className='transition-all duration-200 w-fit hover:text-red-500'
							>
								Rooms Category
							</NavLink>
						</div>
					</div>
					<div className='space-y-6 w-1/2'>
						<h4 className='font-bold text-lg sm:text-xl md:text-2xl'>Useful Links</h4>
						<div className='flex flex-col space-y-3 text-gray-600 text-lg'>
							<NavLink className='transition-all duration-200 w-fit hover:text-red-500'>
								Hospitality
							</NavLink>
							<NavLink className='transition-all duration-200 w-fit hover:text-red-500'>
								Invite Friends
							</NavLink>
							<NavLink className='transition-all duration-200 w-fit hover:text-red-500'>
								Business Travel
							</NavLink>
							<NavLink className='transition-all duration-200 w-fit hover:text-red-500'>
								FAQs
							</NavLink>
							<NavLink className='transition-all duration-200 w-fit hover:text-red-500'>
								Trust and Safety
							</NavLink>
							<NavLink className='transition-all duration-200 w-fit hover:text-red-500'>
								Terms and Conditions
							</NavLink>
							<NavLink className='transition-all duration-200 w-fit hover:text-red-500'>
								Privacy Policy
							</NavLink>
						</div>
					</div>
				</div>
				<div className='space-y-6 md:w-1/3 lg:w-[30%]'>
					<h4 className='font-bold text-lg sm:text-xl md:text-2xl'>
						Follow on Instagram
					</h4>
					<div className='flex flex-wrap justify-between'>
						{footerImages.map((image, index) => (
							<InstagramImage key={index} image={image} />
						))}
					</div>
				</div>
			</div>
			<a href='#' className='scroll-up fixed bottom-4 end-4 z-40 rounded-full p-2 group'>
				<div className='absolute start-0 end-0 top-0 bottom-0 rotating-link border-red-600 border-4 border-dotted rounded-full'></div>
				<BiUpArrowAlt className='transition duration-200  text-4xl text-white bg-black rounded-full group-hover:text-red-600 group-hover:bg-transparent' />
			</a>
		</footer>
	)
}

export default Footer
