import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "./store/login";

export default function Login() {
  const login = useSelector((state) => state.login.isLogin);
  const dispatch=useDispatch()
  return (
    <div>
      {login ? (
        <>
          <div>로그인하셨습니다</div>
          <button onClick={()=>dispatch(loginAction.logout())}>로그아웃</button>
        </>
      ) : (
        <>
          <div>로그아웃하셨습니다.</div>
          <button onClick={()=>dispatch(loginAction.login())}>로그인</button>
        </>
      )}
    </div>
  );
}
