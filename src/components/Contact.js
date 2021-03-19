import React from 'react';
import { makeStyles } from  "@material-ui/core";


const useStyles = makeStyles((theme)=>({
  email:{
    color: "#f4623a"
  },
  hr:{
    width: "10rem",
    borderWidth: "0.2rem",
    border: "3px solid #f4623a"
  },
  text: {
    margin: "50px"
  }
}));
export default function Contact() {
  const classes = useStyles();
  return (
    <div>
        <h1>Let{"'"}s Get In Touch</h1>
        <hr className={classes.hr}></hr>
        <div className={classes.text}>Impressed by the work? Send me an email and I will contact you as soon as possible!</div>
        <span className={classes.email}>aman.tandon3096@gmail.com</span>
    </div>
  );
}
