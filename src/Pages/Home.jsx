import HEADER_DATA from "../Data/Header_data.json"
import FOOTER_DATA from "../Data/Footer_data.json"
import Header from "../layouts/Header"
import Footer from "../layouts/Footer"
import Banner from "../layouts/Banner"

function App() {
      return (
            <>
                  <Header itemsData={HEADER_DATA} />
                  <Banner subtitle={<>活到老，學到老。<br></br>
                        自學，是一趟充滿未知、驚喜的旅程。</>}
                        btn={"關於我"}
                  >
                        Welcome to <i>Mlearning</i>
                  </Banner>
                  <Footer itemsData={FOOTER_DATA} />
            </>
      )
}

export default App
