import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img from "../image/1.jpg"
import img1 from "../image/2.jpg"
import img2 from "../image/3.jpg"
import img3 from "../image/4.jpg"
import img4 from "../image/5.jpg"
import img5 from "../image/6.jpg"
import img6 from "../image/7.jpg"
import img7 from "../image/8.jpg"
import img8 from "../image/9.jpg"
import styled from "styled-components"
// import { baseUrl } from "./config";
// import { selectors } from "sizzle";


const Slider1 = ()=> {
    const settings = {
      speed: 700,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      fade: true
    }
    return (
      <Container>
        <h2> Multiple Items</h2>
        <Slid>
            <Slider {...settings}>
              <Cont>
                <Image src={img}/>
              </Cont>
              <Cont>
                <Image src={img1}/>
              </Cont>
              <Cont>
                <Image src={img2}/>
              </Cont>
              <Cont>
                <Image src={img3}/>
              </Cont>
              <Cont>
                <Image src={img4}/>
             </Cont>
              <Cont>
                <Image src={img5}/>
              </Cont>
              <Cont>
                <Image src={img6}/>
              </Cont>
             <Cont>
                <Image src={img7}/>
              </Cont>
              <Cont>
                <Image src={img8}/>
              </Cont>
            </Slider>
        </Slid>
      
      </Container>
    );
  }

export default Slider1

const Image = styled.img`
    width: 60%;
    height: 180px;
    border-radius: 10px;
    margin: 10px;
    
`
const Container = styled.div`
    padding: 0;
    margin-left: 30px;
    margin-right: 35px;
    width: 500px;
    // height: 900px;
    
`
const Cont = styled.div`
    margin-left: 180px;
    object-fit: cover;
`
const Slid = styled.div`
    // background-color: white;
    
    

`


// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 600,
//   slidesToShow: 3,
//   slidesToScroll: 1, 
// };
// return (
// <Container>
//   <h2> Multiple Items</h2>


// single item
// const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };

// responsive

// var settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };


// Resizeable collapsible
// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class Resizable extends Component {
//   state = {
//     display: true,
//     width: 600
//   };
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 3,
//       slidesToScroll: 1
//     };
//     return (
//       <div>
//         <h2> Resizable Collapsible </h2>
//         <button
//           className="button"
//           onClick={() =>
//             this.setState({
//               width: this.state.width + 100
//             })
//           }
//         >
//           {" "}
//           increase{" "}
//         </button>
//         <button
//           className="button"
//           onClick={() =>
//             this.setState({
//               width: this.state.width - 100
//             })
//           }
//         >
//           {" "}
//           decrease{" "}
//         </button>
//         <button
//           className="button"
//           onClick={() =>
//             this.setState({
//               display: !this.state.display
//             })
//           }
//         >
//           {" "}
//           toggle{" "}
//         </button>
//         <div
//           style={{
//             width: this.state.width + "px",
//             display: this.state.display ? "block" : "none"
//           }}
//         >
//           <Slider {...settings}>
//             <div>
//               <h3>1</h3>
//             </div>
//             <div>
//               <h3>2</h3>
//             </div>
//             <div>
//               <h3>3</h3>
//             </div>
//             <div>
//               <h3>4</h3>
//             </div>
//             <div>
//               <h3>5</h3>
//             </div>
//             <div>
//               <h3>6</h3>
//             </div>
//           </Slider>
//         </div>
//       </div>
//     );
//   }
// }



// mulitple rows

// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class MultipleRows extends Component {
//   render() {
//     const settings = {
//       className: "center",
//       centerMode: true,
//       infinite: true,
//       centerPadding: "60px",
//       slidesToShow: 3,
//       speed: 500,
//       rows: 2,
//       slidesPerRow: 2
//     };
//     return (
//       <div>
//         <h2>Multiple Rows</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//           <div>
//             <h3>7</h3>
//           </div>
//           <div>
//             <h3>8</h3>
//           </div>
//           <div>
//             <h3>9</h3>
//           </div>
//           <div>
//             <h3>10</h3>
//           </div>
//           <div>
//             <h3>11</h3>
//           </div>
//           <div>
//             <h3>12</h3>
//           </div>
//           <div>
//             <h3>13</h3>
//           </div>
//           <div>
//             <h3>14</h3>
//           </div>
//           <div>
//             <h3>15</h3>
//           </div>
//           <div>
//             <h3>16</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }



// center CenterMode

// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class CenterMode extends Component {
//   render() {
//     const settings = {
//       className: "center",
//       centerMode: true,
//       infinite: true,
//       centerPadding: "60px",
//       slidesToShow: 3,
//       speed: 500
//     };
//     return (
//       <div>
//         <h2>Center Mode</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }


// fade StrictMode

// import React, { Component } from "react";
// import Slider from "react-slick";
// import { baseUrl } from "./config";

// export default class Fade extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       fade: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <div>
//         <h2>Fade</h2>
//         <Slider {...settings}>
//           <div>
//             <img src={baseUrl + "/abstract01.jpg"} />
//           </div>
//           <div>
//             <img src={baseUrl + "/abstract02.jpg"} />
//           </div>
//           <div>
//             <img src={baseUrl + "/abstract03.jpg"} />
//           </div>
//           <div>
//             <img src={baseUrl + "/abstract04.jpg"} />
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }




// lazy load

// import React, { Component } from "react";
// import Slider from "react-slick";
// import { baseUrl } from "./config";

// export default class LazyLoad extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       lazyLoad: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       initialSlide: 2
//     };
//     return (
//       <div>
//         <h2> Lazy Load</h2>
//         <Slider {...settings}>
//           <div>
//             <img src={baseUrl + "/abstract01.jpg"} />
//           </div>
//           <div>
//             <img src={baseUrl + "/abstract02.jpg"} />
//           </div>
//           <div>
//             <img src={baseUrl + "/abstract03.jpg"} />
//           </div>
//           <div>
//             <img src={baseUrl + "/abstract04.jpg"} />
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }



// variable width


// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class VariableWidth extends Component {
//   render() {
//     const settings = {
//       className: "slider variable-width",
//       dots: true,
//       infinite: true,
//       centerMode: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       variableWidth: true
//     };
//     return (
//       <div>
//         <h2>Variable width</h2>
//         <Slider {...settings}>
//           <div style={{ width: 100 }}>
//             <p>100</p>
//           </div>
//           <div style={{ width: 200 }}>
//             <p>200</p>
//           </div>
//           <div style={{ width: 75 }}>
//             <p>75</p>
//           </div>
//           <div style={{ width: 300 }}>
//             <p>300</p>
//           </div>
//           <div style={{ width: 225 }}>
//             <p>225</p>
//           </div>
//           <div style={{ width: 175 }}>
//             <p>175</p>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }



// adaptive height

// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class AdaptiveHeight extends Component {
//   render() {
//     var settings = {
//       className: "",
//       dots: true,
//       infinite: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       adaptiveHeight: true
//     };
//     return (
//       <div>
//         <h2>Adaptive height</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//             <p>Hello</p>
//           </div>
//           <div>
//             <h3>3</h3>
//             <p>See ....</p>
//             <p>Height is adaptive</p>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }


// auto play
// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class AutoPlay extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       autoplay: true,
//       speed: 2000,
//       autoplaySpeed: 2000,
//       cssEase: "linear"
//     };
//     return (
//       <div>
//         <h2>Auto Play</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }


// pause on hover

// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class PauseOnHover extends Component {
//   render() {
//     var settings = {
//       dots: true,
//       infinite: true,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 2000,
//       pauseOnHover: true
//     };
//     return (
//       <div>
//         <h2>Pause On Hover</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }

// slider syncing (nav for)

// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class AsNavFor extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       nav1: null,
//       nav2: null
//     };
//   }

//   componentDidMount() {
//     this.setState({
//       nav1: this.slider1,
//       nav2: this.slider2
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h2>Slider Syncing (AsNavFor)</h2>
//         <h4>First Slider</h4>
//         <Slider
//           asNavFor={this.state.nav2}
//           ref={slider => (this.slider1 = slider)}
//         >
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//         <h4>Second Slider</h4>
//         <Slider
//           asNavFor={this.state.nav1}
//           ref={slider => (this.slider2 = slider)}
//           slidesToShow={3}
//           swipeToSlide={true}
//           focusOnSelect={true}
//         >
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }

// custom paging


// import React, { Component } from "react";
// import Slider from "react-slick";
// import { baseUrl } from "./config";

// export default class CenterMode extends Component {
//   render() {
//     const settings = {
//       customPaging: function(i) {
//         return (
//           <a>
//             <img src={`${baseUrl}/abstract0${i + 1}.jpg`} />
//           </a>
//         );
//       },
//       dots: true,
//       dotsClass: "slick-dots slick-thumb",
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <div>
//         <h2>Custom Paging</h2>
//         <Slider {...settings}>
//           <div>
//             <img src={baseUrl + "/abstract01.jpg"} />
//           </div>
//           <div>
//             <img src={baseUrl + "/abstract02.jpg"} />
//           </div>
//           <div>
//             <img src={baseUrl + "/abstract03.jpg"} />
//           </div>
//           <div>
//             <img src={baseUrl + "/abstract04.jpg"} />
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }


// focus on selectors

// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class FocusOnSelect extends Component {
//   render() {
//     const settings = {
//       focusOnSelect: true,
//       infinite: true,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       speed: 500
//     };
//     return (
//       <div>
//         <h2>FocusOnSelect</h2>
//         <div>Click on any slide to select and make it current slide</div>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }