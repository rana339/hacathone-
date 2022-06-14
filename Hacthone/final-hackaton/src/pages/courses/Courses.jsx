import React from "react"
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

import "./Courses.css";

const Courses1= (props)=>{
return(
          <>

    <div className="main2" >
    <img  className="poster" src={props.img} />

    <p>
      Name={props.Name} <br/>
      Produce={props.Price}<br/>
       Written={props.Year}
       <br/> <Link to="/enrollment" className='link' >register now!</Link>
       </p>
       </div>
   

</>
);
};






      

const Courses = () => {
  return (<>
  <Navbar/>
    <div className="main">
      <Courses1
        img="https://5.imimg.com/data5/JQ/AX/MY-79102671/hardware-courses-500x500.jpg"
        Name="Hardware Course"
    Price="5000"
        Year="2022"
     
      />
      <Courses1
        img="https://i.ytimg.com/vi/qiQR5rTSshw/maxresdefault.jpg"
        Name="Network50000"
    Price="5000"
        Year="2022"
      />
      <Courses1
        img="https://hackr.io/blog/best-java-courses/thumbnail/large"
        Name="Java"
    Price="50000"
        Year="2022"
      />
        <Courses1
                img="https://www.fossmint.com/wp-content/uploads/2020/03/Udemy-Advance-Python-Learning-Courses.png"
                Name="python"
               Price="5000"
                Year="2022"
      />
        <Courses1
        img="https://i.pinimg.com/474x/83/34/24/833424244cbf585cc789776110471d74.jpg"
        Name="Web Desiging"
    Price="50000"
        Year="2022"
      />


        <Courses1
      img="https://www.gdli.edu.ng/view/prof-course/courses%20images/Graphic-Design-Institute.png"
      Name="Graphic Design"
    Price="50000"
      Year="2022"
    />

    </div>
    </>
  );
};

export default Courses;