import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import styles from "./CardForm.module.scss";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { addCard } from "../../redux/store";

const CardForm = props => {

  const dispatch = useDispatch()

  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    dispatch (addCard({title, columnId: props.columnId, isFavorite: props.isFavorite}))
    // dispatch ({type: 'ADD_CARD', payload: {title, columnId: props.columnId} })
    // props.action({title: title}, props.columnId);
    setTitle('');
  };



  return (
    <form className={styles.CardForm} onSubmit={handleSubmit}>
      <TextInput type="text" value={title} onChange={e=>setTitle(e.target.value)}/>
      <Button>Add Card</Button>
    </form>
  );
};

export default CardForm;