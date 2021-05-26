import React from 'react';
import ReactPaginate from 'react-paginate';
import './index.scss';

const Pagination = ({info, getCharactersPerPage}): React.ReactElement => {

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        getCharactersPerPage(selectedPage);
    }

    return (
        <div className="pagination__container">
            <ReactPaginate 
            pageCount={34}
            pageRangeDisplayed={10}
            marginPagesDisplayed={5}
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            onPageChange={handlePageClick}
            />
        </div>
    );
}

export default Pagination;