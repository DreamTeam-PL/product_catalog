import { Slider } from "../Components/Slider/Slider";
import './Landing.scss';

export const Landing:React.FC = () => (<section className="content landing">
    <h1 className="landing__title">Welcome to Nice Gadgets store!</h1>
    <main className="main">
        <Slider />
        <div className='test'>Kolejne</div>
        <div className='test'>Kolejne</div>
        <div className='test'>Kolejne</div>
    </main>
</section>)