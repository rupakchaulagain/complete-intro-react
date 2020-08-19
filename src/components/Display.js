import React, {useState} from 'react';
import Button from "./Button";

const Display = ({ content }) => (
    <div>
        <h1>{content}</h1>
    </div>

);

const CountManager = () => {
    const [count, setCount] = useState(0);

    const incrementCounter = (increment) => {
        if(increment===0){
            setCount(0);
        }else{
            setCount(count + increment);
        }

    }

    return (
        <>
            <Button
                clickAction={incrementCounter}
                clickValue={1}
            />
            <Button
                clickAction={incrementCounter}
                clickValue={5}
            />
            <Button
                clickAction={incrementCounter}
                clickValue={10}
            />
            <Button
                clickAction={incrementCounter}
                clickValue={0}
            />
            <Display content={count}/>
        </>
    );
};

export default CountManager