
// import React from 'react'

//  import Navbar from '../../components/navbar/Navbar';
//  import './Home.css'
// const Home = () => {
 
//   return (
//       <>
//     <Navbar />
    

   
//       </>
//   )
// }
// export default Home;
import React from "react";
import { Box } from "@mui/material";
import  PostCard  from "./PostCard";
import { POSTS_DATA } from "./mock";
import Navbar from '../../components/navbar/Navbar';
import './Home.css'
function Home() {
  return (

    <>
    <Navbar/>
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#efefef",
        }}
      >
        {POSTS_DATA.map((post, index) => (
          <Box key={index} sx={{ my: 4 }}>
                  <PostCard post={post} />
          </Box>
        ))}
      </Box>
    </Box>
    </>
  );
}

export default Home;