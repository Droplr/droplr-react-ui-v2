import React, { createContext, useContext, useEffect, useReducer } from "react";
import Toast, { ToastProps } from "../component/Toast";
import "./provider.css";

export interface NewToastProps {
  message: string;
  title?: string;
  icon?: any;
  duration?: number;
  align?: "top" | "bottom";
  clickToDismiss?: boolean;
  onClick?: () => void;
}
export interface ToastContextProps {
  Success: (props: NewToastProps) => number;
  Info: (props: NewToastProps) => number;
  Warning: (props: NewToastProps) => number;
  Danger: (props: NewToastProps) => number;
  Remove: (id: number) => void;
}
const ToastContext = createContext<ToastContextProps | null>(null);
const initialState = {
  toasts: [],
};

const ToastReducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return {
        ...state,
        toasts: [...state.toasts, action.payload],
      };
    case "DELETE":
      const updatedToasts = state.toasts.filter(
        (toast) => toast.id !== action.payload
      );
      return {
        ...state,
        toasts: updatedToasts,
      };
    default:
      return state;
  }
};

const ToastContainer = ({ toasts, offsetTop = 0 }) => {
  return (
    <div className="drui-toast-list-container" style={{
      marginTop: offsetTop !== 0 ? `${offsetTop}px` : "0"
    }}>
      {toasts.map((toast: ToastProps) => (
        <Toast
          id={toast.id}
          message={toast.message}
          title={toast.title}
          icon={toast.icon}
          variant={toast.variant}
          duration={toast.duration}
          align={toast.align}
          clickToDismiss={toast.clickToDismiss}
          onClick={toast.onClick}
          key={`drui-toast-${toast.id}`}
        />
      ))}
    </div>
  );
};

export const ToastProvider = ({ children, offsetTop = 0 }) => {
  const [state, dispatch] = useReducer(ToastReducer, initialState);

  const SpawnToast = (
    variant: "success" | "info" | "warning" | "danger",
    message: string,
    title?: string,
    icon?: any,
    duration?: number,
    align?: "top" | "bottom",
    clickToDismiss?: boolean,
    onClick?: () => void
  ) => {
    const id = Math.floor(Math.random() * 10000000);
    dispatch({
      type: "CREATE",
      payload: {
        id,
        variant,
        message,
        title,
        icon,
        duration,
        align,
        clickToDismiss,
        onClick
      },
    });
    return id;
  };

  const Remove = (id: number) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const Success = (props: NewToastProps) => {
    return SpawnToast(
      "success",
      props.message,
      props.title,
      props.icon,
      props.duration,
      props.align,
      props.clickToDismiss,
      props.onClick
    );
  };

  const Info = (props: NewToastProps) => {
    return SpawnToast(
      "info",
      props.message,
      props.title,
      props.icon,
      props.duration,
      props.align,
      props.clickToDismiss,
      props.onClick
    );
  };

  const Warning = (props: NewToastProps) => {
    return SpawnToast(
      "warning",
      props.message,
      props.title,
      props.icon,
      props.duration,
      props.align,
      props.clickToDismiss,
      props.onClick
    );
  };

  const Danger = (props: NewToastProps) => {
    return SpawnToast(
      "danger",
      props.message,
      props.title,
      props.icon,
      props.duration,
      props.align,
      props.clickToDismiss,
      props.onClick
    );
  };

  return (
    <ToastContext.Provider value={{ Success, Warning, Info, Danger, Remove }}>
      <ToastContainer toasts={state.toasts} offsetTop={offsetTop} />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextProps => {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return ctx;
};
