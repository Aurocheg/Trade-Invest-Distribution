import Header from "./components/Header"
import {Home, About} from "./pages"
import {Route, Routes} from "react-router-dom"

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} exact />
            </Routes>
        </div>
    )
}

export default App
