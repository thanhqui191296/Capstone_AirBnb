import {createBrowserRouter} from "react-router-dom"
import BaseTemplate from "src/templates/base/base.templates"

export const router = createBrowserRouter([
    {
        element:<BaseTemplate/>,
        children:[
            {
                index:true,
                path:"/"
            }
        ]

    }
])