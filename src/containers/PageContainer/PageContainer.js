import React from 'react';

import ScaleQuestion from '../../components/ScaleQuestion/ScaleQuestion'
import Result from '../../components/Result/Result'
import './PageContainer.css';

const PageContainer = ({ 
  currentPage,
  getNextPage,
  getPreviousPage,
  currentPageIndex,
  pages,
  answers,
  currentAnswerYou,
  currentAnswerPartner,
  selectAnswerYou,
  selectAnswerPartner,
}) => {
  const getCurrentAnswer = () => {
    return answers
    .find(answer => answer.identifer === currentPage.collect)
  }
  const getQuestions = () => {
    return pages
      .filter(question => question.type === 'rating_scale')
  }
  return (
    <div>
    {
      currentPage.type === 'info' &&
      <div className="info">Info</div>
    }
    {
      currentPage.type === 'rating_scale' &&
      <ScaleQuestion
        question={currentPage}
        currentAnswer={getCurrentAnswer()}
        currentAnswerYou={currentAnswerYou}
        currentAnswerPartner={currentAnswerPartner}
        selectAnswerYou={selectAnswerYou}
        selectAnswerPartner={selectAnswerPartner}
      />
    }
    {
      currentPage.type === 'attachment_result' &&
      <Result
        answers={answers}
        questions={getQuestions()}
      />
    }
    {
      currentPageIndex !== 0 &&
      <button className="next" onClick={getPreviousPage}>Back</button>
    }
    {
      currentPageIndex + 1 !== pages.length && 

        <button className="next" onClick={getNextPage}>Next</button>
    }
    </div>
  )
}

export default PageContainer
