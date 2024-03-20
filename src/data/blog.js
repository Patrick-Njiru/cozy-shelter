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
			postKey: "woodCabin",
			details: {
				title: "30 magical wood cabin ideas to inspire your next-off vacation",
				category: "Resources",
				description:
					"Dius autre irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulia pariatur",
				date: "November 17, 2023",
			},
		},
		{
			id: 2,
			img: campingLg,
			postKey: "camping",
			details: {
				title: "New camping experiences added to our list of airbn expereiences",
				category: "News",
				date: "January 4, 2024",
			},
		},
		{
			id: 3,
			img: alaskaSm,
			postKey: "alaska",
			details: {
				title: "Cabins in Alaska temporarily paused due to COVID-19 regulations",
				category: "News",
				date: "April 5, 2022",
			},
		},
	],
	latestPosts: [
		{
			id: 1,
			img: meals,
			postKey: "meals",
			details: {
				bg: meals,
				title: "7 easy and simple camping meals to surprise your friends",
				category: "Articles",
				date: "March 16, 2024",
				description:
					"Dius autre irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulia pariatur",
			},
		},
		{
			id: 2,
			img: woodCabinSm,
			postKey: "woodCabin",
			details: {
				bg: woodCabinLg,
				title: "30 magical wood cabin ideas to inspire your next-off vacation",
				category: "Resources",
				date: "March 14, 2024",
				description:
					"Dius autre irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulia pariatur",
			},
		},
		{
			id: 3,
			img: pack,
			postKey: "pack",
			details: {
				bg: pack,
				title: "How to pack a back pack for the perfect camping weekend",
				category: "Articles",
				date: "March 10, 2024",
				description:
					"Dius autre irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulia pariatur",
			},
		},
		{
			id: 4,
			img: campingSm,
			postKey: "camping",
			details: {
				bg: campingLg,
				title: "New camping experiences added to our Airbnb Experiences",
				category: "News",
				date: "November 25, 2023",
				description:
					"Dius autre irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulia pariatur",
			},
		},
		{
			id: 5,
			img: alaskaLg,
			postKey: "alaska",
			details: {
				bg: alaskaLg,
				title: "Cabins in Alaska temporarily paused due to COVID-19 regulations",
				category: "News",
				date: "March 3, 2024",
				description:
					"Dius autre irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulia pariatur",
			},
		},
		{
			id: 6,
			img: glamping,
			postKey: "glamping",
			details: {
				bg: glamping,
				title: "Glamping 101: Everything you need to know about glamping",
				category: "Resources",
				date: "February 29, 2024",
				description:
					"Dius autre irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulia pariatur",
			},
		},
	],
}

// blog posts
import blogPostImg from "../assets/blog/blog-post/glamping-post.webp"
import emailIcon from "../assets/blog/blog-post/email-icon.svg"
// import blogsData from "./blog"

const blogPostData = {}

blogsData.latestPosts.map((post) => {
	blogPostData[post.postKey] = post.details
})

export { emailIcon, blogPostImg, blogPostData }

export default blogsData
