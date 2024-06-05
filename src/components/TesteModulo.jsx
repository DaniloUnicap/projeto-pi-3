import React, { useState } from 'react';

const questions = [
    {
      question: "1. Qual é a função da tag <head> em um documento HTML?",
      options: ["Contém metadados sobre o documento", "Define o corpo do documento", "Cria um parágrafo", "Adiciona um link externo"],
      answer: "a",
    },
    {
      question: "2. Qual é o propósito da declaração <!DOCTYPE html>?",
      options: ["Define a linguagem do documento", "Define a versão do HTML", "Adiciona estilos ao documento", "Cria um script"],
      answer: "b",
    },
    {
      question: "3. O que faz a tag <meta name='viewport' content='width=device-width, initial-scale=1.0'>?",
      options: ["Define a largura e o nível de zoom da página para dispositivos móveis", "Adiciona um título à página", "Define a codificação de caracteres", "Cria uma lista não ordenada"],
      answer: "a",
    },
    {
      question: "4. Qual atributo é usado para aplicar um estilo único a um elemento HTML?",
      options: ["class", "style", "id", "src"],
      answer: "c",
    },
    {
      question: "5. Quantos níveis de cabeçalhos existem em HTML?",
      options: ["3", "5", "6", "8"],
      answer: "c",
    },
    {
      question: "6. Qual tag é usada para definir um parágrafo em HTML?",
      options: ["<div>", "<span>", "<p>", "<section>"],
      answer: "c",
    },
    {
      question: "7. Qual tag HTML é usada para destacar texto com importância semântica?",
      options: ["<b>", "<i>", "<strong>", "<u>"],
      answer: "c",
    },
    {
      question: "8. Qual tag HTML define um bloco de citação?",
      options: ["<cite>", "<quote>", "<blockquote>", "<q>"],
      answer: "c",
    },
    {
      question: "9. Qual tag HTML é usada para criar uma lista ordenada?",
      options: ["<ul>", "<ol>", "<li>", "<dl>"],
      answer: "b",
    },
    {
      question: "10. Qual tag HTML5 é usada para definir conteúdo autônomo e relevante em um documento?",
      options: ["<section>", "<article>", "<header>", "<footer>"],
      answer: "b",
    },
  ];



export const  TesteModulo = () => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleOptionChange = (questionIndex, optionIndex) => {
    setAnswers({
      ...answers,
      [questionIndex]: optionIndex,
    });
  };

  const submitAnswers = () => {
    let newScore = 0;
    questions.forEach((q, index) => {
      if (answers[index] === q.answer) {
        newScore++;
      }
    });
    setScore(newScore);
  };
  

  return (
    <div className="px-4 md:px-16">
      {questions.map((q, index) => (
        <div className="mb-6" key={index}>
          <h2 className="text-lg font-semibold mb-2">{q.question}</h2>
          <div className="flex flex-col space-y-2">
            {q.options.map((option, i) => (
              <label key={i} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name={`q${index}`}
                  value={String.fromCharCode(97 + i)} // 'a', 'b', 'c', 'd'
                  checked={answers[index] === String.fromCharCode(97 + i)}
                  onChange={() => handleOptionChange(index, String.fromCharCode(97 + i))}
                  className="form-radio"
                />{' '}
                <span>{String.fromCharCode(97 + i)}) {option}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={submitAnswers}
        className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-400 transition-all ease-linear"
      >
        Enviar Respostas
      </button>
      {score !== null && (
        <h2 className="mt-4 text-xl font-bold">
          Você acertou {score} de {questions.length} perguntas.
        </h2>
      )}
      
    </div>
  );
}
