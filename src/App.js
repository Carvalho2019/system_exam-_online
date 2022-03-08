import React from "react";
import Radio from "./Form/Radio";
import './App.css'
import {questions} from './questionsApi';

const App = () => {
  const [asks, setAsks] = React.useState(questions.reduce((acc, field) => {
    return {
      ...acc,
      [field.id]: ''
    }
  }, {}));

  const [slide, setSlide] = React.useState(0);
  const [result, setResult] = React.useState(null);

  function handleChange({ target }) {
    setAsks({ ...asks, [target.id]: target.value });
  }
  function sendResult() {
    const right = questions.filter(({ id, ask }) => asks[id] === ask);
    setResult(`Voce acertou: ${right.length} de ${questions.length}`);
  }
  function handleClick() {
    if (slide < questions.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      sendResult();
    }
  }

  return (
    <form className='form' onSubmit={(event) => event.preventDefault()}>
      {questions.map((question, index) => {
        return (
          <Radio
            active={slide === index}
            key={question.id}
            value={asks[question.id]}
            {...question}
            onChange={handleChange}
          />
        );
      })}
      {result ? (
        <p className="result">{result}</p>
      ) : (
        <button onClick={handleClick}>Proximo</button>
      )}
    </form>
  );
};

export default App;
