import { NavLink } from 'react-router-dom'
import { BiCaretDown, BiCaretUp, BiCart } from 'react-icons/bi'
import PagesModal from '../PagesModal'
import { handleHideModal, handleModalDisplay, handleShowModal } from '../../../../../utils'

const DesktopMenu = () => {
  return (
    <div className='hidden xl:block'>
    <div className='flex items-center space-x-6 text-xl me-4'>
      <NavLink to='/' className='transition-all duration-200 hover:text-red-500'>
        Home
      </NavLink>
      <NavLink to='/about' className='transition-all duration-200 hover:text-red-500'>
        About
      </NavLink>
      <NavLink to='/blog' className='transition-all duration-200 hover:text-red-500'>
        Blog
      </NavLink>
      <div
        id='pages'
        className='transition-all duration-200 hover:text-red-500'
        onClick={() => handleModalDisplay()}
        onMouseOver={() => handleShowModal()}
        onMouseLeave={() => handleHideModal()}
      >
        Pages
        <butto type="button"n>
          <BiCaretDown className='caret-down' />
          <BiCaretUp className='caret-up' />
        </button>
        <PagesModal view='web' />
      </div>
      <NavLink to='/cart' className='transition-all duration-200 group relative hover:text-gray-500'>
        <BiCart className='text-4xl' />
        <sub className='absolute w-5 h-5 pt-2.5 rounded-full bg-red-500 text-white font-bold text-center group-hover:bg-red-300'>
          0
        </sub>
      </NavLink>
      <NavLink
        to='/book'
        className='inline transition-all duration-500 ease-in-out bg-red-500 text-white px-5 py-3 font-medium w-fit rounded-full relative top-0 hover:bg-red-600  hover:-top-1'
      >
        Book now
      </NavLink>
    </div>
  </div>
  )
}

export default DesktopMenu