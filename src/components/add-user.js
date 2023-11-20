import { useState } from 'react';

const AddUser = (userList, setUserList) => {
    const [name, setName] = useState('');
    const [nickName, setNickName] = useState('');
    const [age, setAge] = useState('');
    const onAddOneUser = (e) => {
        e.preventDefault();
        // 새로 만들어진 요소들 소환
        const newUser = { name, nickName, age };
        // 왜 안되는지 모르겠다ㅠㅠ
        setUserList((prev) => [
            {
                newUser,
                name,
                nickName,
                age,
                id: Math.floor(Math.random() * 100000),
            },
            ...prev,
        ]);
        setName('');
        setNickName('');
        setAge('');
        console.log(name, nickName, age);
    };
    return (
        <form onSubmit={onAddOneUser}>
            <p>
                <input
                    type="text"
                    placeholder="이름을 입력하세요."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </p>
            <p>
                <input
                    type="text"
                    placeholder="닉네임을 입력하세요"
                    value={nickName}
                    onChange={(e) => setNickName(e.target.value)}
                />
            </p>
            <p>
                <input
                    type="text"
                    placeholder="연령을 입력하세요"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </p>
            {/* button이 클릭될때마다 추가되어야한다. */}
            <button>추가</button>
        </form>
    );
};

export default AddUser;
