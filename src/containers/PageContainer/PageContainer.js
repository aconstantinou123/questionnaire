import React from 'react'

import ScaleQuestion from '../../components/ScaleQuestion/ScaleQuestion'
import Result from '../../components/Result/Result'
import Info from '../../components/Info/Info'
import PageButtons from '../../components/PageButtons/PageButtons'

import './PageContainer.css'

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
  const calculateProgress = () => {
    if(currentPage.type === 'rating_scale'){
        let currentQuestionNumber = 1
        answers.forEach((answer, index) => {
          if(answer.identifer === currentPage.collect){
            currentQuestionNumber = currentQuestionNumber + index
          }
        })
        const percent = currentQuestionNumber / answers.length * 100
        return percent
    }
    return 0
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
      <PageButtons
        progress={calculateProgress()}
        currentPageIndex={currentPageIndex}
        pages={pages}
        getNextPage={getNextPage}
        getPreviousPage={getPreviousPage}
        resetState={resetState}
      />
    </div>
  )
}

export default PageContainer
