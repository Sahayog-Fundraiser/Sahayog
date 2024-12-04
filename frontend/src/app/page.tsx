import HeaderAndFooterLayout from '@app/shared/HOC/HeaderAndFooterLayout';

import Slider from '../components/slider';
import Title from '../components/title';

export default function Home() {
    return (
        <>
            <HeaderAndFooterLayout>
                <Slider />
                <Title />
            </HeaderAndFooterLayout>
        </>
    );
}
