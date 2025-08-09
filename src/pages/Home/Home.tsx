import S from './Home.module.css';
import { useNavigate } from 'react-router-dom';

export default function Home(){
  const navigate = useNavigate();
  
  const goToLogin = () => {
    navigate('/signin');
  }

  const goToSignup = () => {
    navigate('/signup');
  }

  return(
    <div className={S.wrapper}>
      <button onClick={goToLogin}>로그인</button>
      <button onClick={goToSignup}>회원가입</button>
    </div>
  )
}