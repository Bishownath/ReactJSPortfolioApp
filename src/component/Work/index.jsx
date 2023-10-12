import React from 'react'
import "./styles.scss"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Work() {

    const itemData = [
        {
            id: 1,
            title: "Cello",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
            img: "https://images.pexels.com/photos/54284/pexels-photo-54284.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        // {
        //     id: 2,
        //     title: "Hello World 2",
        //     description: "Lorem Ipsum 2",
        //     // icon: ''
        // },
        // {
        //     id: 3,
        //     title: "Hello World 3",
        //     description: "Lorem Ipsum 3",
        //     // icon: ''
        // },
    ]
    return (
        <div className='work' id='work'>
            {/* <h3>Works</h3> */}
            <div className="slider">
                {itemData.map(items => (


                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <img src="https://images.pexels.com/photos/54284/pexels-photo-54284.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                                <h1>{items.title}</h1>
                                <h3>{items.description}</h3>
                                <a href='#'><GitHubIcon /></a>
                            </div>
                            <div className="right">
                                <img src="assets/pickachu.png" alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    )
}
