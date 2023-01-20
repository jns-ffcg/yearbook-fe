import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import AddBook from "./book/AddBook";
import { Book } from "./book/Book";
import { ListBooks } from "./book/ListBooks";
import { Header } from "./header/Header";
import ErrorPage from "./not-found";
import { Root } from "./root/Root";
import StravaAuth from "./strava/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/books",
    element: <ListBooks />,
  },
  {
    path: "/books/add",
    element: <AddBook />,
  },
  {
    path: "/books/:bookId",
    element: <Book />,
  },
  {
    path: "/strava/auth",
    element: <StravaAuth />,
  },
]);

function App() {
  const clientId = "100210";
  const redirectUri = "http://localhost:3000/strava/auth";
  const responseType = "code";
  const scope = "read_all,activity:read_all";
  function stravaLogIn() {
    window.location.href = `https://www.strava.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;
  }
  return (
    <>
      <Header />
      <div>
        <button onClick={stravaLogIn}>Strava log in</button>
      </div>
      <div className="md:container md:mx-auto">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
