/// <reference types="react" />
/// <reference types="react-dom" />
/// <reference types="vite/client" />

declare module 'react' {
  export = React;
}

declare module 'react-dom' {
  export = ReactDOM;
}

declare module 'react-calendar' {
  import { ComponentType } from 'react';
  const Calendar: ComponentType<any>;
  export default Calendar;
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module 'vite' {
  export interface UserConfig {
    plugins?: any[];
    resolve?: {
      alias?: Record<string, string>;
    };
    optimizeDeps?: {
      include?: string[];
    };
  }

  export function defineConfig(config: UserConfig): UserConfig;
} 