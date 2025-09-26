import React, { useState } from 'react';
import { useRequestSignUp } from '@/services/auth/auth.mutation';
import { type SignUpType } from '@/types';
import { Toastify } from '@/components/Toastify';
import * as styles from './style.css';
import { IoEye, IoEyeOff } from "react-icons/io5";
import Weesh from "@/assets/timid.png"

interface SignUpProps {
  onNavigateToLogin?: () => void;
  onSignUpSuccess?: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ 
  onNavigateToLogin, 
  onSignUpSuccess 
}) => {
  const [formData, setFormData] = useState<SignUpType & { confirmPassword: string }>({
    username: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    studentNumber: 0
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const signUpMutation = useRequestSignUp();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'studentNumber') {
      const numericValue = value.replace(/\D/g, '').slice(0, 4);
      setFormData(prev => ({
        ...prev,
        [name]: numericValue ? parseInt(numericValue) : 0
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const validatePassword = (password: string) => {
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    return password.length >= 8 && password.length <= 16 && specialCharRegex.test(password);
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      Toastify({ content: '이름을 입력해주세요.', type: 'info' });
      return false;
    }

    if (!formData.username.trim()) {
      Toastify({ content: '아이디를 입력해주세요.', type: 'info' });
      return false;
    }

    if (formData.studentNumber <= 0 || formData.studentNumber.toString().length !== 4) {
      Toastify({ content: '4자리 학번을 입력해주세요.', type: 'info' });
      return false;
    }

    const firstDigit = formData.studentNumber.toString().charAt(0);
    if (!['1', '2', '3'].includes(firstDigit)) {
      Toastify({ content: '학번은 1, 2, 3으로 시작해야 합니다.', type: 'info' });
      return false;
    }

    if (!formData.password.trim()) {
      Toastify({ content: '비밀번호를 입력해주세요.', type: 'info' });
      return false;
    }

    if (formData.password.length < 8) {
      Toastify({ content: '비밀번호는 8자리 이상이어야 합니다.', type: 'info' });
      return false;
    }

    if (formData.password.length > 16) {
      Toastify({ content: '비밀번호는 16자리 이하여야 합니다.', type: 'info' });
      return false;
    }

    if (!validatePassword(formData.password)) {
      Toastify({ content: '비밀번호는 8~16자이며 특수문자를 포함해야 합니다.', type: 'info' });
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      Toastify({ content: '비밀번호가 일치하지 않습니다.', type: 'info' });
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    const { confirmPassword, ...signUpData } = formData;
    
    signUpMutation.mutate(signUpData as SignUpType, {
      onSuccess: () => {
        Toastify({ content: '회원가입이 완료되었습니다!', type: 'info' });
        onSignUpSuccess?.();
      },
      onError: (error) => {
        if (error.message.includes('409')) {
          Toastify({ content: '이미 존재하는 아이디입니다. 다른 아이디를 사용해주세요.', type: 'error' });
        }
        Toastify({ content: '회원가입에 실패했습니다. 다시 시도해주세요.', type: 'error' });
        console.error('SignUp error:', error);
      }
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(prev => !prev);
  };

  const isPasswordValid = formData.password ? validatePassword(formData.password) : true;
  const isPasswordMatch = formData.password === formData.confirmPassword;

  return (
    <div className={styles.auth.container}>
      <div className={styles.auth.formWrapper}>
        <div className={styles.auth.header}>
          <img src={Weesh} width={50}/>
          <h1 className={styles.auth.title}>회원가입</h1>
        </div>
    
        <form onSubmit={handleSubmit} className={styles.auth.form}>
          <div className={styles.auth.inputGroup}>
            <label htmlFor="fullName" className={styles.auth.label}>
              이름
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className={styles.auth.input}
              placeholder="이름을 입력하세요."
              required
            />
          </div>

          <div className={styles.auth.inputGroup}>
            <label htmlFor="username" className={styles.auth.label}>
              아이디
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className={styles.auth.input}
              placeholder="아이디를 입력하세요."
              required
            />
          </div>

          <div className={styles.auth.inputGroup}>
            <label htmlFor="studentNumber" className={styles.auth.label}>
              학번
            </label>
            <input
              type="text"
              id="studentNumber"
              name="studentNumber"
              value={formData.studentNumber === 0 ? '' : formData.studentNumber.toString()}
              onChange={handleInputChange}
              className={styles.auth.input}
              placeholder="4자리 학번 (1, 2, 3으로 시작)"
              required 
              maxLength={4}
              pattern="[1-3][0-9]{3}"
              title="학번은 4자리이며 1, 2, 3으로 시작해야 합니다."
            />
          </div>

          <div className={styles.auth.inputGroup}>
            <label htmlFor="password" className={styles.auth.label}>
              비밀번호
            </label>
            <div className={styles.auth.passwordWrapper}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={styles.auth.input}
                placeholder="비밀번호를 입력하세요. (8자리 이상 특수문자 포함)"
                required
                minLength={8}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className={styles.auth.passwordToggle}
              >
                {showPassword ? <IoEyeOff /> : <IoEye />}
              </button>
            </div>
          </div>

          <div className={styles.auth.inputGroup}>
            <label htmlFor="confirmPassword" className={styles.auth.label}>
              비밀번호 확인
            </label>
            <div className={styles.auth.passwordWrapper}>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={`${styles.auth.input} ${
                  formData.confirmPassword && !isPasswordMatch ? styles.auth.inputError : ''
                }`}
                placeholder="비밀번호를 다시 입력하세요."
                required
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className={styles.auth.passwordToggle}
              >
                {showConfirmPassword ? <IoEyeOff /> : <IoEye />}
              </button>
            </div>
            {formData.confirmPassword && !isPasswordMatch && (
              <span className={styles.auth.errorText}>
                비밀번호가 일치하지 않습니다.
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={signUpMutation.isPending || !isPasswordMatch || !isPasswordValid}
            className={styles.auth.submitButton}
          >
            {signUpMutation.isPending ? '가입 중...' : '회원가입'}
          </button>
        </form>

        <div className={styles.auth.footer}>
          <p className={styles.auth.footerText}>
            이미 계정이 있으신가요?{' '}
            <button
              type="button"
              onClick={onNavigateToLogin}
              className={styles.auth.linkButton}
            >
              로그인
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;