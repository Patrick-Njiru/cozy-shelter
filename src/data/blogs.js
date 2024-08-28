import alaskaLg from "../assets/blog/alaska-lg.webp"
import alaskaSm from "../assets/blog/alaska-sm.webp"
import campingLg from "../assets/blog/camping-lg.webp"
import campingSm from "../assets/blog/camping-sm.webp"
import woodCabinLg from "../assets/blog/wood-cabin-lg.webp"
import woodCabinSm from "../assets/blog/wood-cabin-sm.webp"
import glamping from "../assets/blog/glamping.webp"
import meals from "../assets/blog/meals.webp"
import pack from "../assets/blog/pack.webp"

const blogsData = {
	trending: [
		{
			id: 1,
			img: woodCabinLg,
			details: {
				bg: woodCabinLg,
				title: "30 magical wood cabin ideas to inspire your next-off vacation",
				category: "Resources",
				date: "November 17, 2023",
			},
		},
		{
			id: 2,
			img: campingLg,
			details: {
				bg: campingLg,
				title: "New camping experiences added to our list of airbnb experiences",
				category: "News",
				date: "January 4, 2024",
			},
		},
		{
			id: 3,
			img: alaskaSm,
			details: {
				bg: alaskaLg,
				title: "Cabins in Alaska temporarily paused due to COVID-19 regulations",
				category: "News",
				date: "April 5, 2022",
			},
		},
	],
	latestPosts: [
		{
			id: 4,
			img: meals,
			details: {
				bg: meals,
				title: "7 easy and simple camping meals to surprise your friends",
				category: "Articles",
				date: "March 16, 2024",
			},
		},
		{
			id: 5,
			img: woodCabinSm,
			details: {
				bg: woodCabinLg,
				title: "30 magical wood cabin ideas to inspire your next-off vacation",
				category: "Resources",
				date: "March 14, 2024",
			},
		},
		{
			id: 6,
			img: pack,
			details: {
				bg: pack,
				title: "How to pack a back pack for the perfect camping weekend",
				category: "Articles",
				date: "March 10, 2024",
			},
		},
		{
			id: 7,
			img: campingSm,
			details: {
				bg: campingLg,
				title: "New camping experiences added to our Airbnb Experiences",
				category: "News",
				date: "November 25, 2023",
			},
		},
		{
			id: 8,
			img: alaskaLg,
			details: {
				bg: alaskaLg,
				title: "Cabins in Alaska temporarily paused due to COVID-19 regulations",
				category: "News",
				date: "March 3, 2024",
			},
		},
		{
			id: 9,
			img: glamping,
			details: {
				bg: glamping,
				title: "Glamping 101: Everything you need to know about glamping",
				category: "Resources",
				date: "February 29, 2024",
			},
		},
	],
}

// blog posts
import blogPostImg from "../assets/blog/blog-post/glamping-post.webp"
import emailIcon from "../assets/blog/blog-post/email-icon.svg"
// import blogsData from "./blog"

export { emailIcon, blogPostImg }

export default blogsData
