import React, { createContext, useState, useContext, ReactNode } from 'react';


type Dish = {
  id: string;
  category: string;
  name: string;
  description: string;
  price: string;
};

type MenuContextType = {
  dishes: Dish[];
  addDish: (dish: Dish) => void;
};


const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [dishes, setDishes] = useState<Dish[]>([]);

  const addDish = (dish: Dish) => {
    setDishes((prevDishes) => [...prevDishes, dish]);
  };

  return (
    <MenuContext.Provider value={{ dishes, addDish }}>
      {children}
    </MenuContext.Provider>
  );
};


export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};
