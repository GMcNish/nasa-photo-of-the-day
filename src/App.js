import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import NasaPhoto from "./Components/NasaPhoto"

// const dummyData = {
// date: "2023-04-05",
// explanation: "In this Hubble Space Telescope image the bright, spiky stars lie in the foreground toward the heroic northern constellation Perseus and well within our own Milky Way galaxy. In sharp focus beyond is UGC 2885, a giant spiral galaxy about 232 million light-years distant. Some 800,000 light-years across compared to the Milky Way's diameter of 100,000 light-years or so, it has around 1 trillion stars. That's about 10 times as many stars as the Milky Way. Part of an investigation to understand how galaxies can grow to such enormous sizes, UGC 2885 was also part of An Interesting Voyage and astronomer Vera Rubin's pioneering study of the rotation of spiral galaxies. Her work was the first to convincingly demonstrate the dominating presence of dark matter in our universe.",
// hdurl: "https://apod.nasa.gov/apod/image/2304/RubinsGalaxy_hst2000.jpg",
// title: "Rubin's Galaxy"
// }

function App() {
  const [data, setData] = useState();
    useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(res => {
          console.log(res)
          setData(res.data)
        })
        .catch(err => console.error(err))
    }, [])

  
  return (
    
    <div className="App">
      { data && <NasaPhoto photo={data} />}
    </div>
  );
}

export default App;
