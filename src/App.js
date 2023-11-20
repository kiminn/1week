import logo from './logo.svg';
import './App.css';
import OneUser from './components/one-user';
import { Users } from './components/users';
import { useState } from 'react';
import AddUser from './components/add-user';

// 1. 배열을 순회하여 길이만큼 반환한다
// 순회할 수 있는 함수: map, forEach
function App() {
    // userList는 추가나 삭제시 계속 화면에 랜더되어야하므로 state를 사용하여준다
    // useState의 default값을 Users배열로 설정해준다.
    const [userList, setUserList] = useState(Users);
    console.log(userList);

    return (
        <>
            {/* userList에 추가된 값을 세팅하기위해서 props를 이용하여 전달한다. */}
            <AddUser userList={userList} setUserList={setUserList} />
            {/* javascript를 쓰기위해 중괄호를 열고시작함 */}
            {/* array를 하나하나가져와서 순회한다. map */}
            {userList &&
                userList.map((user, index) => (
                    <OneUser
                        key={index}
                        id={user.id}
                        name={user.name}
                        nickName={user.nickName}
                        age={user.age}
                        setUserList={setUserList}
                        userList={userList}
                    />
                ))}
        </>
    );
    /**
     * @description
     * users를 순회하여 요소의 길이만큼 OneUser를 반환
     * users: 순회할때 필요한 배열
     * {"."}: 배열의 고차함수 메서드에 접근하기 위한 객체 접근법
     * ( : 고차함수인 map의 실행문을 열 때 사용하는 소괄호
     * ( : map의 콜백함수의 인자(함수가 실행될 때 전달되는 값)를 뜻할 때 사용하는 소괄호
     * user: map의 콜백함수의 첫 번째 인장이자 각 순회의 배열 요소
     * index: map의 콜백함수의 두 번째 인자이자 각 순회의 인덱스
     * ) : map의 콜백함수의 인자를 닫기 위해 사용하는 소괄호
     * => : 함수의 화살표 함수
     */
}

export default App;
