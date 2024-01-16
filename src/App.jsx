import Header from "./layouts/Header"
import HEADER_DATA from "./Data/Header_data.json"
import Footer from "./layouts/Footer"


function App() {
      return (
            <>
                  <Header itemsData={HEADER_DATA} />
                  <div className=" h-96"></div>
                  <Footer />
            </>
      )
}

export default App
