import styles from "./Card.module.scss";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { toggleCardFavorite } from "../../redux/cardsReducer";
import { removeCard } from "../../redux/cardsReducer";


const Card = props => {

  const dispatch = useDispatch();

  const handleClick=(e)=> {
    e.preventDefault();
    dispatch(toggleCardFavorite(props.id)) 
  }

  const handleDelete=(e)=> {
    e.preventDefault();
    dispatch(removeCard(props.id))
  }
 
  return (
    <li className={styles.card}>{props.title}
      <div>
        <button onClick={handleClick} className={clsx(styles.button, props.isFavorite && styles.isActive)}><i className={'fa fa-star-o'} /></button>
        <button onClick={handleDelete} className={styles.button}><i className={'fa fa-trash'} /></button>
      </div>        
    </li> 
    )
};

export default Card;

