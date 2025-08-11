import S from './Signup.module.css';
import { Button, Input, Header } from '../components/index';
import signupImg from '@/assets/signup.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    studentId: "",
    name: "",
    id: "",
    passwd: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSignup = () => {
    navigate('/signin')
  };

  const goToLogin = () => {
    navigate('/signin');
  }

  const inputFields = [
    { name: "studentId", placeholder: "학번", required: true },
    { name: "name", placeholder: "이름", required: true },
    { name: "id", placeholder: "아이디", required: true },
    { name: "passwd", placeholder: "비밀번호", required: true, password: true }
  ];

  return (
    <>
      <Header marginTop="65px" width="99px" height="92px" title="회원가입" img={signupImg} />
      <div className={S.wrapper}>
        <form onSubmit={handleSignup}>
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
          <Button type="submit" onClick={() => {}} value="회원가입" />
          <Button type="button" onClick={goToLogin} value="로그인" color="#00CC87" background="#ffffff" size="24px" weight="500" />
        </form>
      </div>
    </>
  );
}
