import uniqueness1 from "../assets/home/uniqueness-1.webp"
import uniqueness2 from "../assets/home/uniqueness-2.webp"
import uniqueness3 from "../assets/home/uniqueness-3.webp"
import uniqueness4 from "../assets/home/uniqueness-4.webp"
import duoRrusticCcabin from "../assets/home/duo-rustic-cabin.webp"
import duplexCrusticCcabin from "../assets/home/duplex-rustic-cabin.webp"
import familyDuoRusticCabin from "../assets/home/family-duo-rustic-cabin.webp"
import familyRusticCabin from "../assets/home/family-rustic-cabin.webp"
import fishing from "../assets/home/fishing.webp"
import gameRoom from "../assets/home/game-room.webp"
import hiking from "../assets/home/hiking.webp"
import homeBg from "../assets/home/home-bg.webp"
import kayaks from "../assets/home/kayaks.webp"
import lakePaddling from "../assets/home/lake-paddling.webp"
import microRusticCabin from "../assets/home/micro-rustic-cabin.webp"
import mountainBiking from "../assets/home/mountain-biking.webp"
import hotTub from "../assets/home/outdoor-hot-tub.webp"
import picnic from "../assets/home/outdoor-picnic.webp"
import redBg from "../assets/home/red-bg.webp"
import reviewer1 from "../assets/home/review-1.webp"
import reviewer2 from "../assets/home/review-2.webp"
import reviewer3 from "../assets/home/review-3.webp"
import singleRusticCabin from "../assets/home/single-rustic-cabin.webp"
import woodFire from "../assets/home/wood-fire.webp"

const homeData = {
	cabins: [
		{
			id: 1,
			img: singleRusticCabin,
			title: "Single Rustic Cabin",
			price: 99,
			rooms: {
				guests: '2 Guests',
				bedrooms: '1 Bedroom',
			},
		},
		{
			id: 2,
			img: duoRrusticCcabin,
			title: "Duo Rustic Cabin",
			price: 129,
			rooms: {
				guests: '4 Guests',
				bedrooms: '2 Bedrooms',
			},
		},
		{
			id: 3,
			img: duplexCrusticCcabin,
			title: "Duplex Rustic Cabin",
			price: 150,
			rooms: {
				guests: '4 Guests',
				bedrooms: '2 Bedrooms',
			},
		},
		{
			id: 4,
			img: familyRusticCabin,
			title: "Family Rustic Cabin",
			price: 399,
			rooms: {
				guests: '8 Guests',
				bedrooms: '4 Bedrooms',
			},
		},
		{
			id: 5,
			img: microRusticCabin,
			title: "Micro Rustic Cabin",
			price: 79,
			rooms: {
				guests: '1 Guest',
				bedrooms: '1 Bedroom',
			},
		},
		{
			id: 6,
			img: familyDuoRusticCabin,
			title: "Family Duo Rustic Cabin",
			price: 499,
			rooms: {
				guests: '8 Guests',
				bedrooms: '4 Bedrooms',
			},
		},
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
	uniqueness: [uniqueness1, uniqueness2, uniqueness3, uniqueness4],
	reviews: [
		{
			id: 1,
			user: "Sophie Moore",
			profilePic: reviewer1,
			location: "Los Angeles, GA",
			headline: "The Best experience we ever had",
		},
		{
			id: 2,
			user: "Karen Cutts",
			profilePic: reviewer2,
			location: "Washington GC",
			headline: "The Best weekend of my life",
		},
		{
			id: 3,
			user: "John Carter",
			profilePic: reviewer3,
			location: "New York, NY",
			headline: "One of a kind experience",
		},
	],
}

export { homeBg, redBg }
export default homeData
