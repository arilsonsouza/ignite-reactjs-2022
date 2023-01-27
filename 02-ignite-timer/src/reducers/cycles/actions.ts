import { Cycle } from './reducer'

/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUP_CURRENT_CYCLE = 'INTERRUP_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}
/* eslint-enable no-unused-vars */

export function addNewCicleAction(newCycle: Cycle) {
  return { type: ActionTypes.ADD_NEW_CYCLE, payload: { newCycle } }
}

export function markCurrentCycleAsFinishedAction() {
  return { type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED }
}

export function interruptCurrentCycleAction() {
  return { type: ActionTypes.INTERRUP_CURRENT_CYCLE }
}
