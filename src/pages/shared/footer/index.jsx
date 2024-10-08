import { Link, useParams } from "react-router-dom"
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube } from "react-icons/bi"
import footerImages from "../../../data/footer"
import InstagramImage from "./InstagramImage"
import { logo } from "../../../data"

const Footer = () => {
	const { roomId, postId, amenityId } = useParams()

	return (
		<footer className='show-on-scroll border-t py-24 px-6 sm:px-10 md:px-16'>
			<div className='flex flex-col space-y-12 md:space-y-0 md:justify-between md:flex-row md:flex-wrap'>
				<div className='mb-8 lg:my-0 lg:w-[30%]'>
					<Link
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
					</Link>
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
							<Link
								to='/'
								className='transition-all duration-200 w-fit hover:text-red-500'
							>
								Home
							</Link>
							<Link
								to='about'
								className='transition-all duration-200 w-fit hover:text-red-500'
							>
								About
							</Link>
							<Link
								to='blog'
								className='transition-all duration-200 w-fit hover:text-red-500'
							>
								Blog
							</Link>
							<Link
								to={`/blog/${postId || 1}`}
								className='transition-all duration-200 w-fit hover:text-red-500'
							>
								Blog Post
							</Link>
							<Link
								to='contact'
								className='transition-all duration-200 w-fit hover:text-red-500'
							>
								Contact
							</Link>
							<Link
								to='rooms'
								className='transition-all duration-200 w-fit hover:text-red-500'
							>
								Rooms
							</Link>
							<Link
								to={`/rooms/${roomId || 1}`}
								className='transition-all duration-200 w-fit hover:text-red-500'
							>
								Room Single
							</Link>
							<Link
								to={`/amenities/${amenityId || 1}/rooms-with-amenity`}
								className='transition-all duration-200 w-fit hover:text-red-500'
							>
								Rooms Category
							</Link>
						</div>
					</div>
					<div className='space-y-6 w-1/2'>
						<h4 className='font-bold text-lg sm:text-xl md:text-2xl'>Useful Links</h4>
						<div className='flex flex-col space-y-3 text-gray-600 text-lg'>
							<Link className='transition-all duration-200 w-fit hover:text-red-500'>
								Hospitality
							</Link>
							<Link className='transition-all duration-200 w-fit hover:text-red-500'>
								Invite Friends
							</Link>
							<Link className='transition-all duration-200 w-fit hover:text-red-500'>
								Business Travel
							</Link>
							<Link className='transition-all duration-200 w-fit hover:text-red-500'>
								FAQs
							</Link>
							<Link className='transition-all duration-200 w-fit hover:text-red-500'>
								Trust and Safety
							</Link>
							<Link className='transition-all duration-200 w-fit hover:text-red-500'>
								Terms and Conditions
							</Link>
							<Link className='transition-all duration-200 w-fit hover:text-red-500'>
								Privacy Policy
							</Link>
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
		</footer>
	)
}

export default Footer
