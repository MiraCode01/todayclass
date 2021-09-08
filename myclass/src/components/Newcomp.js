import React, {useState} from "react";
import "./myCSS.css";
import {Input, Button} from "antd";
import img from "../image/apple.jpeg";
import img1 from "../image/pexel.jpg";
import img2 from "../image/pexel2.jpg";
import img3 from "../image/pexel3.jpg";
import icon from "../image/icob.png";
import icon1 from "../image/bookmark.png";
import icon2 from "../image/comment.png";


 const Mira = ()=> {
     const[data, setData] = useState([
         
    {
        id: 1,
        icon: "KL",
        title: "Coding is fun",
        timer: "Today ~ 3sec read time",
        image: img,
    },
    {
        id: 2,
        icon: "KJ",
        title: "Coding is fun with friends",
        timer: "Last week ~ 3sec read time",
        image: img1,
    },
    {
        id: 3,
        icon: "HJ",
        title: "Coding is fun ask around",
        timer: "Yesterday ~ 4m read time",
        image: img2,
    },
    {
        id: 4,
        icon: "YU",
        title: "Coding is fun, why not try",
        timer: "Today ~ 7sec read time",
        image: img3,
    },
    {
        id: 5,
        icon: "GH",
        title: "Coding is fun",
        timer: "Today ~ 3sec read time",
        image: img2,
    },
    {
        id: 6,
        icon: "GH",
        title: "Coding is fun",
        timer: "Today ~ 3sec read time",
        image: img,
    },
    {
        id: 7,
        icon: "GH",
        title: "Coding is fun",
        timer: "Last month ~ 3sec read time",
        image: img1,
    },
    {
        id: 8,
        icon: "DF",
        title: "Coding is fun",
        timer: "Today ~ 3sec read time",
        image: img3,
    },
    {
        id: 9,
        icon: "UI",
        title: "Coding is fun",
        timer: "Today ~ 4sec read time",
        image: img,
    },
    {
        id: 10,
        icon: "GH",
        title: "Coding is fun",
        timer: "Today ~ 3sec read time",
        image: img3,
    },
    {
        id: 11,
        icon: "KI",
        title: "Coding is fun",
        timer: "Today ~ 38sec read time",
        image: img1,
    },
    {
        id: 12,
        icon: "AI",
        title: "Coding is fun",
        timer: "Today ~ 3sec read time",
        image: img2,
    },
    {
        id: 13,
        icon: "GH",
        title: "Coding is fun",
        timer: "Today ~ 3sec read time",
        image: img1,
    },
    {
        id: 14,
        icon: "HH",
        title: "Coding is fun",
        timer: "Today ~ 3sec read time",
        image: img3,
    },
    {
        id: 15,
        icon: "GH",
        title: "Coding is fun",
        timer: "Today ~ 3sec read time",
        image: img,
    },
    {
        id: 16,
        icon: "KL",
        title: "Coding is fun",
        timer: "Today ~ 3sec read time",
        image: img2,
    }  
     ]);

     const[loadimage, setLoadImage] = useState("");

     const[text, setText] = useState("")

     const showimage =(c) => {
         const file= c.target.files[0];
         const readfile = URL.createObjectURL(file);
         setLoadImage(readfile)
     }
     
    return (
        <>
        <div className="body">

            <div className="inputcontainer">
                <div className="inputlay">
                    <div className="input1">
                        <Input className="input" type="file" onChange={showimage}
                        />
                        <Input className="input" 
                        placeholder="Enter quote"
                        value={text}
                        onChange={(b)=>{
                            setText(b.target.value)
                        }}
                        />
                        <Button className="Button">
                            Add
                        </Button>
                    </div>
                    <div >
                        <img className="img" src={loadimage}/>
                    </div>
                </div>
            </div>

            <div className="maincontainer">
            {data.map((props)=>(
                <div className="container" 
                  key={props.id}>
                  <div className="icon">{props.icon}</div>
                  <div className="title">{props.title}</div>
                  <div className="timer">{props.timer}</div>
                  <img className="img1" src={props.image}></img>
                  <div className="icon_pack">
                      <img className="icon" src={icon}/>
                      <img className="icon" src={icon1}/>
                      <img className="icon" src={icon2}/>
                  </div>
              </div>
            ))}
            </div>
        </div> 
       </>
     );
 };
 export default Mira