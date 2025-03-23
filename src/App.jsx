import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Routes/AppRoutes";
import { Provider } from "react-redux";
import { Store } from "./Store";

function App() {
  return (
    <>
      <Provider store={Store}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
