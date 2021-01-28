import {useMemo, useContext} from 'react'
import TableContext from '../context/TableContext/TableContext'


const useSortableData = (items) => {

    const {SORTEDFIELD, setSortField} = useContext(TableContext);

  
    const sortedItems = useMemo(() => {
      let sortableItems = [...items];
      if (SORTEDFIELD !== null) {
        sortableItems.sort((a, b) => {
          if (a[SORTEDFIELD.key] < b[SORTEDFIELD.key]) {
            return SORTEDFIELD.direction === 'ascending' ? -1 : 1;
          }
          if (a[SORTEDFIELD.key] > b[SORTEDFIELD.key]) {
            return SORTEDFIELD.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [items, SORTEDFIELD]);
  
    const requestSort = (key) => {
      let direction = 'ascending';
      if (
        SORTEDFIELD &&
        SORTEDFIELD.key === key &&
        SORTEDFIELD.direction === 'ascending'
      ) {
        direction = 'descending';
      }
      setSortField({ key, direction });
    };
  
    return { items: sortedItems, requestSort, SORTEDFIELD };
  };

export default useSortableData;