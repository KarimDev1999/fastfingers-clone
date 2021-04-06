import React, { useState } from 'react';
//components
import Timer from './Timer';
//components

import { shuffleWords } from '../helpers/shuffleWords'

interface IProps {
    currentElem: HTMLElement | null;
    currentIndex: number;
    words: string[];
    showAlert: boolean;
    setCurrentIndex(param: number): void;
    setCurrentColor(param: string): void;
    setCorrectCounter(param: number | ((param: number) => {})): void;
    setShowAlert(param: boolean): void;
    setTop(param: number): void;
    setWords(param: string[]): void;
}

const validateString = (word: string, input: string, currentElem: HTMLElement | null, setCurrentColor: (param: string) => void): void => {
    setCurrentColor('current');
    for (let i = 0; i < input.length; i++) {
        if (currentElem) {
            if ((word[i] !== input[i])) {
                setCurrentColor('incorrectBackground');
            }
        }
    }
}

const TypeBar = ({ words, currentElem, currentIndex, showAlert, setCurrentIndex, setCurrentColor, setCorrectCounter, setTop, setShowAlert, setWords }: IProps) => {
    const [value, setValue] = useState<string>('');
    const [startTimer, setStartTimer] = useState<boolean>(false);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;;
        setValue(value);
        setStartTimer(true);
        validateString(words[currentIndex], value, currentElem, setCurrentColor);
        if (value[value.length - 1] === ' ') {
            if (currentElem) {
                if (value.slice(0, -1) === words[currentIndex]) {
                    currentElem.setAttribute('correct', 'correct');
                    setCorrectCounter((prev: number) => prev + 1);
                }
                else {
                    currentElem.setAttribute('incorrect', 'incorrect');
                }
            }
            setCurrentIndex(currentIndex + 1);
            setCurrentColor('current');
            setValue('');
        }
    }

    const onReload = (): void => {
        setStartTimer(false);
        setCurrentIndex(0);
        setCorrectCounter(0);
        setCurrentColor('current');
        setTop(0);
        setShowAlert(false);
        setWords(shuffleWords(words))
        currentElem?.parentNode?.childNodes.forEach((el: any) => {
            el.removeAttribute('correct');
            el.removeAttribute('incorrect');
        });
    }

    return (
        <div className='type-bar'>
            <input readOnly={showAlert ? true : false} onChange={(e) => onChange(e)} value={value} className='type-bar__input' type="text" />
            <Timer
                setShowAlert={setShowAlert}
                setValue={setValue}
                startTimer={startTimer}
            />
            <button onClick={onReload} className='type-bar__button'><span></span></button>
        </div>
    )
}

export default TypeBar
