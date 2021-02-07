import s from './FormsControl.module.css'
// Вместо обычных textarea & input, мы используем компоненты, так как на них можно использовать стили

export const Textarea = ({input, meta, ...props}) => {
    //touched и error, это метаданные, которые нас информируют о действиях в строках
    const hasError = meta.touched && meta.error // тут идет проверка, если есть ошибка, то добавляем css стили

    return (
        <div className={s.formControl + " " + (hasError ? s.error : '')}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    //touched и error, это метаданные, которые нас информируют о действиях в строках
    const hasError = meta.touched && meta.error // тут идет проверка, если есть ошибка, то добавляем css стили

    return (
        <div className={s.formControl + " " + (hasError ? s.error : '')}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}