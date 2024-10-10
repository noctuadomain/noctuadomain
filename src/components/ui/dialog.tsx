import React from 'react';

type Tab = {
  title: string;
  content: React.ReactNode;
};

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  tabs: Tab[];
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, title, tabs }) => {
  const [activeTab, setActiveTab] = React.useState(0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 sm:mx-5">
      <div className="relative w-full max-w-md rounded-lg bg-white pb-2 shadow-lg">
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-xl font-semibold text-black">{title}</h2>
          <button
            className="text-4xl text-black hover:text-gray-700 focus:outline-none"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="px-6 pt-2">
          <div className="mb-4 flex space-x-4 border-b">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`px-4 pb-2 focus:outline-none ${
                  activeTab === index
                    ? 'border-b-2 border-black font-bold text-black'
                    : 'text-gray-500'
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="mb-2">{tabs[activeTab].content}</div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
