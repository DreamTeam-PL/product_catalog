import './Button.scss'; 

type ButtonProps = {
    type: 'color' | 'circle' | 'icon' | 'iconText';
    value?:string; 
    icon?: 'increase' | 'decrease' | 'close' | 'remove' | 'back';
    onClick?: ()=>void;
    className?: string;
    disabled?: boolean;
}


export const Button:React.FC<ButtonProps> = ({
    type,
    value='', 
    icon='',
    onClick,
    className,
    disabled = false,
}) => {
    return (<button 
        onClick={e => {
            if (onClick) {
                e.preventDefault();
                onClick();
            }
        }}
        disabled={disabled}
        className={`${className ? className + ' ' : ''}button button--${type} ${icon ? `button--icon-${icon}` : ''}`} >
            {['color', 'iconText'].includes(type) && value}    
        </button>);
}