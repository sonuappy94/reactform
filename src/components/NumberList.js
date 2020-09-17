import React from 'react'
// const numbers = props.numbers;()

function NumberList(props) {
    const numbers = props.numbers
    const listItems = numbers.map((number)=>
    <li key={number.toString()}>{number}</li>
    );
    return(
        <div>
            {listItems}
        </div>
    )
}

export default NumberList;