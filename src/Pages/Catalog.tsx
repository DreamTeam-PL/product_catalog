import { Button } from "../Components/Button/Button";
import { Card } from "../Components/Card/Card";

import './catalog.scss';
export const Catalog:React.FC = () => (<section className="hmm products">
    <div className="products__position">
        <div className="products__position-icon">
            <img
            className='img'
            src={require('./home.png')}
            alt="Home" />
        </div>
        <div className="products__position-icon">
            <img
            className='img'
            src={require('./arrow right.png')}
            alt="Right arrow direction" />
        </div>
        <p className="products__position-name">Phones</p>
    </div>
    <h1 className="products__title">Mobile phones</h1>
    <p className="products__quantity"><span>95</span> models</p>
    <div className="products__filter">
        <div className="products__filter-filter">
            <div className="products__filter-filter-name"><p>Sort by</p></div>
            <div className="products__filter-filter-button">
                <Button type='color' value='try'/>
            </div>   
        </div>
        <div className="products__filter-filter">
            <div className="products__filter-filter-name"><p>Items on Page</p></div>
            <div className="products__filter-filter-button">
                <Button type='color' value='try'/>
            </div>   
        </div>
        
    </div>
    <div className="products__catalog">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
    <div className="products__buttons">
        <div className="products__buttons-side">l</div>
        <div className="products__buttons-center">
            <div className="products__buttons-center-page">1</div>
            <div className="products__buttons-center-page">2</div>
            <div className="products__buttons-center-page">3</div>
            <div className="products__buttons-center-page">4</div>
        </div>
        <div className="products__buttons-side">r</div>
    </div>
    
</section>)