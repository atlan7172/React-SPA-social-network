import * as React from "react";
import s from './Paginator.module.css'
import cn from 'classnames'

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let portionSize = 5                                       // Кол-во отображаемых страниц

    let pagesCount = Math.ceil(totalUsersCount / pageSize) // Общее кол-во страниц

    let pages = [];                                           // Массив страниц

    for (let i = 1; i <= pagesCount; i++) {                   // Массив страниц
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)         // Порции отображаемых страниц
    let [portionNumber, setPortionNumber] = React.useState(1)// Конкретная порция страниц  HOOK
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1 // Левый край порции страниц
    let rightPortionNumber = portionNumber * portionSize              // Правый край порции страниц

    return (
        <div className={s.paginator}>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>
            }
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionNumber)
                .map((p) => {
                    return <span className={cn({
                        [s.selectedPage]: currentPage === p
                    }, s.pageNumber)} key={p} onClick={(e) => {
                        onPageChanged(p)
                    }
                    }>
                        {p}
                    </span>
                })}
            {portionCount > portionNumber && <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>}
        </div>
    )
}

export default Paginator