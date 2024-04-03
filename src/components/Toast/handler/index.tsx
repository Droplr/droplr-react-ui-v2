"use client";
import React, { useEffect } from "react";
import Toast from "../component";
import { ToastProps } from "../component/Toast";
import "./handler.css";

export const TOAST_EVENT = {
  CREATE: "DRUI_TOAST_CREATE",
  REMOVE: "DRUI_TOAST_REMOVE",
};
export interface NewToastProps {
  message: string;
  title?: string;
  icon?: any;
  duration?: number;
  align?: "top" | "bottom";
  clickToDismiss?: boolean;
  onClick?: () => void;
}

export const SuccessToast = ({
  message = "",
  title = "",
  icon = null,
  duration = 5000,
  align = "top",
  clickToDismiss = true,
  onClick = () => {},
}: NewToastProps) => {
  const event = new CustomEvent(TOAST_EVENT.CREATE, {
    detail: {
      variant: "success",
      message,
      title,
      icon,
      duration,
      align,
      clickToDismiss,
      onClick,
    },
  });
  window.dispatchEvent(event);
};

export const InfoToast = ({
  message = "",
  title = "",
  icon = null,
  duration = 5000,
  align = "top",
  clickToDismiss = true,
  onClick = () => {},
}: NewToastProps) => {
  const event = new CustomEvent(TOAST_EVENT.CREATE, {
    detail: {
      variant: "info",
      message,
      title,
      icon,
      duration,
      align,
      clickToDismiss,
      onClick,
    },
  });
  window.dispatchEvent(event);
};

export const WarningToast = ({
  message = "",
  title = "",
  icon = null,
  duration = 5000,
  align = "top",
  clickToDismiss = true,
  onClick = () => {},
}: NewToastProps) => {
  const event = new CustomEvent(TOAST_EVENT.CREATE, {
    detail: {
      variant: "warning",
      message,
      title,
      icon,
      duration,
      align,
      clickToDismiss,
      onClick,
    },
  });
  window.dispatchEvent(event);
};

export const ErrorToast = ({
  message = "",
  title = "",
  icon = null,
  duration = 5000,
  align = "top",
  clickToDismiss = true,
  onClick = () => {},
}: NewToastProps) => {
  const event = new CustomEvent(TOAST_EVENT.CREATE, {
    detail: {
      variant: "error",
      message,
      title,
      icon,
      duration,
      align,
      clickToDismiss,
      onClick,
    },
  });
  window.dispatchEvent(event);
};

export const RemoveToast = (id: number) => {
  const event = new CustomEvent(TOAST_EVENT.REMOVE, {
    detail: {
      id,
    },
  });
  window.dispatchEvent(event);
};
const ToastContainer = ({ offsetTop = 0 }) => {
  const [toasts, setToasts] = React.useState<ToastProps[]>([]);
  useEffect(() => {
    InitializeToastEventHandler();
  }, []);

  const InitializeToastEventHandler = () => {
    window.addEventListener(TOAST_EVENT.CREATE, (event: CustomEvent) => {
      setToasts((prevToasts) => [
        ...prevToasts,
        {
          id: Math.floor(Math.random() * 10000000),
          //@ts-ignore
          message: event.detail.message,
          //@ts-ignore
          title: event.detail.title,
          //@ts-ignore
          icon: event.detail.icon,
          //@ts-ignore
          variant: event.detail.variant,
          //@ts-ignore
          duration: event.detail.duration,
          //@ts-ignore
          align: event.detail.align,
          //@ts-ignore
          clickToDismiss: event.detail.clickToDismiss,
          //@ts-ignore
          onClick: event.detail.onClick,
        },
      ]);
    });
    window.addEventListener(TOAST_EVENT.REMOVE, (event: CustomEvent) => {
      setToasts((prevToasts) =>
        //@ts-ignore
        prevToasts.filter((toast) => toast.id !== event.detail.id)
      );
    });
  };

  return (
    <div
      className="drui-toast-list-container"
      style={{
        marginTop: offsetTop !== 0 ? `${offsetTop}px` : "0",
      }}
    >
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

export const WithToasts = ({ children, offsetTop = 0 }) => {
  return (
    <>
      <ToastContainer offsetTop={offsetTop} />
      {children}
    </>
  );
};
