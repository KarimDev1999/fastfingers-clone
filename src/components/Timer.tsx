import React, { useState, useEffect, useRef } from 'react'

interface IProps {
    startTimer: boolean
    setValue(param: string): void
    setShowAlert(param: boolean): void
}

const formatTime = (timer: number) => {
    const minutes = Math.floor(timer / 60)
    const seconds = `0${timer % 60}`.slice(-2)
    return `${minutes}:${seconds}`
}

const Timer = ({ startTimer, setValue, setShowAlert }: IProps) => {
    const [timer, setTimer] = useState<number>(60);
    let interval: React.MutableRefObject<any> = useRef(null)

    useEffect(() => {
        if (startTimer) {
            interval.current = setInterval(() => {
                setTimer((prev: number) => prev - 1);
            }, 1000)
        }
        else {
            clearInterval(interval.current)
            setTimer(60)
            setValue('')
        }
    }, [startTimer])

    if (timer === 0) {
        clearInterval(interval.current);
        setTimeout(() => {
            setTimer(60);
            setShowAlert(true);
        }, 1000)
    }


    return (
        <div className='type-bar__timer'>
            {formatTime(timer)}
        </div>

    )
}

export default Timer
