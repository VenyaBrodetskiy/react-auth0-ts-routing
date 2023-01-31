import React from 'react';
import { countState } from '../../../business logic/state/count/count.state';
import { useRecoilState } from "recoil";

export default function BlueButtonComponent() {
    const [count, setCount] = useRecoilState(countState);
    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={() => setCount(count + 1)}>Blue Button Inc</button>
            <span>Blue Button (+1): {count}</span>
        </div>
    )
}

// const Blue2 = () => {
//     const count = useRecoilState(countState);
//     return <div></div>
// }