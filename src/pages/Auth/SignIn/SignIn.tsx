import S from './Signin.module.css';
import { Button, Input, Header } from '../components/index';
import signinImg from '@/assets/login.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: "",
    passwd: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    
  };

  const goToSignup = () => {
    navigate('/signup');
  }

  const inputFields = [
    { name: "id", placeholder: "아이디", required: true },
    { name: "passwd", placeholder: "비밀번호", required: true, password: true }
  ];

  return (
    <>
      <Header marginTop="65px" width="107px" height="100px" title="로그인" img={signinImg} />
      <div className={S.wrapper}>
        <form onSubmit={handleLogin}>
          {inputFields.map((field) => (
            <Input
              key={field.name}
              name={field.name}
              value={formData[field.name as keyof typeof formData]}
              onChange={handleChange}
              required={field.required}
              placeholder={field.placeholder}
              password={field.password}
            />
          ))}
          <Button type="submit" onClick={handleLogin} value="로그인" />
          <Button type="button" onClick={goToSignup} value="회원가입" color="#00CC87" background="#ffffff" size="24px" weight="500" />
        </form>
      </div>
    </>
  );
}
