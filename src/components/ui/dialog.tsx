import React, { ReactNode } from 'react';

interface DialogProps {
  title: string;
  children: ReactNode;
  setIsDialogOpen: (isOpen: boolean) => void;
}

const Dialog: React.FC<DialogProps> = ({ title, children, setIsDialogOpen }) => {
  const onClose = () => {
    setIsDialogOpen(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="relative w-96 rounded-lg bg-white p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button className="text-gray-500" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Dialog;
