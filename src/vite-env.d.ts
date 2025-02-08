/// <reference types="vite/client" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare module 'react-calendar' {
  import { ComponentType } from 'react';
  const Calendar: ComponentType<any>;
  export default Calendar;
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
} 