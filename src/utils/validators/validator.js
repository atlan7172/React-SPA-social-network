// ТУТ МЫ СОЗДАЕМ ПРАВИЛА ЗАПОЛНЕНИЯ ФОРМ

export const reguiredField = value => {     // Если поле пустое
    if (value) return undefined
    return 'error message'
}

export const maxLengthCreator = (maxLength) => (value) => {   // Если размер символов превышен
    if (value.length > maxLength) return 'Max length is ' + maxLength + ' symbols'
    return undefined
}