import "./App.css"
function App() {
  const name = "Bishal Rijal"
  const cssObj = {
    color: "white"
  }

  return (
    <>
    <h1>Hello World!{1+1}</h1>
    <h2 style={cssObj}>{name}</h2>
    </>
  )
}

export default App