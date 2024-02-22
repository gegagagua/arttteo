import Companies from "../../components/parts/companies";
import Button from "../../components/styled/button";
import { Container } from "../../components/styled/global";
import { Title } from "../../components/styled/title";
import { HomeContainer } from "./styled";
import Clutch from "../../assets/img/clutch.svg";
import BG from "../../assets/img/bg.svg";
import BGBlue from "../../assets/img/bgBlue.svg";
import { useEffect, useState } from "react";

const HomePage = () => {
  const words = [
    "exceptional SEO?",
    "your own AI?",
    "a developer?",
    "a tech team?",
  ];
  const [active, setActive] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const cycleWords = () => {
      setActive((prevActive) => {
        const nextIndex = (prevActive + 1) % words.length;
        return nextIndex;
      });
      setShow(false);

      setTimeout(() => {
        setShow(true);
      }, 2500);
    };

    const intervalId = setInterval(cycleWords, 3000);
    return () => clearInterval(intervalId);
  }, [words.length]);

  const handleClick = () => {
    window.open("https://calendly.com/gegagagua", "_blank");
  };

  return (
    <Container>
      <HomeContainer>
        <img src={BG} alt="arttteo" />
        <img className="bottom" src={BG} alt="arttteo" />
        <img className="circle" src={BGBlue} alt="arttteo" />
        <div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M9.15333 2.33999L10.3267 4.68666C10.4867 5.01333 10.9133 5.32666 11.2733 5.38666L13.4 5.73999C14.76 5.96666 15.08 6.95333 14.1 7.92666L12.4467 9.57999C12.1667 9.85999 12.0133 10.4 12.1 10.7867L12.5733 12.8333C12.9467 14.4533 12.0867 15.08 10.6533 14.2333L8.66 13.0533C8.3 12.84 7.70667 12.84 7.34 13.0533L5.34667 14.2333C3.92 15.08 3.05333 14.4467 3.42667 12.8333L3.9 10.7867C3.98667 10.4 3.83333 9.85999 3.55333 9.57999L1.9 7.92666C0.926667 6.95333 1.24 5.96666 2.6 5.73999L4.72667 5.38666C5.08 5.32666 5.50667 5.01333 5.66667 4.68666L6.84 2.33999C7.48 1.06666 8.52 1.06666 9.15333 2.33999Z"
                fill="#FF3D2E"
              />
            </svg>
            5.0 Rated on
            <img src={Clutch} alt="Arttteo" />
          </span>
          <Title>
            Need <span className={show ? "show" : ""}>{words[active]}</span>
          </Title>
          <p>Seriously stand out from the rest.</p>
          <Button onClick={() => handleClick()} withoutBorder>
            Talk to us
          </Button>
          <Companies />
        </div>
      </HomeContainer>
    </Container>
  );
};

export default HomePage;
