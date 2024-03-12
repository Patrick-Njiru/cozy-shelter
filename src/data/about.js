import aboutBg from "../assets/about/about-bg.jpg"
import locationsImg from "../assets/about/locations.webp"
import ourStory1 from "../assets/about/our-story-1.webp"
import ourStory2 from "../assets/about/our-story-2.webp"
import ourStory3 from "../assets/about/our-story-3.webp"
import ourStory4 from "../assets/about/our-story-4.webp"
import uniqueExperience from "../assets/about/unique-experience.webp"
import customerFirst from "../assets/about/customer-first.webp"
import ecoFriendly from "../assets/about/eco-friendly.webp"
import sustainable from "../assets/about/sustainable.webp"
import videoImg from "../assets/about/video-img.webp"

const aboutData = {
	locations: [
		{
			id: 1,
			title: "Revelstoke Mountain",
			address: "2950 Camozzi Rd, Revelstoke, BC V0E 2S1, Canada",
		},
		{
			id: 2,
			title: "Cleveland National Forest",
			address: "Co Hwy S7, Santa Ysabel, CA 92070, United States",
		},
		{
			id: 3,
			title: "Plumas National Forest",
			address: "Quincy, CA 95971, United States",
		},
	],
	ourStory: [ourStory1, ourStory2, ourStory3, ourStory4],
	resortUniqueness: [
		{
			id: 1,
			title: "Unique experience",
			img: uniqueExperience,
		},
		{
			id: 2,
			title: "Customer-first",
			img: customerFirst,
		},
		{
			id: 3,
			title: "Eco-friendly",
			img: ecoFriendly,
		},
		{
			id: 4,
			title: "Sustainable",
			img: sustainable,
		},
	],
}

export { aboutBg, locationsImg, videoImg }
export default aboutData
