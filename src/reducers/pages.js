import {
  GET_NEXT_PAGE,
  GET_PREVIOUS_PAGE,
  SELECT_ANSWER_YOU,
  SELECT_ANSWER_PARTNER,
} from '../types'

import data from '../data/quiz-data.json'

const defaultState = {
  currentPage: data.pages[0],
  currentPageIndex: 0,
  pages: data.pages,
  answers: data.pages
    .filter(page => page.type === 'rating_scale')
    .map(page => ({ 
      identifer: page.collect, 
      userAnswer: page.defaultIndex + 1,
      userAnswerText: page.options[page.defaultIndex],
      partnerAnswer: page.defaultIndex + 1,
      partnerAnswerText: page.options[page.defaultIndex],
  }))
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case GET_NEXT_PAGE:
      return {
        ...state,
        currentPageIndex: state.currentPageIndex + 1,
        currentPage: state.pages[state.currentPageIndex + 1],
      }
    case GET_PREVIOUS_PAGE:
      return {
        ...state,
        currentPageIndex: state.currentPageIndex - 1,
        currentPage: state.pages[state.currentPageIndex - 1],
      }
    case SELECT_ANSWER_YOU:
      return {
        ...state,
        answers: state.answers.map(answer => {
          if(answer.identifer === action.payload.identifier){
            return {
              ...answer,
              userAnswer: Number(action.payload.value) + 1,
              userAnswerText: state.currentPage.options[action.payload.value]
            }
          }
          return answer
        })
      }
    case SELECT_ANSWER_PARTNER:
      return {
        ...state,
        answers: state.answers.map(answer => {
          if(answer.identifer === action.payload.identifier){
            return {
              ...answer,
              partnerAnswer: Number(action.payload.value) + 1,
              partnerAnswerText: state.currentPage.options[action.payload.value]
            }
          }
          return answer
        })
      }
    default:
      return state
  }
}