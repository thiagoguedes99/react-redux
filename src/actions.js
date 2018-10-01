// actions types
export const HELO = 'HELO'

// actions creators
export const helo = () => {
  return {
    type: HELO,
    payload: {
      msg: 'foi aqui HELO'
    }
  }
}