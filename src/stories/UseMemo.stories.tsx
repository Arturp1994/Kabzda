import React, {useCallback, useMemo, useState} from "react";

export default {
    title: "useMemo"
}

export const Exp = () => {

    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResult = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10) {
                fake++;
                const fakeV = Math.random()
            }
            tempResult = tempResult * i;
        }
        return tempResult
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return (
        <div>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </div>)
}


export const LikeUseCallback = () => {

    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'Css', 'HTML'])

    const memoizedAddBook2 = useCallback(()=>{
        const newUsers = [...books, 'Angular' + new Date().getTime()];
        setBooks(newUsers)
    }, [books])

    const newArray = useMemo(() => {
        const newArray = books.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [books])

    const addBook = () => {
        const newUsers = [...books, 'Angular' + new Date().getTime()];
        setBooks(newUsers)
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>

        {counter}
        <Book addBook={memoizedAddBook2}/>

    </>
}
const BooksSecret = (props: { addBook: () => void }) => {
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}

const Book = React.memo(BooksSecret)