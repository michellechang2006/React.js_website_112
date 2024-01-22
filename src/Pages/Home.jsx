import HEADER_DATA from "../Data/Header_data.json"
import FOOTER_DATA from "../Data/Footer_data.json"
import STATSCARDS_DATA from "../Data/StatsCards_data.json"
import Header from "../layouts/Header"
import Footer from "../layouts/Footer"
import Banner from "../layouts/Banner"
import StatsCards from "../layouts/StatsCards"


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
                  <StatsCards title={"關於我"} subtitle={"About Me"} itemsData={STATSCARDS_DATA}
                        paragraph={
                              <>在國三遇見了「自學」。
                                    並展開了我的「自學」之旅到了現在...。一位喜歡在不同領域探索的「自主學習者」。<br></br>
                                    本網站記錄了我的學習軌跡。以實作專案來促成「用以致學」的學習方式。開始造訪網站，和我一起踏上這趟充滿未知、驚喜的旅程吧！
                              </>}
                  />
                  <Footer itemsData={FOOTER_DATA} />
            </>
      )
}

export default App
