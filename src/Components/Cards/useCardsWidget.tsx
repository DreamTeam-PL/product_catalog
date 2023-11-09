import { useEffect, useRef, useState } from "react";
import { Product } from "../../types/types";
import { ListResult } from "../../Api/Products";

export const useCardsWidget = (requestServer: () => Promise<ListResult>)  => {
    const [cards, setCards] = useState<Product[]>([]);
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [isPreviousDisabled, setIsPreviousDisabled] = useState<boolean>(true);
    const [isNextDisabled, setIsNextDisabled] = useState<boolean>(false);
  
    const grid = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
        requestServer().then(result => setCards(result.data));
    }, [requestServer]);

    useEffect(() => {
      const handleResize = () => { 
        if(grid.current !== null) {  
            const gap = parseInt(window.getComputedStyle(grid.current).gap);
            const maxPush =  grid.current.scrollWidth - grid.current.clientWidth + gap;
  
            if ((maxPush * -1) - scrollPosition > 0) {
                setScrollPosition((maxPush * -1));
            }

            if (scrollPosition  === 0 && !isPreviousDisabled) {
                setIsPreviousDisabled(true);
            }
    
            if (scrollPosition  > 0 && isPreviousDisabled) {
                setIsPreviousDisabled(false);
            }
    
            if (scrollPosition  < maxPush && isNextDisabled) {
                setIsNextDisabled(false);
            }
    
            if (scrollPosition  === maxPush && !isNextDisabled) {
                setIsNextDisabled(true);
            }
        }
    };
      
        if(grid.current !== null) { 
            grid.current.style.transform = `translateX(${scrollPosition}px)`;
        }
  
        window.addEventListener('resize', handleResize);
  
        return () => window.removeEventListener('resize', handleResize);
    });
    
    return {
        onScroll: (dir: 'right' | 'left') => { 
            setScrollPosition(scroll => {
              if(grid.current !== null) { 
                const gridGap = parseInt(window.getComputedStyle(grid.current).gap);
                const pushPixels:number = ((grid.current?.firstElementChild as HTMLElement)?.offsetWidth || 0) + gridGap;
                const maxPush =  grid.current.scrollWidth - grid.current.clientWidth + gridGap;    
      
                if(dir === 'right') { 
                  setIsNextDisabled(((scroll-pushPixels) * -1 >= maxPush) ? true : false);
                  setIsPreviousDisabled(false)
                  return ((scroll-pushPixels) * -1 > maxPush) ? maxPush * -1 : scroll - pushPixels;
                }

                setIsNextDisabled(false)
                setIsPreviousDisabled(scroll + pushPixels > 0 ? true : false);
                return scroll + pushPixels > -(gridGap * 2) ? 0 : scroll + pushPixels;
              }
              return scroll;
            }); 
            
        },
        grid,
        cards,
        isNextDisabled,
        isPreviousDisabled,
    }
}