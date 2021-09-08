import React, { useEffect, useRef, useState } from "react";
import "./cardCss.css";
import queen from "../image/queen.png";
import king from "../image/king.png";
import a2 from "../image/card2.png";
import a3 from "../image/card3.png";
import a4 from "../image/card4.png";
import a5 from "../image/card5.jpg";
import a6 from "../image/card6.png";
import a7 from "../image/card7.jpg";
import a8 from "../image/card8.jpg";
import back from "../image/back.jpg";

const Card = () => {

    const[count, setCount] =  useState(0)

    const Rand = () => {
        setCount(Math.floor(Math.random()*9))
    }

    const[comp, setComp] = useState(0)
    const Rand1 = () => {
      setComp(Math.floor(Math.random()*9))
  }
    const[front, setFront] = useState(back)
    const[front1, setFront1] = useState(back)
    const[front2, setFront2] = useState(back)
    const[front3, setFront3] = useState(back)
    const[front4, setFront4] = useState(back)
    const[front5, setFront5] = useState(back)
    const[front6, setFront6] = useState(back)
    const[front7, setFront7] = useState(back)
    const[front8, setFront8] = useState(back)

    // const[image, setImage] = useState([king, queen, num2])

    // const img = [back, king, num2]

    

    useEffect(()=>{
        setInterval(()=>{
            Rand()
        }, 3000);
    }, []);

    
  //   useEffect(()=>{
  //     setInterval(()=>{
  //         Rand1()
  //     }, 3000);
  // }, []);

    
     
    
    return (
        <div className="body">
                <div className="img_cont">
                    <div
                     onClick={()=>{
                       if (count===0){setFront(queen)
                      }else if(count===1){
                         setFront(king)
                       }else if(count===2){
                        setFront(a2)
                      }else if(count===3){
                        setFront(a3)
                      }else if(count===4){
                        setFront(a4)
                      }else if(count===5){
                        setFront(a5)
                      }else if(count===6){
                        setFront(a6)
                      }else if(count===7){
                        setFront(a7)
                      }else if(count===8){
                        setFront(a8)
                      }else{
                        setFront(null)
                      }
                     }}
                    className="img">
                        <img className="img1" src={front}/>  
                    </div>

                    <div
                    onClick={()=>{
                      if (count===0){setFront1(a8)
                     }else if(count===1){
                        setFront1(queen)
                      }else if(count===2){
                       setFront1(king)
                     }else if(count===3){
                       setFront1(a2)
                     }else if(count===4){
                       setFront1(a3)
                     }else if(count===5){
                       setFront1(a4)
                     }else if(count===6){
                       setFront1(a5)
                     }else if(count===7){
                       setFront1(a6)
                     }else if(count===8){
                       setFront1(a7)
                     }else{
                       setFront1(null)
                     }
                    }}
                    className="img">
                      <img className="img1" src={front1}/>
                    </div>

                        <div
                        onClick={()=>{
                          if (count===0){setFront1(a7)
                         }else if(count===1){
                            setFront2(a8)
                          }else if(count===2){
                           setFront2(queen)
                         }else if(count===3){
                           setFront2(king)
                         }else if(count===4){
                           setFront2(a2)
                         }else if(count===5){
                           setFront2(a3)
                         }else if(count===6){
                           setFront2(a4)
                         }else if(count===7){
                           setFront2(a5)
                         }else if(count===8){
                           setFront2(a6)
                         }else{
                           setFront2(null)
                         }
                        }}
                    className="img">
                      <img className="img1" src={front2}/>
                    </div>

                        <div
                        onClick={()=>{
                          if (count===0){setFront(a6)
                         }else if(count===1){
                            setFront3(a7)
                          }else if(count===2){
                           setFront3(a8)
                         }else if(count===3){
                           setFront3(queen)
                         }else if(count===4){
                           setFront3(king)
                         }else if(count===5){
                           setFront3(a2)
                         }else if(count===6){
                           setFront3(a3)
                         }else if(count===7){
                           setFront3(a4)
                         }else if(count===8){
                           setFront3(a5)
                         }else{
                           setFront3(null)
                         }
                        }}
                    className="img">
                      <img className="img1" src={front3}/>
                    </div>

                        <div
                        onClick={()=>{
                          if (count===0){setFront4(a5)
                         }else if(count===1){
                            setFront4(a6)
                          }else if(count===2){
                           setFront4(a7)
                         }else if(count===3){
                           setFront4(a8)
                         }else if(count===4){
                           setFront4(queen)
                         }else if(count===5){
                           setFront4(king)
                         }else if(count===6){
                           setFront4(a2)
                         }else if(count===7){
                           setFront4(a3)
                         }else if(count===8){
                           setFront4(a4)
                         }else{
                           setFront4(null)
                         }
                        }}
                    className="img">
                      <img className="img1" src={front4}/>
                    </div>

                        <div
                        onClick={()=>{
                          if (count===0){setFront5(a4)
                         }else if(count===1){
                            setFront5(a5)
                          }else if(count===2){
                           setFront5(a6)
                         }else if(count===3){
                           setFront5(a7)
                         }else if(count===4){
                           setFront5(a8)
                         }else if(count===5){
                           setFront5(queen)
                         }else if(count===6){
                           setFront5(king)
                         }else if(count===7){
                           setFront5(a2)
                         }else if(count===8){
                           setFront5(a3)
                         }else{
                           setFront5(null)
                         }
                        }}
                    className="img">
                      <img className="img1" src={front5}/>
                    </div>

                        <div
                        onClick={()=>{
                          if (count===0){6(a3)
                         }else if(count===1){
                            setFront6(a4)
                          }else if(count===2){
                           setFront6(a5)
                         }else if(count===3){
                           setFront6(a6)
                         }else if(count===4){
                           setFront6(a7)
                         }else if(count===5){
                           setFront6(a8)
                         }else if(count===6){
                           setFront6(queen)
                         }else if(count===7){
                           setFront6(king)
                         }else if(count===8){
                           setFront6(a2)
                         }else{
                           setFront6(null)
                         }
                        }}
                    className="img">
                      <img className="img1" src={front6}/>
                    </div>

                        <div
                        onClick={()=>{
                          if (count===0){setFront7(a2)
                         }else if(count===1){
                            setFront7(a3)
                          }else if(count===2){
                           setFront7(a4)
                         }else if(count===3){
                           setFront7(a5)
                         }else if(count===4){
                           setFront7(a6)
                         }else if(count===5){
                           setFront7(a7)
                         }else if(count===6){
                           setFront7(a8)
                         }else if(count===7){
                           setFront7(queen)
                         }else if(count===8){
                           setFront7(king)
                         }else{
                           setFront7(null)
                         }
                        }}
                    className="img">
                      <img className="img1" src={front7}/>
                    </div>

                         <div
                         onClick={()=>{
                          if (count===0){setFront8(king)
                         }else if(count===1){
                            setFront8(a2)
                          }else if(count===2){
                           setFront8(a3)
                         }else if(count===3){
                           setFront8(a4)
                         }else if(count===4){
                           setFront8(a5)
                         }else if(count===5){
                           setFront8(a6)
                         }else if(count===6){
                           setFront8(a7)
                         }else if(count===7){
                           setFront8(a8)
                         }else if(count===8){
                           setFront8(queen)
                         }else{
                           setFront8(null)
                         }
                        }}
                    className="img">
                      <img className="img1" src={front8}/>
                    </div>
                  
                </div>

                <div>
                  {
                    (count===comp) ? <div>You are right</div> : <div>wrong</div>
                    // (queen===a) ? <div>You are right</div> :
                    // (queen===a) ? <div>You are right</div> :
                    // (queen===a) ? <div>You are right</div> :
                    // (queen===a) ? <div>You are right</div> :
                    // (queen===a) ? <div>You are right</div> :
                    // (queen===a) ? <div>You are right</div> :
                    // (queen===a) ? <div>You are right</div> : 
                  }
                </div>
                
                <div className="img_cont">
                  {
                    (comp===0) ? <img src={queen}/>:
                    (comp===1) ? <img src={king}/>:
                    (comp===2) ? <img src={a6}/>:
                    (comp===3) ? <img src={a2}/>:
                    (comp===4) ? <img src={a7}/>:
                    (comp===5) ? <img src={a4}/>:
                    (comp===6) ? <img src={a8}/>:
                    (comp===7) ? <img src={a3}/>:
                    (comp===8) ? <img src={a5}/>:
                    null
                  }
                </div>
                {/* <div>{count}</div> */}
                {/* <div>{comp}</div> */}
                
                
        </div>
    );
};
export default Card