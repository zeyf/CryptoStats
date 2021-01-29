import TableContext from '../context/TableContext/TableContext'
import React, {useContext} from 'react'
import './TablePagination.css'

const TablePagination = () => {
    const {CURRENTPAGE, POSTSPERPAGE, setCurrentPage} = useContext(TableContext);
    const totalPages = (500/POSTSPERPAGE);
    const PageNumbers = [];
    for (let i=1; i < (totalPages + 1); i++) {
        PageNumbers.push(i)
    }

    const BackButton = () => {
        if (CURRENTPAGE !== 1) {
            setCurrentPage(PageNumbers[CURRENTPAGE - 2], POSTSPERPAGE)
        }
    }
    const NextButton = () => {
        if (CURRENTPAGE !== totalPages) {
            setCurrentPage(PageNumbers[CURRENTPAGE], POSTSPERPAGE)
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


    return (
        <div className='pagination pagination--primary'>
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
