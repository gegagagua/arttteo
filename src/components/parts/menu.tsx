import { Link } from "react-router-dom"
import { HeaderMenu } from "../styled/header"

const Menu = () => {
    return (
        <HeaderMenu>
            <Link to='/'>Services</Link>
            <Link to='/'>Our works</Link>
            <Link to='/'>Expertise</Link>
            <Link to='/'>Blog</Link>
            <Link to='/'>Contact</Link>
        </HeaderMenu>
    )
}

export default Menu