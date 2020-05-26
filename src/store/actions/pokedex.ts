import { Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { StateType } from '../reducers/pokedex'
import Axios from '@/core/api.config'
import Type from './action-types'

const { FETCH_ITEM, LOAD_ITEM, SHOW_INFO } = Type

type ThunkType = ThunkAction<Promise<object>, StateType, undefined, ActionTypes>

export const fetchItem = (id: number): ThunkType => {
    return async (dispatch: Dispatch): Promise<object> => {
        const response = await Axios(`${id}`)
        if (response.status == 200) {
            dispatch({ type: FETCH_ITEM })
        }
        return response
    }
}

type LoadItemType = { type: typeof LOAD_ITEM, item: any }
export const loadItem = (item: any): LoadItemType => ({
    type: LOAD_ITEM,
    item
})

type ShowInfoType = { type: typeof SHOW_INFO, id: number }
export const showInfo = (id: number): ShowInfoType => ({
    type: SHOW_INFO,
    id
})

export type ActionTypes = LoadItemType | ShowInfoType
