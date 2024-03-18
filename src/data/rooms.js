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


const roomsData = {
	roomSingle: {
		amenities: {
			Wifi: wifi,
			Heater: heater,
			Fireplace: fireplace,
			"Hot tub": hotTub,
			TV: tv,
			Parking: parking,
			"Full Kitchen": kitchen,
			"Game room": gaming,
			Refrigerator: refrigerator,
		},
		gallery: [roomGallery1, roomGallery2, roomGallery3, roomGallery4],
	},
}

export { roomsHero, roomSingleHero }
export default roomsData
