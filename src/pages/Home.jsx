import { NavLink } from "react-router-dom"
import CabinCard from "../components/CabinCard"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { homeData } from "../data"

const Home = () => {
	const handleScroll = (direction) => {}

	return (
		<main className=''>
			{/* Hero Section */}
			<section
				className='min-h-screen h-fit relative -top-28 py-96 px-16 text-white text-center'
				style={{
					background: `rgba(0,0,0,0.6) url(${homeData.general[0]}) no-repeat`,
					backgroundSize: "cover",
					backgroundPosition: "bottom center",
					backgroundBlendMode: "darken",
				}}
			>
				<div className='mx-auto space-y-8 md:w-1/2'>
					<h1 className='text-6xl font-semibold'>
						Recharge energies in our unique hotel
					</h1>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore iure non
						beatae unde, laborum corrupti corporis dolorum fuga harum provident
						quisquam, sint possimus officiis eveniet.
					</p>
					<div className='flex justify-center flex-wrap space-x-4'>
						<NavLink
							to='/rooms'
							className='inline transition-all duration-500 ease-in-out bg-red-500 text-white px-10 py-6 text-lg font-bold w-fit rounded-full relative my-4 top-0 hover:bg-red-600  hover:-top-1'
						>
							Explore rooms
						</NavLink>
						<NavLink
							to='/about'
							className='inline transition-all duration-500 ease-in-out bg-white text-gray-600 px-10 py-6 text-lg font-semibold w-fit rounded-full relative my-4 top-0 hover:bg-red-600 hover:text-white hover:-top-1'
						>
							About us
						</NavLink>
					</div>
				</div>
			</section>

			{/* Explore Cabins Section */}
			<section className='mt-28'>
				<div className='flex justify-between flex-wrap items-center px-16'>
					<h1 className='font-extrabold text-4xl'>Explore our cabins</h1>
					<NavLink
						to='/rooms'
						className='inline transition-all duration-500 ease-in-out bg-white text-gray-600 px-10 py-7 text-lg font-semibold w-fit rounded-full relative top-0 border shadow-md hover:bg-red-600 hover:text-white hover:-top-1'
					>
						Browse All
					</NavLink>
				</div>
				<div
					id='scroll-container'
					className='transition-all duration-1000 ease-in-out relative overflow-scroll h-fit flex items-center justify-start space-x-9 pt-8 ps-16'
				>
					{homeData.cabins.map((cabin) => (
						<CabinCard key={cabin.title} {...cabin} />
					))}
					<div className='sticky end-60 top-2/5 flex items-center justify-between space-x-96'>
						<button
							to='/book'
							className='inline me-96 transition-all duration-500 ease-in-out bg-red-500 text-white p-5 text-3xl w-fit rounded-full hover:bg-red-600 hover:p-4'
							onClick={() => handleScroll("left")}
						>
							<BsArrowLeft />
						</button>
						<button
							to='/book'
							className='inline transition-all duration-500 ease-in-out bg-red-500 text-white p-5 text-3xl font-medium w-fit rounded-full hover:bg-red-600 hover:p-4'
							onClick={() => handleScroll("right")}
						>
							<BsArrowRight />
						</button>
					</div>
				</div>
			</section>

			{/* Experiences Section */}
			<section className='mt-52 px-16'>
				<div className='space-y-6 mx-auto md:w-1/2'>
					<h1 className='text-center text-4xl font-extrabold mb-4'>
						Come and Enjoy a one of a kind experience
					</h1>
					<p className='text-gray-500 text-center'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ab voluptas
						deleniti distinctio placeat temporibus!
					</p>
				</div>
				<div className='flex flex-wrap justify-evenly items-center mt-8'>
					{homeData.experiences.map((experience) => (
						<div key={experience.title} className='w-96 flex my-10 space-x-6'>
							<img
								src={experience.img}
								alt=''
								className='size-24 w-36 rounded-full'
							/>
							<div className='space-y-3'>
								<h1 className='text-3xl font-semibold'>{experience.title}</h1>
								<p className='text-gray-500'>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								</p>
							</div>
						</div>
					))}
					<div className='flex justify-center flex-wrap space-x-4 mt-10'>
						<NavLink
							to='/rooms'
							className='inline transition-all duration-500 ease-in-out bg-red-500 text-white px-10 py-6 text-lg font-bold w-fit rounded-full relative top-0 hover:bg-red-600  hover:-top-1'
						>
							Explore rooms
						</NavLink>
						<NavLink
							to='/about'
							className='inline transition-all duration-500 ease-in-out bg-white text-gray-600 px-10 py-6 text-lg font-semibold w-fit rounded-full relative top-0 border hover:bg-red-600 hover:text-white hover:-top-1'
						>
							About us
						</NavLink>
					</div>
				</div>
			</section>

			{/* Recharge Section */}
			<section className='mt-52 px-16 text-white'>
				<div
					className=' bg-gradient-to-b from-red-600 to bg-red-700 rounded-3xl p-24'
					style={{
						background: `url(${homeData.general[1]}) no-repeat`,
						backgroundSize: "100% 100%",
					}}
				>
					<div className='space-y-6 md:w-3/5'>
						<h1 className='text-5xl font-bold'>
							Recharge your energies in one of out forest cabins
						</h1>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime,
							tempore omnis repudiandae facilis voluptatum, atque, corporis esse culpa
							veritatis hic sit dolore similique ullam harum.
						</p>
						<div className='flex flex-wrap space-x-4 mt-10'>
							<NavLink
								to='/rooms'
								className='inline transition-all duration-500 ease-in-out bg-white text-red-600 px-10 py-6 text-lg font-bold w-fit rounded-full relative top-0 hover:text-black hover:-top-1'
							>
								Explore rooms
							</NavLink>
							<NavLink
								to='/about'
								className='inline transition-all duration-500 ease-in-out bg-inherit text-white px-10 py-6 text-lg font-semibold w-fit rounded-full relative top-0 border hover:bg-white hover:text-black hover:-top-1'
							>
								About us
							</NavLink>
						</div>
					</div>
				</div>
			</section>

			{/* Explore Activities Section */}
			<section className='mt-52 px-16'>
				<div className='mx-auto space-y-6 mb-8 md:w-1/2'>
					<h1 className='text-center text-4xl font-extrabold'>Explore our activities</h1>
					<p className='text-gray-500 text-center font-medium'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ab voluptas
						deleniti distinctio placeat temporibus!
					</p>
				</div>
				<div className='flex flex-wrap space-x-4 justify-evenly items-center text-white'>
					{homeData.activities.map((activity) => (
						<div
							key={activity.title}
							className='w-96 flex flex-col justify-end rounded-3xl'
							style={{
								background: `rgba(0,0,0,0.3) url(${activity.img}) no-repeat`,
								backgroundSize: "100% auto",
							}}
						>
							<div className='my-48'></div>
							<div className='space-y-3 mb-10 px-8'>
								<h1 className='text-4xl font-bold'>{activity.title}</h1>
								<p className='font-boold'>
									Sagittis, facilisis mauris sed vitae habitant dolor sit.
								</p>
							</div>
						</div>
					))}
				</div>
				<NavLink
					to='/activities'
					className='block mt-16 mx-auto transition-all duration-500 ease-in-out bg-white px-10 py-6 text-lg font-medium w-fit rounded-full relative top-0 border hover:bg-red-600 hover:text-white hover:-top-1'
				>
					More activities
				</NavLink>
			</section>

			{/* What Makes Us Different Section */}
			<section className='mt-28 bg-neutral-50'>
				<div className='px-16 pt-40 flex items-center space-x-6 relative'>
					<div className='w-3/5 flex flex-wrap justify-evenly items-start'>
						{homeData.uniqueness.map((img, i) =>
							i == 0 ? (
								<img
									src={img}
									key={i}
									alt='cabin'
									className='w-80 rounded-2xl mb-4'
								/>
							) : i == 1 ? (
								<img
									src={img}
									key={i}
									alt='cabin'
									className='w-80 h-60 rounded-2xl'
								/>
							) : i == 2 ? (
								<img
									src={img}
									key={i}
									alt='cabin'
									className='w-80 h-80 rounded-2xl'
								/>
							) : (
								<img
									key={i}
									src={img}
									alt='cabin'
									className='w-80 rounded-2xl relative -top-20'
								/>
							)
						)}
					</div>
					<div className='w-2/5 space-y-6'>
						<h1 className='text-4xl font-extrabold'>What makes use different?</h1>
						<p className='text-gray-500 text-lg'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vel quo
							quae ipsam esse voluptates quia eos molestias, odio nam.
							<span className='block h-0.5 w-full bg-gray-200 my-10'></span>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
							excepturi unde amet dolor a rerum veniam fugit quisquam architecto
							officia, nihil qui maiores doloremque tempore obcaecati veritatis aut
							placeat eveniet consectetur possimus earum totam hic.
						</p>
						<NavLink
							to='/about'
							className='block mt-16 transition-all duration-500 ease-in-out bg-white px-10 py-6 text-lg font-medium w-fit rounded-full relative top-0 border hover:bg-red-600 hover:text-white hover:-top-1'
						>
							About us
						</NavLink>
					</div>
				</div>
			</section>

			{/* Client Reviews */}
			<section className='mt-52'>
				<div className='mx-auto space-y-6 mb-8 md:w-1/2'>
					<h1 className='text-center text-4xl font-extrabold'>
						What out past clients say
					</h1>
					<p className='text-gray-500 text-center font-medium'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et ab voluptas
						deleniti distinctio placeat temporibus!
					</p>
				</div>
				<div className='reviews relative overflow-scroll h-fit flex items-center justify-start space-x-9 pt-8 ps-16'>
					{homeData.reviews.map((review) => (
						<div
							key={review.user + review.location}
							className='flex justify-between p-20 pb-10 px-16 space-x-6 border shadow-lg rounded-3xl'
						>
							<img
								src={review.profilePic}
								alt=''
								className='min-w-72 h-72 rounded-full'
							/>
							<div className='space-y-6 min-w-96 text-lg'>
								<q className='font-bold text-2xl'>{review.headline}</q>
								<p className='text-gray-500'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Temporibus laudantium, quo soluta omnis itaque porro? Vel fugiat
									dolorum atque fugit numquam deleniti magnam blanditiis.
								</p>
								<div>
									<p className='font-bold'>{review.user}</p>
									<p className='text-gray-500'>{review.location}</p>
								</div>
							</div>
						</div>
					))}
					<div className='sticky end-60 top-2/5 flex items-center justify-between space-x-96'>
						<button
							to='/book'
							className='inline me-96 transition-all duration-500 ease-in-out bg-red-500 text-white p-5 text-3xl w-fit rounded-full hover:bg-red-600 hover:p-4'
							onClick={() => handleScroll("left")}
						>
							<BsArrowLeft />
						</button>
						<button
							to='/book'
							className='inline transition-all duration-500 ease-in-out bg-red-500 text-white p-5 text-3xl font-medium w-fit rounded-full hover:bg-red-600 hover:p-4'
							onClick={() => handleScroll("right")}
						>
							<BsArrowRight />
						</button>
					</div>
				</div>
				<div className='flex flex-wrap justify-center space-x-4 mt-10'>
					<NavLink
						to='/book'
						className='inline transition-all duration-500 ease-in-out bg-red-500 text-white px-10 py-6 text-lg font-bold w-fit rounded-full relative top-0 hover:bg-red-600 hover:-top-1'
					>
						Book now
					</NavLink>
					<NavLink
						to='/rooms'
						className='inline transition-all duration-500 ease-in-out bg-inherit text-black px-10 py-6 text-lg w-fit rounded-full relative top-0 border hover:bg-red-600 hover:text-white hover:-top-1'
					>
						Explore Cabins
					</NavLink>
				</div>
			</section>
		</main>
	)
}

Home.propTypes = {}

export default Home
