import React, { createContext, useContext, useEffect, useReducer } from "react";
import Toast, { ToastProps } from "../component/Toast";
import "./provider.css";

export interface ToastContextProps {
  Success: Function;
  Info: Function;
  Warning: Function;
  Danger: Function;
  Remove: Function;
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

const ToastContainer = ({ toasts }) => {
  return (
    <div className="drui-toast-list-container">
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
          key={`drui-toast-${toast.id}`}
        />
      ))}
    </div>
  );
};

export const ToastProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ToastReducer, initialState);

  const SpawnToast = (
    variant: "success" | "info" | "warning" | "danger",
    message: string,
    title?: string,
    icon?: any,
    duration?: number,
    align?: "top" | "bottom",
    clickToDismiss?: boolean,
  ) => {
    const id = Math.floor(Math.random() * 10000000);
    dispatch({
      type: "CREATE",
      payload: { id, variant, message, title, icon, duration, align, clickToDismiss },
    });
    return id;
  };

  const Remove = (id: number) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const Success = (
    message: string,
    title?: string,
    icon?: any,
    duration?: number,
    align?: "top" | "bottom",
    clickToDismiss?: boolean,
  ) => {
    return SpawnToast("success", message, title, icon, duration, align, clickToDismiss);
  };

  const Info = (
    message: string,
    title?: string,
    icon?: any,
    duration?: number,
    align?: "top" | "bottom",
    clickToDismiss?: boolean,
  ) => {
    return SpawnToast("info", message, title, icon, duration, align, clickToDismiss);
  };

  const Warning = (
    message: string,
    title?: string,
    icon?: any,
    duration?: number,
    align?: "top" | "bottom",
    clickToDismiss?: boolean,
  ) => {
    return SpawnToast("warning", message, title, icon, duration, align, clickToDismiss);
  };

  const Danger = (
    message: string,
    title?: string,
    icon?: any,
    duration?: number,
    align?: "top" | "bottom",
    clickToDismiss?: boolean,
  ) => {
    return SpawnToast("danger", message, title, icon, duration, align, clickToDismiss);
  };

  return (
    <ToastContext.Provider value={{ Success, Warning, Info, Danger, Remove }}>
      <ToastContainer toasts={state.toasts} />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return ctx;
};
