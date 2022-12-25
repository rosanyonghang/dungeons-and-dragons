import './App.scss';
import {Provider} from "react-redux";
import {store} from "./store/store";
import {MainContainer} from "./hoc/main";
import MainRoute from "./routes";

function App() {
  return (
      <Provider store={store}>
        <MainContainer>
          <MainRoute/>
        </MainContainer>
      </Provider>
  );
}

export default App;
