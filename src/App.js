// import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Footbar from "./components/Footbar";
import Header from "./components/Header";
import MadeWith from "./components/MadeWith";
import Navbar from "./components/Navbar";
import ShopAll from "./components/ShopAll";
import TopProducts from "./components/TopProducts";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navbar />,
//     children: [
//       {
//         path: "/",
//         element: <Header />,
//       },
//       {
//         path: "/",
//         element: <TopProducts />,
//       },
//       {
//         path: "/",
//         element: <ShopAll />,
//       },
//       {
//         path: "/",
//         element: <MadeWith />,
//       },
//       {
//         path: "/cart",
//         element: <Cart />,
//       },
//     ],
//   },
//   {
//     path: "/",
//     element: <Footbar />,
//   },
// ]);

function App() {
  // return <RouterProvider router={router} />;
  return (
    <>
      <Navbar />
      <Header />
      <TopProducts />
      <ShopAll />
      <MadeWith />
      <Footbar />
    </>
  );
}

export default App;
