import alaskaLg from "../assets/blog/alaska-lg.webp"
import alaskaSm from "../assets/blog/alaska-sm.webp"
import campingLg from "../assets/blog/camping-lg.webp"
import campingSm from "../assets/blog/camping-sm.webp"
import woodCabin from "../assets/blog/wood-cabin.webp"
import glamping from "../assets/blog/glamping.webp"
import meals from "../assets/blog/meals.webp"
import pack from "../assets/blog/pack.webp"

const blogsData = {
	trending: [
		{
			id: 1,
			img: woodCabin,
			details: {
				title: "30 magical wood cabin ideas to inspire your next-off vacation",
				category: "Resources",
				description:
					"Dius autre irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulia pariatur",
				date: "April 5, 2022",
			},
		},
		{
			id: 2,
			img: campingLg,
			details: {
				title: "New camping experiences added to our list of airbn expereiences",
				category: "News",
				date: "April 5, 2022",
			},
		},
		{
			id: 3,
			img: alaskaSm,
			details: {
				title: "Cabins in Alaska temporarily paused due to COVID-19 regulations",
				category: "News",
				date: "April 5, 2022",
			},
		},
	],
}

export { woodCabin, campingLg, campingSm, alaskaLg, alaskaSm, glamping, meals, pack }
export default blogsData
