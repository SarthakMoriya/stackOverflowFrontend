import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";

const DisplayAnswers = ({ question }) => {
  return (
    <div>
      {question.answer.map((ans) => (
        <div className="display-ans" key={ans._id}>
          <p>{ans.answerBody}</p>
          <div className="question-actions-user">
            <div className="">
                <button>Share</button>
                <button>Delete</button>
            </div>
            <div className="">
                <p>Answer {ans.answeredOn}</p>
                <Link
                            to={`/user/${question.userId}`}
                            className="user-link"
                          >
                            <Avatar backgroundColor="orange" px="8px" py="5px">
                              {ans.userAnswered[0]}
                            </Avatar>
                            <div className="">{ans.userPosted}</div>
                          </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayAnswers;
