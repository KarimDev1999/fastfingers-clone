import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames';

interface IProps {
    currentIndex: number;
    words: string[];
    currentColor: string;
    top: number;
    setTop(param: number | ((param: number) => {})): void
    setCurrentElem(param: HTMLElement | null): void;

}

const WordsRow = ({ currentColor, currentIndex, words, top, setCurrentElem, setTop }: IProps) => {

    const elementsRefs = useRef<HTMLElement[]>([]);


    useEffect(() => {
        const elem: HTMLElement | null = elementsRefs.current[currentIndex];
        setCurrentElem(elem);
        const prevElem: HTMLElement | any = elem?.previousElementSibling;
        if (elem && prevElem) {
            if (elem.offsetTop > prevElem.offsetTop) {
                setTop(prev => prev - 48);
            }
        }
    }, [currentIndex])

    return (
        <div className='words'>
            <div style={{ top: top + 'px' }} className='words__row'>
                {
                    words.map((word: string, i: number) => <span
                        ref={(el) => el && elementsRefs.current.push(el)}
                        className={classNames(
                            i === currentIndex ? `words__row-${currentColor}` : undefined,
                            elementsRefs.current[i] && elementsRefs.current[i].getAttribute('correct'),
                            elementsRefs.current[i] && elementsRefs.current[i].getAttribute('incorrect')
                        )}
                        key={i + word}>
                        {word}
                    </span>)
                }
            </div>
        </div >
    )
}

export default WordsRow
