import S from './AuthHeader.module.css';
import BackIcon from '@/assets/backIcon.png';
import { useNavigate } from 'react-router-dom';

interface AuthHeaderProps {
  marginTop: string;
  width: string;
  height: string;
  title: string;
  img: string;
}

export default function AuthHeader({ marginTop, width, height, title, img } : AuthHeaderProps){
  const navigate = useNavigate();

  const goToBack = () => {
    navigate(-1);
  }

  return(
    <div className={S.wrapper}>
      <div className={S.backButtonWrapper}>
        <div className={S.backButtonBox} onClick={goToBack}>
          <img src={BackIcon} alt="뒤로가기" />
        </div>
      </div>
      <div className={S.authHeaderImgBox} style={{marginTop: marginTop}}>
        <img src={img} alt="쿨한사진" style={{width: width, height: height}} />
      </div>
      <div className={S.authHeaderTitleBox}>
        <p>{title}</p>
      </div>
    </div>
  )
}