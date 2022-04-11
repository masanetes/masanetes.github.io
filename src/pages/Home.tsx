import React from 'react';
import './Home.css';
import {motion} from "framer-motion";
import {Box, Card, CardContent, Grid} from "@mui/material";

import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home: React.VFC = () => {

  const variants = {
    visible: (i: number) => ({
      opacity: [0, 1],
      transition: {
        delay: i * 0.5,
        y: {type: "spring", stiffness: 100},
        default: {duration: 1},
      },
      y: [30, 0]
    }),
    hidden: {opacity: 0},
  }

  const items = ["aaa", "bbb", "ccc", "ddd", "eee", "fff"]

  return (
      <Box sx={{flexGrow: 1}} className="Home">
        <Grid container spacing={2}>
          {items.map((item, index) => {
            return <Grid item xs={4}>
              <motion.div
                  custom={index}
                  initial="initial"
                  animate="visible"
                  variants={variants}
                  key={index}
              ><Item>{item}</Item>
              </motion.div>
            </Grid>
          })}
        </Grid>
      </Box>
  );
}

export default Home;
