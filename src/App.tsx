import Header from "./components/layout/Header";
import { Main } from "./components/styled/global";
import Routes from "./routes";


const App = () => {
  return (
    <Main>
      <Header />
      <Routes />
    </Main>
  );
}

export default App;
