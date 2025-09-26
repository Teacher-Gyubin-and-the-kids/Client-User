import React, { useState } from "react";
import { useRequestLogin } from "@/services/auth/auth.mutation";
import { type LoginType, type LoginResponse } from "@/types";
import { Toastify } from "@/components/Toastify";
import { TokenManager } from "@/utils";
import * as styles from "./style.css";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Weesh from "@/assets/happy.png"

interface LoginProps {
  onNavigateToSignUp?: () => void;
  onLoginSuccess?: (userData: any) => void;
}

const Login: React.FC<LoginProps> = ({
  onNavigateToSignUp,
  onLoginSuccess,
}) => {
  const navigator = useNavigate()
  const [formData, setFormData] = useState<LoginType>({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const loginMutation = useRequestLogin();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.username.trim()) {
      Toastify({ content: "사용자명을 입력해주세요.", type: "info" });
      return;
    }

    if (!formData.password.trim()) {
      Toastify({ content: "비밀번호를 입력해주세요.", type: "info" });
      return;
    }

    loginMutation.mutate(formData, {
      onSuccess: (data: LoginResponse) => {
        Toastify({ content:  `환영합니다, ${formData.username}님!`, type: "info" });
        TokenManager.saveTokens(data.data.accessToken, data.data.refreshToken)
        onLoginSuccess?.(data);
        navigator("/")
      },
      onError: () => {
        Toastify({
          content: "아이디와 비밀번호 중 하나가 잘못되었습니다.",
          type: "error",
        });
      },
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={styles.auth.container}>
      <div className={styles.auth.formWrapper}>
        <div className={styles.auth.header}>
          <img src={Weesh} width={50}/>
          <h1 className={styles.auth.title}>로그인</h1>
        </div>

        <form onSubmit={handleSubmit} className={styles.auth.form}>
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
            <label htmlFor="password" className={styles.auth.label}>
              비밀번호
            </label>
            <div className={styles.auth.passwordWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={styles.auth.input}
                placeholder="비밀번호를 입력하세요."
                required
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

          <button
            type="submit"
            disabled={loginMutation.isPending}
            className={styles.auth.submitButton}
          >
            {loginMutation.isPending ? "로그인 중..." : "로그인"}
          </button>
        </form>

        <div className={styles.auth.footer}>
          <p className={styles.auth.footerText}>
            계정이 없으신가요?{" "}
            <button
              type="button"
              onClick={onNavigateToSignUp}
              className={styles.auth.linkButton}
            >
              회원가입
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
