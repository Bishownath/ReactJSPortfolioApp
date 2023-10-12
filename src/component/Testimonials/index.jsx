import React from 'react'
import "./styles.scss"
export default function Testimonials() {

    const testimonialsData = [
        {
            id: 1,
            name: "Soobas",
            title: "Software Developer",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam ut repellendus sapiente rerum provident modi, doloribus reiciendis assumenda.",
            img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
            hovered: false
        },
        {
            id: 2,
            name: "Bishow",
            title: "Sr. Frontend Developer",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam ut repellendus sapiente rerum provident modi, doloribus reiciendis assumenda.",
            img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
            hovered: true
        },
        {
            id: 1,
            name: "Soobas",
            title: "CEO",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam ut repellendus sapiente rerum provident modi, doloribus reiciendis assumenda.",
            img: "https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?auto=compress&cs=tinysrgb&w=800",
            hovered: false
        },
    ]
    return (
        <div className='testimonials' id='testimonials'>
            <h1>Testimonials</h1>
            <div className="container">
                {testimonialsData.map(td => (
                    <div className={td.hovered ? 'card hovered' : 'card'}>
                        <div className="top">
                            <img src="https://cdn-icons-png.flaticon.com/128/2268/2268536.png" alt="" className='left' />
                            <img src={td.img} alt="" className='userImage' />
                            <img src="https://cdn-icons-png.flaticon.com/128/1968/1968750.png" alt="" className='right' />
                        </div>
                        <div className="center">
                            {td.desc}
                        </div>
                        <div className="bottom">
                            <h1>{td.name}</h1>
                            <h3>{td.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
