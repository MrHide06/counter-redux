export const TAMBAH = "TAMBAH";
export const KURANG = "KURANG"

export const addCakes = () => {
    return {
        type: TAMBAH,
    }
}

export const minusCakes = () => {
    return {
        type: KURANG
    }
}