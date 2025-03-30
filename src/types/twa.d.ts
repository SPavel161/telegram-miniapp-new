declare module '@twa-dev/sdk' {
  namespace WebApp {
    function init(): void;
    function ready(): void;
    function expand(): void;
    function close(): void;
    
    const MainButton: {
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

    const BackButton: {
      isVisible: boolean;
      onClick(callback: () => void): void;
      offClick(callback: () => void): void;
      show(): void;
      hide(): void;
    };

    const initData: string;
    const initDataUnsafe: {
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

    const platform: string;
    const version: string;
    const colorScheme: string;
    const themeParams: {
      bg_color?: string;
      text_color?: string;
      hint_color?: string;
      link_color?: string;
      button_color?: string;
      button_text_color?: string;
      secondary_bg_color?: string;
    };

    const isExpanded: boolean;
    const viewportHeight: number;
    const viewportStableHeight: number;
    const headerColor: string;
    const backgroundColor: string;
    const isClosingConfirmationEnabled: boolean;

    function onEvent(eventType: string, eventHandler: (event: any) => void): void;
    function offEvent(eventType: string, eventHandler: (event: any) => void): void;
    function sendData(data: any): void;
    function showPopup(params: {
      title?: string;
      message: string;
      buttons?: Array<{
        id: string;
        type?: 'default' | 'ok' | 'close' | 'cancel' | 'destructive';
        text: string;
      }>;
    }, callback?: (buttonId: string) => void): void;
    function showAlert(message: string, callback?: () => void): void;
    function showConfirm(message: string, callback?: (confirmed: boolean) => void): void;
    function enableClosingConfirmation(): void;
    function disableClosingConfirmation(): void;
  }

  export = WebApp;
} 