import {
  GET_QUESTION
} from '../types'

export const getQuestion = (payload) => ({
  type: GET_QUESTION,
  payload,
})