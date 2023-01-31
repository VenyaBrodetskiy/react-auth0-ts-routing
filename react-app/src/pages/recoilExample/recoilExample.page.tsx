import React from 'react';
import { useRecoilState } from 'recoil';
import { countState } from '../../business logic/state/count/count.state';
import BlueButtonComponent from '../../components/buttons/blueButton/blueButton.component'
import GreenButtonComponent from '../../components/buttons/greenButton/greenButton.component'
import RedButtonComponent from '../../components/buttons/redButton/redButton.component'

export default function RecoilExPage() {
    const [count] = useRecoilState(countState);

    return (
        <div>
            RecoilExPage
            <RedButtonComponent></RedButtonComponent>
            <GreenButtonComponent></GreenButtonComponent>
            <BlueButtonComponent></BlueButtonComponent>
            <span>אבא כומפוננט {count}</span>
        </div>
    )
}
