import { useEffect, useState } from 'react';
import './DropDownSelect.scss';

type Props = {
    options: string[];
    onChange: ( option: number ) => void;
};

export const DropDownSelect:React.FC<Props> = ({ options, onChange }) => {
    const [selectedOption, setSelectedOption] = useState<number>(0);
    const [focus, setFocus] = useState<boolean>(false);

    return (<div className='dropDown'>
        <p
            className={`dropDown__selected ${focus ? 'dropDown__selected--focused': ''}`}
            onClick={() => setFocus(!focus)}
        >
            {options[selectedOption]}
        </p>

        {focus && (<ul className='dropDown__options'>
            {options.map((option, key) => <li
                className='dropDown__option'
                key={option} 
                onClick={() => {
                    setSelectedOption(key);
                    setFocus(false);
                    onChange(key);
                }}
            >
                {option}
            </li>)} 
        </ul>)} 
    </div>);
}