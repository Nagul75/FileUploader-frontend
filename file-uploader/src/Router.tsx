import Signup from "./pages/Signup"
import Login from "./pages/Login"

const Router = [
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/login",
        element: <Login />
    }
]

export default Router