import Header from "./layouts/Header"
import HEADER_DATA from "./Data/Header_data.json"
import FOOTER_DATA from "./Data/Footer_data.json"
import Footer from "./layouts/Footer"


function App() {
      return (
            <>
                  <Header itemsData={HEADER_DATA} />
                  <div className="h-screen">
                  </div>
                  <Footer itemsData={FOOTER_DATA} />
            </>
      )
}

export default App
