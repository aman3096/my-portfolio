import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import img from '../assets/bg-masthead.jpg';
import { Button } from "@material-ui/core"
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    home: {
        backgroundImage: `url(${img})`,
        width:"100%",
        height:"640px",
        
    },
    headFont: {
        fontFamily:"Merriweather-sans",
        fontWeight: 600,
        fontSize: "56px",
        color: "white",
        transform: "translate(-50%, -50%)",
        top: "20%",
        left: "50%",
        position: "absolute",
        width: "80%",
        marginTop:"200px",
        filter: "none"
    },
    description: { 
        fontFamily: "Meriweather",
        fontSize: "18.4px",
        color: "gray",
        position: "absolute",
        transform: "translate(-30%, -30%)",
        top: "50%",
        marginTop:"180px",
        left: "40%"
    },
    hr: {
        width: "10rem",
        position: "absolute",
        top: "70%",
        left: "45%",
        borderWidth: "0.2rem",
        border: "3px solid #f4623a"

    },
    button: {
        padding: "1.25rem 2.25rem",
        fontSize: "0.85rem",
        fontWeight: "700",
        textTransform: "uppercase",
        border: "none",
        borderRadius: "10rem",
        backgroundColor: "#f4623a",
        color: "white",
        position: "absolute",
        top: "80%",
        left: "45%"
    }
  }));
export default function Home() {
    const classes = useStyles();
    return (
        <>
        <div className={classes.home} style={{filter: "blur(7px)"}}/>
        <span className={classes.headFont}> HI I AM AMAN TANDON, FULL STACK DEVELOPER</span>
        <hr className={classes.hr}/>
        <span className={classes.
// @ts-ignore
        description}>I build and create websites using React.js,JSX, Material Ui, Express.js, MongoDB</span>
        <Button className={classes.button}>Find out more</Button>
        </>
    );
}
