import React from 'react';
import ReactPaginate from "react-paginate";
import './paginate.scss'
const Paginate = ({onChange}) => {
    return (
        <div className={'paginate'}>
            <div className="container">
                <ReactPaginate
                    className={'paginate__block'}
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={(event) => onChange(event.selected + 1)}
                    pageRangeDisplayed={4}
                    pageCount={3}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                />
            </div>

        </div>
    );
};

export default Paginate;