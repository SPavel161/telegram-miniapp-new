declare module '@twa-dev/sdk' {
  export class WebApp {
    static init(): void;
    static ready(): void;
    static expand(): void;
    static close(): void;
    static MainButton: {
      text: string;
      color: string;
      textColor: string;
      isVisible: boolean;
      isActive: boolean;
      isProgressVisible: boolean;
      setText(text: string): void;
      onClick(callback: () => void): void;
      offClick(callback: () => void): void;
      show(): void;
      hide(): void;
      enable(): void;
      disable(): void;
      showProgress(leaveActive: boolean): void;
      hideProgress(): void;
    };
    static BackButton: {
      isVisible: boolean;
      onClick(callback: () => void): void;
      offClick(callback: () => void): void;
      show(): void;
      hide(): void;
    };
    static initData: string;
    static initDataUnsafe: {
      query_id: string;
      user: {
        id: number;
        first_name: string;
        last_name?: string;
        username?: string;
        language_code?: string;
        start_param?: string;
      };
      auth_date: number;
      hash: string;
    };
    static platform: string;
    static version: string;
    static colorScheme: string;
    static themeParams: {
      bg_color?: string;
      text_color?: string;
      hint_color?: string;
      link_color?: string;
      button_color?: string;
      button_text_color?: string;
      secondary_bg_color?: string;
    };
    static isExpanded: boolean;
    static viewportHeight: number;
    static viewportStableHeight: number;
    static headerColor: string;
    static backgroundColor: string;
    static isClosingConfirmationEnabled: boolean;
    static onEvent(eventType: string, eventHandler: (event: any) => void): void;
    static offEvent(eventType: string, eventHandler: (event: any) => void): void;
    static sendData(data: any): void;
    static showPopup(params: {
      title?: string;
      message: string;
      buttons?: Array<{
        id: string;
        type?: 'default' | 'ok' | 'close' | 'cancel' | 'destructive';
        text: string;
      }>;
    }, callback?: (buttonId: string) => void): void;
    static showAlert(message: string, callback?: () => void): void;
    static showConfirm(message: string, callback?: (confirmed: boolean) => void): void;
    static enableClosingConfirmation(): void;
    static disableClosingConfirmation(): void;
  }
} 