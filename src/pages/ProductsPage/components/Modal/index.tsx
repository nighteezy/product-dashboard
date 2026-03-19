import { type FC, useEffect } from "react";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";

import type { ModalProps } from "./types";
import * as S from "./units";

export const Modal: FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <S.Overlay onClick={onClose} role="dialog" aria-modal="true">
      <S.Content onClick={(e) => e.stopPropagation()}>
        <S.Header>
          {title && <S.Title>{title}</S.Title>}
          <S.CloseButton type="button" onClick={onClose} aria-label="Закрыть">
            <FiX size={24} />
          </S.CloseButton>
        </S.Header>
        {children && <S.Body>{children}</S.Body>}
      </S.Content>
    </S.Overlay>,
    document.body,
  );
};
