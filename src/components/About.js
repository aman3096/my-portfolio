import React from 'react';
import { Button ,makeStyles} from "@material-ui/core";
const useStyles = makeStyles((theme)=>({
  root:{
    backgroundColor: "#f4623a",
    color: "white",
    height:"230px"
  },
  hr: {
    border: "2px solid #f4623a",
    maxWidth: "3.25rem",
  },
  aboutText: {
    color: "white",
    fontFamily: "Merriweather",
    fontWeight: 400
  },
  projects: {
    padding: "1.25rem 2.25rem",
    fontSize: "0.85rem",
    fontWeight: 700,
    textTransform: "uppercase",
    border: "none",
    borderRadius: "10rem",
    marginTop: "12px",
    backgroundColor: "white",
  }
}))

export default function About() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div>
        <h1>About me</h1>
        <hr className={classes.hr}/>
        <center>
        <span className={classes.aboutText}>
        I am a self-motivated individual who knows how to build websites.
        You can find more about my projects here
        </span><br/>
        <Button className={classes.projects}>Projects</Button>
        </center>
      </div>
      
    </div>
  );
}
