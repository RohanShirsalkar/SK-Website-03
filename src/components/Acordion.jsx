import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const AccordionItem = ({ title, children, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const contentEl = contentRef.current;
      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="border border-gray-200 rounded-md mb-2 overflow-hidden">
      <button
        className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-gray-800">{title}</span>
        <span
          className="text-gray-500 transition-transform duration-300"
          style={{ transform: isOpen ? "rotate(0deg)" : "rotate(0deg)" }}
        >
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out bg-gray-50"
        style={{ height: `${height}px` }}
      >
        <div ref={contentRef} className="p-4 border-t border-gray-200">
          {children}
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="w-full mx-auto">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          isOpen={index === openIndex}
          onClick={() => handleToggle(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

const Acordion = ({ items, title }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">{title}</h1>
      <Accordion items={items} />
    </div>
  );
};

export default Acordion;
