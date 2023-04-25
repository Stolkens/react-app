import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getListById } from '../../redux/store';
import { getColumnsByList } from '../../redux/store';

const List = () => {

  const lists = useSelector(state=>state.lists);
  const columns = useSelector(state => getColumnsByList(state, 1));
  const listData = getListById({lists}, 1);

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{listData.title}</h2>
      </header>
      <p className={styles.description}>{listData.description}</p>
      <section className={styles.columns}>
        {columns.map(column => 
          <Column key={column.id} {...column} />)}
      </section>
      <ColumnForm />
    </div> 
  );
};


export default List;