import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([{
  path:'/',
  element:<>Hello</>,
  children:[{index:true, element:<>test</>}]
}]);

export default router;