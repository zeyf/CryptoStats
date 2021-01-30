import TableContext from '../context/TableContext/TableContext'
import React, {useContext} from 'react'
import './TablePagination.css'
import useSortableData from './useSortableData'

const TablePagination = ({ShowRowsPerPage}) => {
    const {CURRENTPAGE, ROWSPERPAGE, CRYPTOS, setCurrentPage, setRowsPerPage} = useContext(TableContext);
    const totalPages = (500/ROWSPERPAGE);
    const PageNumbers = [];
    for (let i=1; i < (totalPages + 1); i++) {
        PageNumbers.push(i)
    }

    const BackButton = () => {
        if (CURRENTPAGE !== 1) {
            setCurrentPage(PageNumbers[CURRENTPAGE - 2], ROWSPERPAGE)
        }
    }
    const NextButton = () => {
        if (CURRENTPAGE !== totalPages) {
            setCurrentPage(PageNumbers[CURRENTPAGE], ROWSPERPAGE)
        }
    }
    const BackButtonStyle = () => {
        if (CURRENTPAGE !== 1) {
            return {visibility: 'visible'}
        } else {
            return {visibility: 'hidden'}
        }

    }
    const NextButtonStyle = () => {
        if (CURRENTPAGE !== totalPages) {
            return {visibility: 'visible'}
        } else {
            return {visibility: 'hidden'}
        }
    }

    const { items, requestSort } = useSortableData(CRYPTOS);
    
    const RowPerPageonChange = (event) => {
        setRowsPerPage(event.target.value);
        setCurrentPage(PageNumbers[CURRENTPAGE - 1], event.target.value);
    }

    return (
        <div className='pagination pagination--primary'>
            {ShowRowsPerPage === 'YES' && 
                <div className='rowperpage rowperpage--primary'>
                    <label className='rowsperpage__label'>Rows per page: </label>
                    <select className='rowsperpage__select' onChange={RowPerPageonChange}>
                        <option className='rowsperpage__option'>
                            20
                        </option>
                        <option className='rowsperpage__option'>
                            25
                        </option>
                        <option className='rowsperpage__option'>
                            50
                        </option>
                    </select>
                </div>
            }
            <ul className='paginationul paginationul--primary'>
                <button className='paginationul__button' style={BackButtonStyle()} onClick={() => {
                    BackButton();
                }}>
                    {`<`}
                </button>
                <button className='paginationul__button' style={NextButtonStyle()} onClick={() => {
                    NextButton();
                }}>
                    {`>`}
                </button>
            </ul>
        </div>
    )
}

export default TablePagination
