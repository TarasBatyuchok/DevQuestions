"use client";


import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes";
// Імпортуємо ThemeProvider з бібліотеки next-themes і перейменовуємо його,
// щоб уникнути конфлікту з власним компонентом



import React from "react";
// Імпортуємо React (потрібно для JSX, особливо в старіших конфігураціях)

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  // Створюємо власний компонент-обгортку, який приймає children і всі інші пропси

  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  );
  // Передаємо всі пропси далі в оригінальний ThemeProvider
  // і рендеримо вкладені компоненти (children)
};

export default ThemeProvider;
// Експортуємо компонент за замовчуванням