import { HeaderContainer, HeaderLogo } from "../styled/header";
import Logo from "../../assets/img/logo.svg";
import Menu from "../parts/menu";
import Button from "../styled/button";
import { Container } from "../styled/global";
import { Link } from "react-router-dom";

const Header = () => {
  const handleClick = () => {
    window.open("https://calendly.com/gegagagua", "_blank");
  };

  return (
    <Container>
      <HeaderContainer>
        <HeaderLogo>
          <Link to={"/"}>
            <img src={Logo} alt="Artteo" />
          </Link>
        </HeaderLogo>
        <Menu />
        <Button onClick={() => handleClick()}>Talk to us</Button>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
