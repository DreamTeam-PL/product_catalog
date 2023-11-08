import { useEffect, useRef, useState } from 'react';
import './DropDownSelect.scss';

type Props = {
    options: string[];
    onChange: (option: number) => void;
    label?: string;
    className?: string;
    selected: number;
    focus: boolean;
    setFocus: (focus: boolean) => void;
};

export const DropDownSelect: React.FC<Props> = ({ options, onChange, label, className, selected, focus, setFocus }) => {
    console.log('Init selected: ', selected)
    const [selectedOption, setSelectedOption] = useState<number>(selected || 0);

    return (<div className={`dropDown ${className ? className : ''}`}>
        {label && <p className='dropDown__label'> {label} </p>}
        <p
            className={`dropDown__selected ${focus ? 'dropDown__selected--focused' : ''}`}
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