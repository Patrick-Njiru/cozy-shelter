import familyRusticCabin from "../assets/home/family-rustic-cabin.webp"
import microRusticCabin from "../assets/home/micro-rustic-cabin.webp"
import duoRrusticCcabin from "../assets/home/duo-rustic-cabin.webp"
import familyDuoRusticCabin from "../assets/home/family-duo-rustic-cabin.webp"
import duplexCrusticCcabin from "../assets/home/duplex-rustic-cabin.webp"
import singleRusticCabin from "../assets/home/single-rustic-cabin.webp"
import roomsHero from "../assets/rooms/rooms-hero-bg.webp"
import roomSingleHero from "../assets/rooms/room-single/family-rustic-cabin-hero-bg.webp"
import fireplace from "../assets/rooms/room-single/fireplace-icon.svg"
import gaming from "../assets/rooms/room-single/gaming-icon.svg"
import heater from "../assets/rooms/room-single/heater-icon.svg"
import hotTub from "../assets/rooms/room-single/hot-tub-icon.svg"
import kitchen from "../assets/rooms/room-single/kitchen-icon.svg"
import parking from "../assets/rooms/room-single/parking-icon.svg"
import refrigerator from "../assets/rooms/room-single/refrigerator-icon.svg"
import roomGallery1 from "../assets/rooms/room-single/room-gallery-1.webp"
import roomGallery2 from "../assets/rooms/room-single/room-gallery-2.webp"
import roomGallery3 from "../assets/rooms/room-single/room-gallery-3.webp"
import roomGallery4 from "../assets/rooms/room-single/room-gallery-4.webp"
import tv from "../assets/rooms/room-single/tv-icon.svg"
import wifi from "../assets/rooms/room-single/wifi-icon.svg"

const amenities = {
	Wifi: wifi,
	Heater: heater,
	Fireplace: fireplace,
	"Hot tub": hotTub,
	TV: tv,
	Parking: parking,
	"Full Kitchen": kitchen,
	"Game room": gaming,
	Refrigerator: refrigerator,
}

const roomsData = {
	cabins: [
		{
			id: 1,
			img: singleRusticCabin,
			title: "Single Rustic Cabin",
			price: 99,
			rooms: {
				guests: "2 Guests",
				bedrooms: "1 Bedroom",
			},
			amenities: {
				Heater: heater,
				Fireplace: fireplace,
				"Hot tub": hotTub,
				TV: tv,
				Parking: parking,
				"Full Kitchen": kitchen,
				"Game room": gaming,
				Refrigerator: refrigerator,
			},
		},
		{
			id: 2,
			img: duoRrusticCcabin,
			title: "Duo Rustic Cabin",
			price: 129,
			rooms: {
				guests: "4 Guests",
				bedrooms: "2 Bedrooms",
			},
			amenities: {
				Heater: heater,
				Fireplace: fireplace,
				"Hot tub": hotTub,
				TV: tv,
				Parking: parking,
				"Full Kitchen": kitchen,
				"Game room": gaming,
				Refrigerator: refrigerator,
			},
		},
		{
			id: 3,
			img: duplexCrusticCcabin,
			title: "Duplex Rustic Cabin",
			price: 150,
			rooms: {
				guests: "4 Guests",
				bedrooms: "2 Bedrooms",
			},
			amenities,
		},
		{
			id: 4,
			img: familyRusticCabin,
			title: "Family Rustic Cabin",
			price: 399,
			rooms: {
				guests: "8 Guests",
				bedrooms: "4 Bedrooms",
			},
			amenities,
		},
		{
			id: 5,
			img: microRusticCabin,
			title: "Micro Rustic Cabin",
			price: 79,
			rooms: {
				guests: "1 Guest",
				bedrooms: "1 Bedroom",
			},
			amenities: {
				Heater: heater,
				Fireplace: fireplace,
				"Hot tub": hotTub,
				TV: tv,
				Parking: parking,
				"Full Kitchen": kitchen,
				"Game room": gaming,
				Refrigerator: refrigerator,
			},
		},
		{
			id: 6,
			img: familyDuoRusticCabin,
			title: "Family Duo Rustic Cabin",
			price: 499,
			rooms: {
				guests: "8 Guests",
				bedrooms: "4 Bedrooms",
			},
			amenities,
		},
	],
	gallery: [roomGallery1, roomGallery2, roomGallery3, roomGallery4],
}

export { roomsHero, roomSingleHero }
export default roomsData
