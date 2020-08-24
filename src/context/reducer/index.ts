type Color = {
  id: string,
  hex: string,
  colorGroupId: string,
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
  | {type: "UPDATE_CURRENT_PAGE", payload: number}
  | {type: "UPDATE_CURRENT_COLOR", payload: Color}
  | {type: "UPDATE_SIMILAR_COLORS", payload: Color[]}

type State = {
  groupColors: ColorGroup[],
  pageColors: Color[],
  totalPages: number,
  currentPage: number,
  currentColor: Color | null,
  similarColors: Color[]
}

const reducer = (state: State, action: Actions) => {
  // console.log("REDUCER: ", action.payload)
  switch (action.type) {
    case 'UPDATE_PAGES':
      const totalPages = Math.ceil(action.payload.count / 12)
      return {...state, totalPages: totalPages, pageColors: action.payload.rows, groupColors: action.payload.colorGroup}
    case 'UPDATE_VIEW':
      return {...state}
    case 'UPDATE_CURRENT_PAGE':
      return {...state, currentPage: action.payload}
    case 'UPDATE_CURRENT_COLOR':
      return {...state, currentColor: action.payload}
    case 'UPDATE_SIMILAR_COLORS':
      return {...state, similarColors: action.payload}
    default:
      return state
  }
}

export default reducer
