import Link from 'next/link'
import navStyle from '../styles/Nav.module.css'
export const Nav = () => {
  return (
    <nav className={navStyle.nav}>
        <ul>
            <li><Link href='/'>Home</Link></li>
             <li><Link href='/addProduct'>Add Product</Link></li>
        </ul>
    </nav>
  )
}
export default Nav;
