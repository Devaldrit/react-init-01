import classes from "./Card.module.css";
import Button from "../Button/Button";

export function Card(props){
    return(
      <div className={classes.card}>
              <img src={props.imgLink} alt="Portrait" className={classes["card-image"]} />
              <div className={classes["card-content"]}>
                  <h2 className={classes["card-title"]}>{props.name}</h2>
                  <p className={classes["card-description"]}>
                    {props.description}</p>
                  <Button></Button>
              </div>
          </div>
    );
  }
export default Card