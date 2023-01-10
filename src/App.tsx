import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import { Book } from "./book/Book";
import { ListBooks } from "./book/ListBooks";
import { Header } from "./header/Header";
import ErrorPage from "./not-found";
import { Root } from "./root/Root";

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
    path: "/books/:bookId",
    element: <Book />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <div className="md:container md:mx-auto">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
