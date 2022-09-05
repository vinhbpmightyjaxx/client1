
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
      <div className='flex justify-around items-center py-5 bg-[#234] text-white'>
        <h1 className='font-semibold font-2xl'>Client App 1</h1>
        <ul className='flex'>

          <li className='mx-1'>
            <Link to='/'>Trang chủ</Link>
          </li>
          <li className='mx-1'>
            <Link to='/resource'>Đăng nhập</Link>
          </li>
          {/* <li className='mx-1'>
            <Link to='/resource'>Resource</Link>
          </li> */}
        </ul>
      </div>
    </>
  )
}