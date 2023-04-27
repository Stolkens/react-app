import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addCollumn } from '../../redux/store';



const ColumnForm = props => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState(''); // tworzy stan dla inputa i przypisuje mu wartość początkową '' (pusty string)
  const [icon, setIcon] = useState(''); // tworzy stan dla inputa i przypisuje mu wartość początkową '' (pusty string)

  const handleSubmit = (e) => {
    // tworzy funkcję, która będzie wywoływana po kliknięciu w przycisk
    e.preventDefault(); // zapobiega przeładowaniu strony po kliknięciu w przycisk
    // props.action({ title: title, icon: icon }); // wywołuje funkcję przekazaną w propsach, która dodaje nową kolumnę do tablicy kolumn w App.js
    dispatch (addCollumn({title, icon, listId: props.listId})) // uruchamia akcję przygotowana w reducerze przy uzyciu dispatcha
    setTitle(''); // czyści pole input po dodaniu nowej kolumny
    setIcon('');
  };

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <span>Title:</span><TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <span>Icon:</span><TextInput value={icon} onChange={e => setIcon(e.target.value)} />
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;