import React from 'react'

interface IProps {
    correctCounter: number
    setShowAlert(param: boolean): void
}

const Alert = ({ correctCounter, setShowAlert }: IProps) => {

    const onClose = () => {
        setShowAlert(false)
    }

    return (
        <div className='alert'>
            <button onClick={onClose} className='alert__close-btn'>&#10006;</button>
            <h1>{`Время вышло`}</h1>
            <span>{`Ваш результат - ${correctCounter} слов(а)/минуту`}</span>
        </div>
    )
}

export default Alert
