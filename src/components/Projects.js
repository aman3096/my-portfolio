import React from 'react';
import { makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
  row:{
    backgroundColor: "white"
  },
  hr:{
    border: "2px solid #f4623a",
    maxWidth: "3.25rem",
  },
  rows: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginRight: "-15px",
    marginLeft: "-15px"
  },
  textCenter: {
      textAlign: "center",
      display: "flex",
      flexWrap: "wrap", 
      justifyContent: "space-around",
  },
  projDescColor:{
    color: "#6c757d"
  }

}))
export default function Projects() {
  const classes = useStyles()
  return (
    <div className={classes.row}>
     <h2>My Projects</h2>  
     <hr className={classes.hr}/>
     <div className={classes.rows}>
                    <div className={classes.textCenter}>
                        <div>
                            <i className="fas fa-4x fa-gem text-primary mb-4"></i>
                            <h3 className="h4 mb-2">Sturdy Themes</h3>
                            <p className="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
                        </div>
                    </div>
                    <div className={classes.textCenter}>
                        <div className="mt-5">
                            <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                            <h3 className="h4 mb-2">Up to Date</h3>
                            <p className="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
                        </div>
                    </div>
                    </div>
      <div className={classes.rows}>
                    <div className={classes.textCenter}>
                        <div className="mt-5">
                            <i className="fas fa-4x fa-globe text-primary mb-4"></i>
                            <h3 className="h4 mb-2">Ready to Publish</h3>
                            <p className="text-muted mb-0">You can use this design as is, or you can make changes!</p>
                        </div>
                    </div>
                    <div className={classes.textCenter}>
                        <div className="mt-5">
                            <i></i>
                            <h3 >Made with Love</h3>
                            <p className={classes.projDescColor}>Is it really open source if it's not made with love?</p>
                        </div>
                    </div>
          </div>
          <div className={classes.rows}>
                    <div className={classes.textCenter}>
                        <div className="mt-5">
                            <i></i>
                            <h3>Made in India</h3>
                            <p className={classes.projDescColor}>Branded tere kapde ni</p>
                        </div>
                    </div>
                    <div className={classes.textCenter}>
                        <div>
                            <i></i>
                            <h3>Tenu Suit Karda</h3>
                            <p className={classes.projDescColor}>Guru Randhawa</p>
                        </div>
                    </div>
                </div>
    </div>

  );
}
