import { useRef, useState } from 'react';

const OneUser = ({ id, name, nickName, age, setUserList, userList }) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const editNickNameInput = useRef(null);
    const onDeleteUser = () => {
        // 선택된 요소가 아닌 것들을 남기기위해 filter !== 를 쓴다
        const newUserList = userList.filter((user) => user.id !== id);
        console.log(`id`, id);
        setUserList(newUserList);
    };

    const onEditNickName = () => {
        // 이부분 주석 작성하기
        setUserList((userList) => {
            if (!isEditMode) return setIsEditMode(true);
            const updatedUser = userList.find((el) => el.id === id);
            console.log(updatedUser);
            updatedUser.nickName = editNickNameInput.current.value;
            return userList;
        });
        setIsEditMode(false);
    };

    return (
        <div className="userItem">
            <div>name: {name}</div>
            {/* defaultValue? */}
            {isEditMode ? (
                <input defaultValue={nickName} ref={editNickNameInput}></input>
            ) : (
                <div>nickName: {nickName}</div>
            )}
            <button onClick={onEditNickName}>수정</button>
            <div>age: {age}</div>
            {/* onClick을 만들어서 삭제 할 수있도록 해야한다 */}
            <button onClick={onDeleteUser}>삭제</button>
        </div>
    );
};

export default OneUser;
