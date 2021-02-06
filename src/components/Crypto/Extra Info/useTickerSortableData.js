import {useMemo, useContext} from 'react'
import CryptoContext from '../../context/CryptoContext/CryptoContext';



const useTickerSortableData = (items) => {

    const {TICKERSORTEDFIELD, setTickerSortField} = useContext(CryptoContext);

    const sortedItems = useMemo(() => {
        if (items) {

            let sortableItems = [...items];
            if (TICKERSORTEDFIELD !== null) {
                sortableItems.sort((a, b) => {
                    if (a[TICKERSORTEDFIELD.key] < b[TICKERSORTEDFIELD.key]) {
                        return TICKERSORTEDFIELD.direction === 'ascending' ? -1 : 1;
                    }
                    if (a[TICKERSORTEDFIELD.key] > b[TICKERSORTEDFIELD.key]) {
                        return TICKERSORTEDFIELD.direction === 'ascending' ? 1 : -1;
                    }
                    return 0;
                });
            }
            return sortableItems;
        }
    }, [items, TICKERSORTEDFIELD]);
  
    const requestSort = (key) => {
      let direction = 'ascending';
      if (
        TICKERSORTEDFIELD &&
        TICKERSORTEDFIELD.key === key &&
        TICKERSORTEDFIELD.direction === 'ascending'
      ) {
        direction = 'descending';
      }
      setTickerSortField({ key, direction });
    };
  
    return { items: sortedItems, requestSort, TICKERSORTEDFIELD };
  };

export default useTickerSortableData;