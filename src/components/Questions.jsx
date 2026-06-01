import React from "react";

function Questions(props) {
  return (
    <div className="questionsContainer">
      {props.product.questions.map((question, idx) => {
        const fieldId = `q-${idx}-${question.question.replace(/\s+/g, "-").toLowerCase()}`;

        if (question.type === "text" || question.type === "number") {
          return (
            <div className="questionField" key={fieldId}>
              <label htmlFor={fieldId}>{question.question}</label>
              <input
                id={fieldId}
                name={question.question}
                placeholder={question.placeholder}
                className="textField"
                onChange={props.handleChange}
                type={question.type}
              />
            </div>
          );
        }

        if (question.type === "checkbox") {
          return (
            <div className="questionField questionCheckbox" key={fieldId}>
              <input
                id={fieldId}
                name={question.question}
                onChange={props.handleChange}
                type="checkbox"
              />
              <label htmlFor={fieldId}>{question.question}</label>
            </div>
          );
        }

        if (question.type === "select") {
          return (
            <div className="questionField" key={fieldId}>
              <label htmlFor={fieldId}>{question.question}</label>
              <select
                id={fieldId}
                name={question.question}
                onChange={props.handleChange}
                className="textField"
              >
                {question.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          );
        }

        return (
          <div className="questionField questionFull" key={fieldId}>
            <label htmlFor="info">Additional information</label>
            <textarea
              id="info"
              name="additional info"
              onChange={props.handleChange}
              placeholder="Type additional information"
              rows={5}
              className="textField"
            />
          </div>
        );
      })}
    </div>
  );
}

export default Questions;
