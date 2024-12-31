import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"

const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  }
])
const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
