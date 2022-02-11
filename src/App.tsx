import React from "react";
import { useRecoilState } from "recoil";
import { hourSelector, minuteState } from './atoms';

function App() {
    const [ minutes, setMinutes ] = useRecoilState(minuteState);
    // useRecoilState는 atom의 값에 더해서 atom을 수정할 함수까지 준다.
    const [ hours, setHours ] = useRecoilState(hourSelector);
    // setHours는 set property를 실행시키는 함수.
    const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
        setMinutes(+event.currentTarget.value);
        // 기본값이 number인데 input에 넘어오는 값은 string. '+' 붙여주면 숫자로 바꿔줌.
        // +"1" => 1 
    };
    const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
        setHours(+event.currentTarget.value);
    };
    return(
        <div>
            <input value={minutes}  onChange={onMinutesChange} type="number" placeholder="Minutes" />
            <input onChange={onHoursChange} value={hours} type="number" placeholder="Hours" />
            {/* input에 onChangeEvent가 없고 값만 있다면 읽기만 가능. */}
        </div>
    )
}

export default App;