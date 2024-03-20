import homeHero from "../assets/home/home-hero-bg.webp"
import uniqueness1 from "../assets/home/uniqueness-1.webp"
import uniqueness2 from "../assets/home/uniqueness-2.webp"
import uniqueness3 from "../assets/home/uniqueness-3.webp"
import uniqueness4 from "../assets/home/uniqueness-4.webp"
import fishing from "../assets/home/fishing.webp"
import gameRoom from "../assets/home/game-room.webp"
import hiking from "../assets/home/hiking.webp"
import kayaks from "../assets/home/kayaks.webp"
import lakePaddling from "../assets/home/lake-paddling.webp"
import mountainBiking from "../assets/home/mountain-biking.webp"
import hotTub from "../assets/home/outdoor-hot-tub.webp"
import picnic from "../assets/home/outdoor-picnic.webp"
import redBg from "../assets/home/red-bg.webp"
import reviewer1 from "../assets/home/review-1.webp"
import reviewer2 from "../assets/home/review-2.webp"
import reviewer3 from "../assets/home/review-3.webp"
import woodFire from "../assets/home/wood-fire.webp"

import roomsData from "./rooms"

const homeData = {
	cabins: [...roomsData.cabins],
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

export { homeHero, redBg }
export default homeData
