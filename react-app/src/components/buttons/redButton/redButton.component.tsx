import React from 'react';
import { useRecoilState } from 'recoil';
import { countState } from '../../../business logic/state/count/count.state';

export default function RedButtonComponent() {
    const [count, setCount] = useRecoilState(countState);

    return (
        <div>
            <button type="button" className="btn btn-danger" onClick={() => setCount(count - 1)}>Red Button Inc</button>
            <span>Red Button (-1): {count}</span>
        </div>
    )
}
