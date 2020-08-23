type Color = {
  id: string,
  hex: string,
  colorGroupId: number,
}

type ColorGroup = {
  id: string,
  name: string
}

type PageQuery = {
  count: number,
  colorGroup: ColorGroup[],
  rows: Color[]
}

type Actions =
  | {type: "UPDATE_PAGES", payload: PageQuery}
  | {type: "UPDATE_VIEW", payload: boolean}


type State = {
  groupColors: ColorGroup[],
  pageColors: Color[],
  totalPages: number,
  currentPage: number,
  listView: boolean
}

const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case 'UPDATE_PAGES':
      console.log("REDUCER: ", action.payload)
      const totalPages = Math.ceil(action.payload.count / 12)
      return {...state, totalPages: totalPages, pageColors: action.payload.rows, groupColors: action.payload.colorGroup}
    case 'UPDATE_VIEW':
      return {...state}
    default:
      return state
  }
}

export default reducer
