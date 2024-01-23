import HEADER_DATA from "../Data/Header_data.json"
import FOOTER_DATA from "../Data/Footer_data.json"
import ABOUTME_DATA from "../Data/AboutMe_data.json"
import PROJECTS_DATA from "../Data/Projects_data.json"
import Header from "../layouts/Header"
import Footer from "../layouts/Footer"
import Banner from "../layouts/Banner"
// import StatsCards from "../layouts/StatsCards"
import IconsOnly from "../layouts/IconsOnly"
import Cards from "../layouts/Cards"


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
                  <IconsOnly
                        title={"關於我"} subtitle={"ABOUT ME"} itemsData={ABOUTME_DATA} btn={"我的學習筆記"} />
                  <div className="flex justify-center p-20">
                        <Cards cardsData={PROJECTS_DATA} btn={"所有作品"} subtitle={"PROJECTS"}>精選 作品</Cards>
                  </div>
                  <Footer itemsData={FOOTER_DATA} />
            </>
      )
}

export default App
