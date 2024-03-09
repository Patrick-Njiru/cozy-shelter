import different1 from "../assets/home/different1.jpeg"
import different2 from "../assets/home/different2.jpeg"
import different3 from "../assets/home/different3.jpeg"
import different4 from "../assets/home/different4.jpeg"
import duoRrusticCcabin from "../assets/home/duo-rustic-cabin.webp"
import duplexCrusticCcabin from "../assets/home/duplex-rustic-cabin.jpg"
import familyDuoRusticCabin from "../assets/home/family-duo-rustic-cabin.webp"
import familyRusticCabin from "../assets/home/family-rustic-cabin.webp"
import fishing from "../assets/home/fishing.png"
import gameRoom from "../assets/home/game-room.png"
import hiking from "../assets/home/hiking.jpeg"
import homeBg from "../assets/home/home-bg.webp"
import kayaks from "../assets/home/kayaks.jpeg"
import lakePaddling from "../assets/home/lake-paddling.png"
import microRusticCabin from "../assets/home/micro-rustic-cabin.webp"
import mountainBiking from "../assets/home/mountain-biking.jpeg"
import hotTub from "../assets/home/outdoor-hot-tub.png"
import picnic from "../assets/home/outdoor-picnic.png"
import redBg from "../assets/home/red-bg.webp"
import reviewer1 from "../assets/home/review1.jpeg"
import reviewer2 from "../assets/home/review2.jpeg"
import reviewer3 from "../assets/home/review3.jpeg"
import singleRusticCabin from "../assets/home/single-rustic-cabin.webp"
import woodFire from "../assets/home/wood-fire.png"

const homeData = {
	cabins: [
		{
			id: 1,
			title: "Single Rustic Cabin",
			img: singleRusticCabin,
		},
		{
			id: 2,
			title: "Duo Rustic Cabin",
			img: duoRrusticCcabin,
		},
		{
			id: 3,
			title: "Duplex Rustic Cabin",
			img: duplexCrusticCcabin,
		},
		{
			id: 4,
			title: "Family Rustic Cabin",
			img: familyRusticCabin,
		},
		{
			id: 5,
			title: "Micro Rustic Cabin",
			img: microRusticCabin,
		},
		{
			id: 6,
			title: "Family Duo Rustic Cabin",
			img: familyDuoRusticCabin,
		},
		// {
		// 	id: 7,
		// 	title: "Single Rustic Cabin",
		// 	img: singleRusticCabin,
		// },
		// {
		// 	id: 8,
		// 	title: "Duo Rustic Cabin",
		// 	img: duoRrusticCcabin,
		// },
	],
	experiences: [
		{
			id: 1,
			title: "Wood Fire",
			img: woodFire,
		},
		{
			id: 2,
			title: "Lake Paddling",
			img: lakePaddling,
		},
		{
			id: 3,
			title: "Outdoor Picnic",
			img: picnic,
		},
		{
			id: 4,
			title: "Fishing",
			img: fishing,
		},
		{
			id: 5,
			title: "Game Room",
			img: gameRoom,
		},
		{
			id: 6,
			title: "Outdoor Hot Tub",
			img: hotTub,
		},
	],
	activities: [
		{
			id: 1,
			title: "Kayaks",
			img: kayaks,
		},
		{
			id: 2,
			title: "Hiking",
			img: hiking,
		},
		{
			id: 3,
			title: "Mountain Biking",
			img: mountainBiking,
		},
	],
	uniqueness: [different1, different2, different3, different4],
	reviews: [
		{
			id: 1,
			user: "John Carter",
			profilePic: reviewer1,
			location: "New York, NY",
			headline: "One of a kind experience",
		},
		{
			id: 2,
			user: "Sophie Moore",
			profilePic: reviewer2,
			location: "Los Angeles, CA",
			headline: "The best experience we ever had",
		},
		{
			id: 3,
			user: "Karen Cutts",
			profilePic: reviewer3,
			location: "Washington DC",
			headline: "The best weekend of my life",
		},
		// {
		// 	id: 4,
		// 	user: "John Carter",
		// 	profilePic: reviewer1,
		// 	location: "New York, NY",
		// 	headline: "One of a kind experience",
		// },
	],
}

export { homeBg, redBg }
export default homeData
