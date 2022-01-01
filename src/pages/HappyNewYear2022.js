import logo from '../img/happy-new-year-logo.webp';
import '../App.css';
import Balloon from '../component/Balloon';
import BalloonStatic from '../component/BalloonStatic';
import { Routes, Route, useParams, Navigate } from "react-router-dom";
import listWish from './listwish';

function random(num) {
    return Math.floor(Math.random() * num)
}

function HappyNewYear2022() {
    let params = useParams();
    if (!listWish.some(e => e.code === params.name)) {
        return <Navigate to="/NotFound" />
    }
    const data = listWish.filter(e => e.code === params.name)[0]
    return (
        <>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>สวัสดีปีใหม่, {data.name}</p>
                <BalloonStatic {...{
                    count: random(10) + data.defaultCount,
                    message: data.balloons
                }} />
                {data.messages.map((e) => {
                    return (
                        <>
                            {e.split("<br>").map(s => <p>{s}</p>)}
                            <BalloonStatic {...{
                                count: random(15) + data.defaultCount,
                                message: data.balloons
                            }} />
                        </>
                    )
                })
                }
                <p>สุดท้ายนี้เอาดวงปี 2565 มาให้ดูจ้า</p>
                <a className='App-link' href='https://www.sanook.com/horoscope/215349/'>จิ้มๆๆ</a>
            </header>
            <Balloon />
        </>
    )
}

export default HappyNewYear2022;
