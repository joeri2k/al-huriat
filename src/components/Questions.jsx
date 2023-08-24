import React from "react";

function Questions(props) {
  return (
    <div
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "40% 40%",
        columnGap: "20%",
      }}
    >
      {props.product.questions.map((question) => (
        <div
          style={{
            color: "#6F7482",
            marginBottom: "15px",
            marginRight: "5%",
            width: "100%",
          }}
        >
          {question.type === "text" || question.type === "number" ? (
            <>
              <label
                style={{
                  color: "#6F7482",
                }}
              >
                {question.question}
              </label>
              <input
                name={question.question}
                placeholder={question.placeholder}
                className="textField"
                id="name"
                type={question.type}
              />
            </>
          ) : question.type === "checkbox" ? (
            <>
              <input
                name={question.question}
                placeholder={question.question}
                id="name"
                style={{ marginRight: "5px" }}
                type={question.type}
              />
              <label
                style={{
                  color: "#6F7482",
                }}
              >
                {question.question}
              </label>
            </>
          ) : question.type === "select" ? (
            <>
              <label
                style={{
                  color: "#6F7482",
                }}
              >
                {question.question}
              </label>
              <select name="name" placeholder="Name" className="textField">
                {question.options.map((option) => (
                  <option value={option.value}> {option.label}</option>
                ))}
              </select>
            </>
          ) : (
            <>
              <label
                style={{
                  color: "#6F7482",
                  marginBottom: "15px",
                }}
              >
                Additional information
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Type additional information"
                rows={5}
                className="textField"
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Questions;
