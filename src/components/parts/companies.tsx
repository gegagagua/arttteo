import styled from "styled-components";
import Partner1 from "../../assets/img/partner1.svg";
import Partner2 from "../../assets/img/partner2.png";
import Partner3 from "../../assets/img/partner3.png";
import Partner4 from "../../assets/img/partner4.png";
import Partner5 from "../../assets/img/partner5.svg";
import Partner6 from "../../assets/img/partner6.svg";

const CompaniesContainer = styled.div`
  display: flex;
  margin-top: auto;

  a {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;

    img {
        width: auto;
        height: auto;
        transition: all 0.3s ease-in-out;
    }

    &:hover {
      img {
        transform: scale3d(1.3, 1.3, 1.3);
      }
    }
  }
`;

const Companies = () => {
  return (
    <CompaniesContainer>
      <a href="/">
        <img src={Partner1} alt="Arttteo" />
      </a>
      <a href="/">
        <img src={Partner2} alt="Arttteo" />
      </a>
      <a href="/">
        <img src={Partner3} alt="Arttteo" />
      </a>
      <a href="/">
        <img src={Partner4} alt="Arttteo" />
      </a>
      <a href="/">
        <img src={Partner5} alt="Arttteo" />
      </a>
      <a href="/">
        <img src={Partner6} alt="Arttteo" />
      </a>
    </CompaniesContainer>
  );
};

export default Companies;
