import TableContext from '../context/TableContext/TableContext'
import React, {useEffect, useContext} from 'react'
import './TablePagination.css'

const TablePagination = () => {
    const {CURRENTPAGE, POSTSPERPAGE, LOADING, setCurrentPage, GetCryptos} = useContext(TableContext);
    const totalPages = 21; // total pages + 1
    const PageNumbers = [];
    for (let i=1; i < totalPages; i++) {
        PageNumbers.push(i)
    }

    const BackLimit = () => {
        if (CURRENTPAGE === 1) {
            return;
        } else {
            return PageNumbers[CURRENTPAGE - 1]
        }
    }
    return (
        <div className='pagination pagination--primary'>
            <ul className='paginationul paginationul--primary'>
                <button className='paginationul_button' onClick={() => {
                    /* setCurrentPage(BackLimit(), POSTSPERPAGE) */
                }}>
                    {`<`}
                </button>
                {PageNumbers.map((item, i) => {
                    return <button className='paginationul__button' onClick={() => {
                        setCurrentPage(item, POSTSPERPAGE)
                    }}>
                                {item}
                            </button>
                })}
                <button className='paginationul_button' onClick={() => {
                    /* setCurrentPage(PageNumbers[CURRENTPAGE], POSTSPERPAGE) */
                }}>
                    {`>`}
                </button>
            </ul>
        </div>
    )
}

export default TablePagination
