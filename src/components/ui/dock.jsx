"use client";

import React, { useState, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Package, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

// Context for sharing state between parent and children
const FloatingDropDownContext = createContext({
  isOpen: false,
  toggleMenu: () => { },
});

const useFloatingDropDown = () => {
  const context = useContext(FloatingDropDownContext);
  if (!context) {
    throw new Error(
      "FloatingDropDownButton must be used within FloatingDropDown",
    );
  }
  return context;
};

const FloatingDropDown = ({ children, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FloatingDropDownContext.Provider value={{ isOpen, toggleMenu }}>
      <div className={cn("relative", className)}>
        <Button
          onClick={toggleMenu}
          variant={isOpen ? "outline" : "ghost"}
          className="h-10 w-10 rounded-md"
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            {isOpen ? <Plus className="h-6 w-6" /> : <Package className="h-6 w-6" />}
          </motion.div>
        </Button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10, y: 10, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: 10, y: 10, filter: "blur(10px)" }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.1,
              }}
              className="absolute bottom-10 right-0 mb-2"
            >
              <div className="flex flex-col items-end gap-2">
                {React.Children.map(children, (child, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                    }}
                  >
                    {child}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FloatingDropDownContext.Provider>
  );
};

const FloatingDropDownButton = ({ children, className, onClick, icon }) => {
  const { toggleMenu } = useFloatingDropDown();

  const handleClick = () => {
    toggleMenu(); // Close the menu after clicking a button
    onClick();
  };

  return (
    <Button
      onClick={handleClick}
      size="sm"
      variant="outline"
      className={cn("flex items-center gap-2 hover:bg-accent hover:text-accent-foreground", className)}
    >
      {icon}
      <span>{children}</span>
    </Button>
  );
};

export { FloatingDropDown, FloatingDropDownButton };
