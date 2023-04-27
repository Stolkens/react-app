import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { searchString } from '../../redux/store';


const SearchForm = () => {

  const [searchCard, setSearchCard] = useState('');

  const dispatch = useDispatch();

const handleSubmit = e => {
  e.preventDefault();
  dispatch(searchString(searchCard))
  // dispatch({type: 'SEARCHGSTRING', payload: searchCard })
  
  setSearchCard('')
};

useEffect(() => { // useEffect wykonuje się po każdym renderze komponentu
  dispatch(searchString('')); // wywołuje akcję searchString i przekazuje do niej pusty string
}, [dispatch]); // drugi parametr to tablica zależności, która określa, kiedy useEffect ma się wykonać
  
  return (
      <form className={styles.searchForm} onSubmit={handleSubmit}>
          <TextInput value={searchCard} onChange={e => setSearchCard(e.target.value)} placeholder='Search...'></TextInput>
          <Button>
            <span className='fa fa-search'></span>
          </Button>
      </form>
  );
};

export default SearchForm;