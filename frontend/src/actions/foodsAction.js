import axios from 'axios'
import {
    FOODS_ALL_REQUEST,
    FOODS_ALL_SUCCESS,
    FOODS_ALL_FAIL,
    FOODS_CREATE_REQUEST,
    FOODS_CREATE_SUCCESS,
    FOODS_CREATE_FAIL,
    FOODS_DELETE_REQUEST,
    FOODS_DELETE_SUCCESS,
    FOODS_DELETE_FAIL,
    FOODS_BYID_REQUEST,
    FOODS_BYID_SUCCESS,
    FOODS_BYID_FAIL
    
} from '../constants/foodsConstants'






export const allFoods = () => async (dispatch) => {
    try {
          dispatch({
                type: FOODS_ALL_REQUEST,
          })

          const { data } = await axios.get('/api/food/')

          console.log(data)

          dispatch({
                type: FOODS_ALL_SUCCESS,
                payload: data
          })
    } catch (error) {
          console.log(error)

          dispatch({
                type: FOODS_ALL_FAIL,
                payload:
                      error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,

          })
    }
}


export const addFood = (name,category,price,description,image) => async (dispatch, getState) => {
    try {
      dispatch({
        type: FOODS_CREATE_REQUEST,
      })
  
  
  
      const { data } = await axios.post(`/api/food/addfood`, {name,category,price,description,image})
  
      dispatch({
        type: FOODS_CREATE_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: FOODS_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }


  export const deleteFood = (id) => async (dispatch) => {
    try {
          dispatch({
                type: FOODS_DELETE_REQUEST,
          })

          await axios.delete(`/api/food/${id}`)

          dispatch({
                type: FOODS_DELETE_SUCCESS,

          })
    } catch (error) {
          dispatch({
                type: FOODS_DELETE_FAIL,
                payload:
                      error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,
          })
    }
}


export const getFoodDetails = (id) => async (dispatch, getState) => {
      try {
            dispatch({
                  type: FOODS_BYID_REQUEST,
            })

            const { data } = await axios.get(`/api/food/${id}`)

            dispatch({
                  type: FOODS_BYID_SUCCESS,
                  payload: data
            })

      } catch (error) {
            dispatch({
                  type: FOODS_BYID_FAIL,
                  payload:
                        error.response && error.response.data.message
                              ? error.response.data.message
                              : error.message,
            })
      }
}