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

    return (
        <div className='pagination pagination--primary'>
            <ul className='paginationul paginationul--primary'>
                <button className='paginationul_button' onClick={() => {
                    if (CURRENTPAGE !== 1) {
                        setCurrentPage(PageNumbers[CURRENTPAGE - 2], POSTSPERPAGE)
                    }
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
                    if (CURRENTPAGE !== totalPages) {
                        setCurrentPage(PageNumbers[CURRENTPAGE], POSTSPERPAGE)
                    }
                }}>
                    {`>`}
                </button>
            </ul>
        </div>
    )
}

export default TablePagination
