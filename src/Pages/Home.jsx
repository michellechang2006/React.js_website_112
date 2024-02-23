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
                        自學，是一趟充滿未知、驚喜的旅程。
                        <br></br>
                        <br></br>
                        本網頁是使用React.js前端框架開發。
                        <br></br>
                        <a className="underline" href="#">完整網站</a>是使用 No Code Builder設計。
                        </>}
                        btn={"關於我"}
                  >
                        Welcome to <i>Mlearning</i>
                  </Banner>
                  <IconsOnly
                        title={"關於我"} subtitle={"ABOUT ME"} itemsData={ABOUTME_DATA} btn={"我的學習筆記"} />
                  <Cards cardsData={PROJECTS_DATA} btn={"所有作品"} subtitle={"PROJECTS"}>精選 作品</Cards>
                  <Footer itemsData={FOOTER_DATA} />
            </>
      )
}

export default App
