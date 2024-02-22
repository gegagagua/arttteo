import { HeaderContainer, HeaderLogo } from "../styled/header"
import Logo from '../../assets/img/logo.svg'
import Menu from "../parts/menu"
import Button from "../styled/button"

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLogo>
                <img src={Logo} alt="Artteo"/>
            </HeaderLogo>
            <Menu />
            <Button>
                Talk to us
            </Button>
        </HeaderContainer>
    )
}

export default Header