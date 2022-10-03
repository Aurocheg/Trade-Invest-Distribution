import Header from "./components/Header"
import {Home, About, Services, Documents, Contacts} from "./pages"
import {Route, Routes} from "react-router-dom"
import {Container} from "@mui/material"

function App() {
    return (
        <div className="App">
            <Header />
            <Container maxWidth="lg" style={{marginTop: "76px"}}>
                <Routes>
                    <Route index path="/home" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/services" element={<Services />} />
                    <Route exact path="/documents" element={<Documents />} />
                    <Route exact path="/contacts" element={<Contacts />} />
                </Routes>
            </Container>
        </div>
    )
}

export default App