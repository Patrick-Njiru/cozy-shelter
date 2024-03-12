import { NavLink } from "react-router-dom"
import {
	BiChevronUpCircle,
	BiLogoFacebook,
	BiLogoInstagram,
	BiLogoTwitter,
	BiLogoYoutube,
} from "react-icons/bi"
import footerImages from "../../../data/footer"
import InstagramImage from "./InstagramImage"

const Footer = () => {
	return (
		<footer className='border-t py-24 px-6 sm:px-10 md:px-16'>
			<div className='flex flex-col space-y-12 md:space-y-0 md:justify-between md:flex-row md:flex-wrap'>
				<div className='mb-8 lg:my-0 lg:w-[30%]'>
					<NavLink to='/' className='group flex space-x-3 hover:opacity-90'>
						<img
							src='icon.jpg'
							alt='logo'
							className='transition-all duration-300 ease-in-out h-8 group-hover:h-[1.95rem]'
						/>
						<h1 className='transition-all duration-300 ease-in-out font-black text-xl group-hover:font-bold sm:text-2xl md:text-3xl'>
							<span>Cozy</span>
							<span className='text-red-800'>Shelter</span>
						</h1>
					</NavLink>
					<p className='text-gray-500 mt-6 mb-10'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
						repudiandae dolorem.
					</p>
					<div className='flex space-x-4'>
						<BiLogoFacebook className='transition-all duration-500 ease-linear relative top-0 text-red-500 text-4xl p-2 border shadow-md rounded-full cursor-pointer hover:text-white hover:bg-red-500 hover:-top-1' />
						<BiLogoTwitter className='transition-all duration-500 ease-linear relative top-0 text-red-500 text-4xl p-2 border shadow-md rounded-full cursor-pointer hover:text-white hover:bg-red-500 hover:-top-1' />
						<BiLogoInstagram className='transition-all duration-500 ease-linear relative top-0 text-red-500 text-4xl p-2 border shadow-md rounded-full cursor-pointer hover:text-white hover:bg-red-500 hover:-top-1' />
						<BiLogoYoutube className='transition-all duration-500 ease-linear relative top-0 text-red-500 text-4xl p-2 border shadow-md rounded-full cursor-pointer hover:text-white hover:bg-red-500 hover:-top-1' />
					</div>
				</div>
				<div className='flex flex-col space-y-12 sm:space-x-4 sm:justify-between sm:space-y-0 sm:flex-row md:w-2/3 lg:w-[35%]'>
					<div className='space-y-6'>
						<h4 className='font-bold text-lg sm:text-xl md:text-2xl'>Pages</h4>
						<div className='flex flex-col space-y-3 text-gray-500 text-lg'>
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
								to='/blog-post'
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
								to='/room-single'
								className='transition-all duration-200 w-fit hover:text-red-500'
							>
								Room Single
							</NavLink>
							<NavLink
								to='/rooms-category'
								className='transition-all duration-200 w-fit hover:text-red-500'
							>
								Rooms Category
							</NavLink>
						</div>
					</div>
					<div className='space-y-6 w-1/2'>
						<h4 className='font-bold text-lg sm:text-xl md:text-2xl'>Useful Links</h4>
						<div className='flex flex-col space-y-3 text-gray-500 text-lg'>
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
								Trust and Safety
							</NavLink>
							<NavLink className='transition-all duration-200 w-fit hover:text-red-500'>
								Terms
							</NavLink>
							<NavLink className='transition-all duration-200 w-fit hover:text-red-500'>
								Privacy
							</NavLink>
							<NavLink className='transition-all duration-200 w-fit hover:text-red-500'>
								Trust & Safety
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
			<a href='#' className='fixed bottom-5 end-4 z-40 rounded-full p-0 m-0'>
				<BiChevronUpCircle className='transition duration-200 text-red-500 hover:text-red-600 text-4xl' />
			</a>
		</footer>
	)
}

export default Footer
