import React from "react";
import useInput from "pattern/state-reducer/useInput";

export default function SignIn() {
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "password":
        return {
          ...state,
          password: action.value,
        };
      default:
        return useInputUpdate.reducer(state, action);
    }
  };

  
  const [{ email, password }, handleInput] = useInput(
    { email: "", password: "" },
    reducer
  );

  return (
    <form>
      <p>로그인</p>
      <input
        data-key="email"
        value={email}
        onChange={handleInput}
        placeholder="이메일을 입력해주세요"
      />
      <input
        data-key="password"
        type="password"
        value={password}
        onChange={handleInput}
        placeholder="비밀번호를 입력해주세요"
      />
    </form>
  );
}
