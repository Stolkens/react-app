import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


const SearchForm = () => {

  const [searchCard, setSearchCard] = useState('');

  const dispatch = useDispatch();

const handleSubmit = e => {
  e.preventDefault();
  dispatch({type: 'SEARCHGSTRING', payload: searchCard })
  
  setSearchCard('')

};
  

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