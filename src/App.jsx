import { RouterProvider } from "react-router-dom"
import { myRouter } from "./router"


function App() {

  return (
    <>
    <RouterProvider router={myRouter} future={{ v7_startTransition: true, v7_relativeSplatPath: true }} />
    </>
  )
}
export default App
