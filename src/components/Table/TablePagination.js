import TableContext from '../context/TableContext/TableContext'
import React, {useEffect, useContext} from 'react'

const TablePagination = () => {
    const {CURRENTPAGE, POSTSPERPAGE, LOADING, setCurrentPage, GetCryptos} = useContext(TableContext);
    const totalPages = 20; // total pages + 1
    const PageNumbers = [];
    for (let i=1; i < totalPages; i++) {
        PageNumbers.push(i)
    }
    return (
        <div className='pagination pagination--primary'>
            <ul className='paginationul paginationul--primary'>
                {PageNumbers.map((item, i) => {
                    return <button className='paginationul__button' onClick={() => {
                        setCurrentPage(item, POSTSPERPAGE)
                    }}>
                                {item}
                            </button>
                })}
            </ul>
        </div>
    )
}

export default TablePagination
