import { create } from "zustand"

export default create((set) => {
  return {
    book: false,

    setBook: (value) => {
      set((state) => {
        return { book: value };
      })
    },
  }
})
  