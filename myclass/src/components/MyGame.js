import React, { useEffect, useRef, useState } from "react";
import "./gameCSS.css";
import img from "../image/assets/0.png";
import img1 from "../image/assets/1.png";
import img2 from "../image/assets/2.png";
import img3 from "../image/assets/3.png";
import img4 from "../image/assets/4.png";
import img5 from "../image/assets/5.png";
import trophy from "../image/assets/trophy.png";

const Game =() => {

    const mycurrent = useRef()

    const[comp, setComp] = useState()

    const[click, setClick] = useState()

    const Rand=(min,max)=>{
        const data = Math.floor(Math.random()*(max-min + 1)) + min
        setComp(data)
    }


    useEffect(()=>{
        setInterval(()=>{
            Rand(0, 5)
        },3000);
    }, []);

    useEffect(()=>{
        mycurrent.current = comp
    },[comp]);

    return(
        <div className="body">
            <div className="words">
                <h1>CODELAB</h1>
                <p>A Simple Game For Kids</p>
            </div>
            {/* <div>current: {comp} || previous: {mycurrent.current}</div> */}
            <div className="boxes">
                <div className="sub_box">
                    <div className="box">
                        <div className="img_cont">
                            <img onClick={()=>{
                                setClick(0)
                            }}
                             className="img" src={img}/> </div>
                        <div className="img_cont">
                            <img onClick={()=>{
                                setClick(1)
                            }}
                             className="img" src={img1}/> </div>
                        <div className="img_cont">
                            <img  onClick={()=>{
                                setClick(2)
                            }}
                            className="img" src={img2}/> </div>
                        <div className="img_cont">
                            <img onClick={()=>{
                                setClick(3)
                            }}
                             className="img" src={img3}/> </div>
                        <div className="img_cont">
                            <img  onClick={()=>{
                                setClick(4)
                            }}
                            className="img" src={img4}/> </div>
                        <div className="img_cont">
                            <img  onClick={()=>{
                                setClick(5)
                            }}
                            className="img" src={img5}/> </div>
                        
                    </div>
                    <h3>Me</h3>
                </div>
                <div className="sub_box">
                    <div className="box">
                        <div className="img_cont1">
                            {
                                (mycurrent.current===0) ? <img className="img" src={img}/> : 
                                (mycurrent.current===1) ? <img className="img" src={img1}/> :
                                (mycurrent.current===2) ? <img className="img" src={img2}/> :
                                (mycurrent.current===3) ? <img className="img" src={img3}/> :
                                (mycurrent.current===4) ? <img className="img" src={img4}/> :
                                (mycurrent.current===5) ? <img className="img" src={img5}/> :
                                null
                                
                            }
                        </div>
                    </div>
                    <h3>Computer</h3>
                </div>
                
            </div>
            <div>
                {(click===comp) ? <div>wow...You are right<img className="img3333ddx" src={trophy}/></div>: <div>Hmmm...You're wrong</div>}
            </div>

            {/* <div>Me: {click} || Computer: {comp}</div> */}

           
        </div>
    );
};
export default Game