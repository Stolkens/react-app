import styles from './List.module.scss';
import Column from '../Column/Column';
// import { useState } from 'react';
// import shortid from 'shortid';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getAllColumns } from '../../redux/store';
import { getListById } from '../../redux/store';

const List = () => {

  const lists = useSelector(state=>state.lists);
  const columns = useSelector(getAllColumns);
  const listData = getListById({lists}, 1)

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