import React from "react";

import "./AskQuestion.css";

const AskQuestion = () => {
  return (
    <div className="ask-question">
      <div className="ask-ques-container">
        <h1>Ask  Public Question</h1>
        <form action="">
          <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
              <h4>Title</h4>
              <p>
                Be specific and imagine you're asking a question to another
                person
              </p>
              <input type="text" id='ask-ques-title' placeholder='eg: How to center a div'/>
            </label>
            <label htmlFor="ask-ques-body">
              <h4>Body</h4>
              <p>
                Include all the information someone would require to answer your question
              </p>
                <textarea name="" id="ask-ques-body" cols="30" rows="10"></textarea>
            </label>
            <label htmlFor="ask-ques-tags">
              <h4>Title</h4>
              <p>
               Add upto 5 tags to describe what  your question is about 
              </p>
              <input type="text" id='ask-ques-tags' placeholder='eg: Html Css Js'/>
            </label>
          </div>
          <input type='submit' value='Review your Question' className="review-btn"/>
        </form>
      </div>
    </div>
  );
};

export default AskQuestion;
