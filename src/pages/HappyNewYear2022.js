import logo from '../img/happy-new-year-logo.webp';
import '../App.css';
import "../style/Youtube.css";
import Balloon from '../component/Balloon';
import BalloonStatic from '../component/BalloonStatic';
import { useParams, Navigate } from "react-router-dom";
import listWish from './listwish';
import YoutubeEmbed from "../component/YoutubeEmbed";

function random(num) {
    return Math.floor(Math.random() * num)
}

function HappyNewYear2022() {
    let params = useParams();
    if (!listWish.some(e => e.code === params.name)) {
        return <Navigate to="/NotFound" />
    }
    const data = listWish.filter(e => e.code === params.name)[0];
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>สวัสดีปีใหม่, {data.name}</p>
                <BalloonStatic {...{
                    count: random(20) + data.defaultCount,
                    message: data.balloons
                }} />
                {/* ขี้โกงอย่ามาอ่านในนี้นะ  */}
                {data.messages.map((e) => {
                    return (
                        <>
                            {
                                e.type === 'text' ?
                                    e.mess.split("<br>").map(s => <p>{s}</p>)
                                    :
                                    e.type === 'img' ?
                                        <img src={e.mess} />
                                        :
                                        e.type === 'youtube' ?
                                            <YoutubeEmbed embedId={e.mess} />
                                            : null
                            }
                            <BalloonStatic {...{
                                count: random(20) + data.defaultCount + e.count,
                                message: data.balloons
                            }} />
                        </>
                    )
                })
                }
                <p>สุดท้ายท้ายสุดเอาดวงปี 2565 มาฝากจ้า</p>
                <a className='App-link' href='https://www.sanook.com/horoscope/215349/'>จิ้มๆๆ</a>
            </header>
            <Balloon />
            <footer>
                <img src={data.gif} />
            </footer>
        </div>
    )
}

export default HappyNewYear2022;
