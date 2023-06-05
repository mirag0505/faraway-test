import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { TPeople, TPeopleByPage } from '../../service'

// Define a type for the slice state
type PersonsInfoState = {
  value: TPeopleByPage
}

// Define the initial state using that type
const initialState: PersonsInfoState = {
  value: {
    results: [],
    count: 0,
  },
}

export const personsInfoSlice = createSlice({
  name: 'personsInfo',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    updatePerson: (state, action: PayloadAction<TPeople>) => {
      console.log(action.payload)
      state.value.results = [action.payload]
    },
  },
})

export const { updatePerson } = personsInfoSlice.actions

export default personsInfoSlice.reducer
