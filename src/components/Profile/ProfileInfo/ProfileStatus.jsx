import React from 'react';

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = React.useState(false) //Hook, используем деструктуризацию. editMode булева переменная, setEditMode функция для изменения editMode
    let [status, setStatus] = React.useState(props.status)       // Тут такая же суета как ▲, только в параметр передаем данные из стейта

    const activateMode = () => {
        setEditMode(true)
    }

    const deactivateMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateMode}>{props.status || "----"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} onBlur={deactivateMode} autoFocus={true}
                       value={status}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatus