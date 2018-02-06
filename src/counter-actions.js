export const CHANGE = 'change'

export default function actionCounter(sum) {
  return {
    type: CHANGE,
    sum,
  }
}
