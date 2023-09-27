
import React, { useEffect, useState } from 'react'
import "./styles.scss"
import PortfolioList from './PortfolioList';
import { featured, mobile, web, design } from '../../data';

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([])
    const list = [
        {
            id: "featured",
            title: "Featured",

        },
        {
            id: "web",
            title: "Web Apps",
        },
        {
            id: "mobile",
            title: "Mobile",
        },
        {
            id: "design",
            title: "Design",
        },
    ];

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featured)
                break
            case "web":
                setData(web)
                break
            case "mobile":
                setData(mobile)
                break
            case "design":
                setData(design)
                break
            default:
                setData(featured)
        }
    }, [selected])

    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <div className="wrapperCategory">
                <ul>
                    {list.map((item) => (
                        <PortfolioList active={selected === item.id} title={item.title} id={item.id} setSelected={setSelected} />
                    ))}
                </ul>
            </div>
            <div className="wrapperItems">
                {data.map((d) => (

                    <div className="item">
                        <img src={d.img} alt="asd" />
                    </div>
                )
                )}
            </div>
        </div >
    )
}
