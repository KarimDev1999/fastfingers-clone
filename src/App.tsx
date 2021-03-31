import React, { useState } from 'react';
import './scss/app.scss';
//components
import WordsRow from './components/WordsRow';
import TypeBar from './components/TypeBar';
import Alert from './components/Alert';
//components

import { shuffleWords } from './helpers/shuffleWords'

const WORDS: string[] = ["во", "город", "конечный", "много", "тот", "спросить", "если", "там", "большой", "просто", "по", "сейчас", "уж", "случай", "страна", "сразу", "что", "так", "белый", "в", "после", "уже", "нет", "жена", "тот", "такой", "хотя", "как", "город", "пока", "вода", "кто", "с", "сразу", "про", "правда", "старый", "она", "машина", "твой", "но", "понимать", "стать", "ли", "белый", "несколько", "дверь", "мы", "нога", "значить", "главный", "самый", "жизнь", "а", "ты", "дать", "всегда", "минута", "потому", "перед", "через", "со", "а", "значить", "ответить", "знать", "вопрос", "чем", "только", "голос", "если", "ничто", "только", "они", "делать", "между", "голос", "более", "без", "снова", "без", "к", "к", "идти", "от", "увидеть", "такой", "знать", "страна", "каждый", "опять", "должный", "пока", "тут", "куда", "она", "нет", "который", "любить", "какой", "тоже", "начало", "об", "чтобы", "наш", "чем", "хорошо", "более", "город", "время", "увидеть", "между", "работа", "он", "день", "понимать", "да", "про", "любить", "есть", "ничто", "ну", "после", "старый", "подумать", "не", "над", "деньги", "работа", "со", "здесь", "можно", "где", "себя", "выйти", "оказаться", "просто", "человек", "лишь", "с", "когда", "ребенок", "каждый", "стоять", "на", "день", "мир", "сторона", "хорошо", "при", "сила", "хотеть", "деньги", "каждый", "ночь", "пойти", "без", "ли", "тут", "куда", "так", "свое", "она", "ничто", "же", "иметь", "дело", "друг", "значить", "еще", "если", "с", "и", "подумать", "потому", "над", "со", "опять", "глаз", "идти", "но", "бы", "жить", "много", "отец", "остаться", "кто", "отец", "отец", "хороший", "даже", "самый", "конец", "смотреть", "вода", "вдруг", "же", "очень", "женщина", "идти"];


function App() {
  const [words, setWords] = useState<string[]>(() => shuffleWords(WORDS));
  const [currentElem, setCurrentElem] = useState<HTMLElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [correctCounter, setCorrectCounter] = useState<any | null>(0);
  const [currentColor, setCurrentColor] = useState<string>('current');
  const [top, setTop] = useState<number>(0)
  const [showAlert, setShowAlert] = useState<boolean>(false);



  return (
    <div className="App">
      {
        showAlert &&
        <Alert
          setShowAlert={setShowAlert}
          correctCounter={correctCounter}
        />
      }


      <WordsRow
        setCurrentElem={setCurrentElem}
        setTop={setTop}
        top={top}
        currentColor={currentColor}
        words={words}
        currentIndex={currentIndex}
      />
      <TypeBar
        setCorrectCounter={setCorrectCounter}
        setCurrentColor={setCurrentColor}
        setCurrentIndex={setCurrentIndex}
        setShowAlert={setShowAlert}
        setTop={setTop}
        setWords={setWords}
        showAlert={showAlert}
        words={words}
        currentElem={currentElem}
        currentIndex={currentIndex}
      />
    </div>

  );
}

export default App;
