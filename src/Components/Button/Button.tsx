import './Button.scss'; 

type ButtonProps = {
    type: 'color' | 'circle' | 'icon' | 'iconText' | 'submited';
    value?:string; 
    icon?: 'increase' | 'decrease' | 'close' | 'remove' | 'back' | 'next' | 'chevron-up' | 'home' | 'is-fav' | 'get-fav'
    | 'chevron-left' | 'chevron-right' | 'chevron-down';
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
        disabled={disabled}
        onClick={e => {
            if (onClick) {
                e.preventDefault();
                onClick();
            }
        }} 
        className={`button button--${type} ${icon ? `button--icon-${icon}` : ''} ${className ? className : ''}`} >
            {['color', 'iconText', 'submited'].includes(type) && value}    
        </button>);
}