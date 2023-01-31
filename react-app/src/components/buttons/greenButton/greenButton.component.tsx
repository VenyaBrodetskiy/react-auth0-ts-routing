import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { countState, dollarCountState, fixedCountState } from '../../../business logic/state/count/count.state';
import { smartCountState } from '../../../business logic/state/smartCount.ts/smartCount.state';

export default function GreenButtonComponent() {
    const [count, setCount] = useRecoilState(countState);
    const dollarState = useRecoilValue(dollarCountState);
    const [smartCount, setSmartCount] = useRecoilState(smartCountState);
    return (
        <div>
            <button
                type="button"
                className="btn btn-success"
                onClick={() => {
                    setCount(count + 5);
                    setSmartCount(smartCount + 1);
                }}
            >Green Button Inc
            </button>
            <span>Green Button (+5): {count}</span>
            <GreenHelper></GreenHelper>
            <span> Dollar Selector: {dollarState}</span>
            <span> Smart Count Selector: {smartCount}</span>
        </div>
    )
}

const GreenHelper = () => {


    return <GreenHelperInside />
}

const GreenHelperInside = () => {
    const [count] = useRecoilState(countState);
    return (<span> Inner inner component {count}</span>);
}
