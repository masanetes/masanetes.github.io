import React from 'react';
import './App.css';
import {motion} from "framer-motion";

const App:React.VFC =() => {

  const variants = {
    visible: { opacity: [0,1,0], transition: {duration: 5} },
    hidden: { opacity: 0 },
  }

  return (
    <div className="App">
      <motion.h1
          initial="hidden"
          animate="visible"
          variants={variants}
      >Hello,World! 👋</motion.h1>
    </div>
  );
}

export default App;
