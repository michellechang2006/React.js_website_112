import { GlobeOutline } from "../../assets/icons"
import "./index.css"

export default function IconsOnly() {
    return (
        <div className="icons-only">
            <section>
                <h4>ABOUT ME</h4>
                <h2>關於我</h2>
            </section>
            <p>在國三遇見了「自學」。 並展開了我的「自學」之旅到了現在...。
                一位喜歡在不同領域探索的「自主學習者」。<br></br>
                本網站記錄了我的學習軌跡。以實作專案來促成「用以致學」的學習方式。開始造訪網站，和我一起踏上這趟充滿未知、驚喜的旅程吧！</p>
            <div>
                <div className="icon-card">
                    <GlobeOutline />
                    <div>
                        <h5>Web 技術</h5>
                        <p>HTTP、腳本語言 ...等</p>
                    </div>
                </div>
                <div className="icon-card">
                    <GlobeOutline />
                    <div>
                        <h5>Web 技術</h5>
                        <p>HTTP、腳本語言 ...等</p>
                    </div>
                </div>
                <div className="icon-card">
                    <GlobeOutline />
                    <div>
                        <h5>Web 技術</h5>
                        <p>HTTP、腳本語言 ...等</p>
                    </div>
                </div>
                <div className="icon-card">
                    <GlobeOutline />
                    <div>
                        <h5>Web 技術</h5>
                        <p>HTTP、腳本語言 ...等</p>
                    </div>
                </div>
            </div>
        </div>
    )
}