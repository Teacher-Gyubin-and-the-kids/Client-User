import { Slide, toast, type ToastOptions } from "react-toastify";
import * as styles from "./style.css";

const defaultToastOptions: ToastOptions = {
  position: "top-right",
  transition: Slide,
};

type ToastType = "info" | "error";

export const Toastify = ({
  content,
  type,
}: {
  content: string;
  type: ToastType;
}) => {
  const getIcon = () => {
    switch (type) {
      case "info":
        return <img src="/src/assets/weesh.png" className={styles.icon} />;
      case "error":
        return <img src="/src/assets/angry.png" className={styles.icon} />;
    }
  };

  const toastConfig = {
    ...defaultToastOptions,
    icon: getIcon,
  };

  const message = () => (
    <pre
      style={{
        margin: 0,
        fontFamily: "inherit",
        whiteSpace: "pre-wrap",
      }}
    >
      {content}
    </pre>
  );

  toast.info(message, toastConfig);
};
