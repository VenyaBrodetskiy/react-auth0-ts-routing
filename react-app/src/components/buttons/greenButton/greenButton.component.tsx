import React from 'react';
import { useRecoilState } from 'recoil';
import { countState } from '../../../business logic/state/count/count.state';

export default function GreenButtonComponent() {
    const [count, setCount] = useRecoilState(countState);

    return (
        <div>
            <button type="button" className="btn btn-success" onClick={() => setCount(count + 5)}>Green Button Inc</button>
            <span>Green Button (+5): {count}</span>
            <GreenHelper></GreenHelper>
        </div>
    )
}

const GreenHelper = () => {


    return <GreenHelperInside />
}

const GreenHelperInside = () => {
    const [count] = useRecoilState(countState);
    return <span> Inner inner component {count}</span>
}
