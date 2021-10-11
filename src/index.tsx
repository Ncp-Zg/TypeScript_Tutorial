import {render} from "react-dom"
import App from "./App"
import App2 from "./App2"
import App3 from "./App3"
import "./index.css"
import { Provider} from "react-redux"
import { store } from "./state"

const root = document.querySelector("#root")

render(
    <Provider store={store}>
       <App3/> 
    </Provider>

,root)