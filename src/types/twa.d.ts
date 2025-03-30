declare module '@twa-dev/sdk' {
  export const WebApp: {
    init(): void;
    ready(): void;
    expand(): void;
    close(): void;
    
    MainButton: {
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

    BackButton: {
      isVisible: boolean;
      onClick(callback: () => void): void;
      offClick(callback: () => void): void;
      show(): void;
      hide(): void;
    };

    initData: string;
    initDataUnsafe: {
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

    platform: string;
    version: string;
    colorScheme: string;
    themeParams: {
      bg_color?: string;
      text_color?: string;
      hint_color?: string;
      link_color?: string;
      button_color?: string;
      button_text_color?: string;
      secondary_bg_color?: string;
    };

    isExpanded: boolean;
    viewportHeight: number;
    viewportStableHeight: number;
    headerColor: string;
    backgroundColor: string;
    isClosingConfirmationEnabled: boolean;

    onEvent(eventType: string, eventHandler: (event: any) => void): void;
    offEvent(eventType: string, eventHandler: (event: any) => void): void;
    sendData(data: any): void;
    showPopup(params: {
      title?: string;
      message: string;
      buttons?: Array<{
        id: string;
        type?: 'default' | 'ok' | 'close' | 'cancel' | 'destructive';
        text: string;
      }>;
    }, callback?: (buttonId: string) => void): void;
    showAlert(message: string, callback?: () => void): void;
    showConfirm(message: string, callback?: (confirmed: boolean) => void): void;
    enableClosingConfirmation(): void;
    disableClosingConfirmation(): void;
  };
} 