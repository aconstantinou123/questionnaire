import React from 'react';

import ScaleQuestion from '../../components/ScaleQuestion/ScaleQuestion'
import Result from '../../components/Result/Result'
import Info from '../../components/Info/Info'
import './PageContainer.css';

const PageContainer = ({ 
  currentPage,
  getNextPage,
  getPreviousPage,
  currentPageIndex,
  pages,
  answers,
  selectAnswerYou,
  selectAnswerPartner,
  resetState,
}) => {
  const getCurrentAnswer = () => {
    return answers
    .find(answer => answer.identifer === currentPage.collect)
  }
  return (
    <div className='pageContainer'>
    {
      currentPage.type === 'info' &&
      <Info
      page={currentPage}
      />
    }
    {
      currentPage.type === 'rating_scale' &&
      <ScaleQuestion
        question={currentPage}
        currentAnswer={getCurrentAnswer()}
        selectAnswerYou={selectAnswerYou}
        selectAnswerPartner={selectAnswerPartner}
      />
    }
    {
      currentPage.type === 'attachment_result' &&
      <Result
        page={currentPage}
        answers={answers}
      />
    }
      <div className='buttonContainer'>
        {
          currentPageIndex !== 0 &&
          <button className="next" onClick={getPreviousPage}>Back</button>
        }
        {
          currentPageIndex + 1 !== pages.length && 
          <button className="next" onClick={getNextPage}>Next</button>
        }
        {
          currentPageIndex + 1 === pages.length && 
          <button className="next" onClick={resetState}>Reset</button>
        }
      </div>
    </div>
  )
}

export default PageContainer
