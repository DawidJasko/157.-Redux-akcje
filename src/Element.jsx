import React, { useState } from 'react';

const Element = ({author, comment, id, rate}) => {

  const [isVisibleForm, setIsVisibleForm] = useState(false);

  const toogleElements = () => setIsVisibleForm(prev => !prev)

  const formOrButtonElement = isVisibleForm ? (
    <Form
      author={author}
      callback={toogleElements}
      comment={comment}
      id={id}
      rate={rate}
    />
  ) : (
    <button onClick={toggleElements}>
      Edytuj książke
    </button>
  )
  return (
    <li>
      <p>Author oceny: {author}</p>
      <p>Ocena: {rate}</p>
      <p>Komentarz: {comment}</p>
      { formOrButtonElement }
    </li>
  );
};

export default Element;