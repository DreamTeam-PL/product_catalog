import { Categories } from "../Components/Categories/Categories";
import { Slider } from "../Components/Slider/Slider";
import { Cards } from "../Components/Cards/Cards";

import './Home.scss';

export const Home:React.FC = () => (<section className="content landing">
    <h1 className="landing__title">Welcome to Nice Gadgets store!</h1>
    <main className="main">
        <Slider />
        <Cards type="newest" />
        <Categories />
        <Cards type="discount"/>
    </main>
</section>) 