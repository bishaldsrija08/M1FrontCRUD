import Button from "../Button"
import Navbar from "../Navbar"
import UState from "../UState"

const Home = () => {
    return (
        <>
        <Navbar/>
        <Button props = "Login"/>
        <UState/>
        <h1>Home</h1>
        </>
    )
}

export default Home