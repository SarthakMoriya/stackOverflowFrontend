import React from "react";
import { Link, useParams } from "react-router-dom";

import voteUp from "../../assets/sort-up.svg";
import voteDown from "../../assets/sort-down.svg";
import "./Question.css";
import Avatar from "../../components/Avatar/Avatar";
import DisplayAnswers from "./DisplayAnswers";

const QuetionDetails = () => {
  const { id } = useParams();

  const questionList = [
    {
      _id: 1,
      upVotes: 3,
      userId: 4,
      downVotes: 4,
      votes: 3,
      noOfAnswers: 2,
      questionTitle: "What is a Function ?",
      questionBody: "just tell me please...",
      questionTags: ["java", "c", "c++", "javascript"],
      userPosted: "Sarthak",
      askedOn: "jan 1",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "Aarsh",
          answeredOn: "Jan 2",
          userId: 2,
        },
      ],
    },

    {
      _id: 5,
      upVotes: 3,
      userId: 4,
      downVotes: 4,
      votes: 3,
      noOfAnswers: 2,
      questionTitle: "What is a Function ?",
      questionBody: "just tell me please...",
      questionTags: ["java", "c", "c++", "javascript"],
      userPosted: "Sarthak",
      askedOn: "jan 1",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "Aarsh",
          answeredOn: "Jan 2",
          userId: 2,
        },
      ],
    },

    {
      _id: 2,
      userId: 4,
      upVotes: 0,
      downVotes: 4,
      votes: 3,
      noOfAnswers: 2,
      questionTitle: "What is a Function ?",
      questionBody: "just tell me please...",
      questionTags: ["java", "c", "c++", "javascript"],
      userPosted: "Sarthak",
      askedOn: "jan 1",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "Aarsh",
          answeredOn: "Jan 2",
          userId: 2,
        },
      ],
    },

    {
      _id: 3,
      userId: 4,
      upVotes: 3,
      downVotes: 4,
      votes: 3,
      noOfAnswers: 2,
      questionTitle: "What is a Function ?",
      questionBody: "just tell me please...",
      questionTags: ["java", "c", "c++", "javascript"],
      userPosted: "Sarthak",
      askedOn: "jan 1",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "Aarsh",
          answeredOn: "Jan 2",
          userId: 2,
        },
      ],
    },

    {
      _id: 4,
      userId: 4,
      upVotes: 3,
      downVotes: 4,
      votes: 3,
      noOfAnswers: 2,
      questionTitle: "What is a Function ?",
      questionBody: "just tell me please...",
      questionTags: ["java", "c", "c++", "javascript"],
      userPosted: "Sarthak",
      askedOn: "jan 1",
      answer: [
        {
          answerBody: "Answer",
          userAnswered: "Aarsh",
          answeredOn: "Jan 2",
          userId: 2,
        },
      ],
    },
  ];
  return (
    <div className="question-details-page">
      {questionList === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {questionList
            .filter((question) => JSON.stringify(question._id) === id)
            .map((question) => (
              <div key={question._id}>
                <section className="question-details-container">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img
                        src={voteUp}
                        alt="vote+"
                        width="18"
                        className="votes-icon"
                      />
                      <p>{question.upVotes - question.downVotes}</p>
                      <img
                        src={voteDown}
                        alt="vote-"
                        width="18"
                        className="votes-icon"
                      />
                    </div>
                    <div className="" style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="question-actions-user">
                        <div className="">
                          <button>Share</button>
                          <button>Delete</button>
                        </div>
                        <div className="">
                          <p>AskedOn {question.askedOn}</p>
                          <Link
                            to={`/user/${question.userId}`}
                            className="user-link"
                          >
                            <Avatar backgroundColor="orange" px="8px" py="5px">
                              {question.userPosted[0]}
                            </Avatar>
                            <div className="">{question.userPosted}</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {question.noOfAnswers !== 0 && (
                  <section>
                    <h3>{question.noOfAnswers} answers</h3>
                    <DisplayAnswers key={question._id} question={question} />
                  </section>
                )}
                <div className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form action="">
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <input
                      type="submit"
                      className="post-ans-btn"
                      value="Post Your Answer"
                    />
                  </form>
                  <p>
                    Browse other Question Tags
                    {question.questionTags.map((tag) => (
                      <Link to="/tags" key={tag} className="ans-tags">
                        {tag}
                      </Link>
                    ))}{" "}
                    or
                    <Link
                      to="/askquestion"
                      style={{ textDecoration: "none", color: "#009dff" }}
                    >
                      Ask Question
                    </Link>
                  </p>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default QuetionDetails;
