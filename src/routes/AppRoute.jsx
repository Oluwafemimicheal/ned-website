import App from "../App";
import { createBrowserRouter } from "react-router-dom";

const AppRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
])

export default AppRoute;