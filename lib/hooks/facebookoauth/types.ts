export interface FacebookPage {
  page_id: string;
  page_name?: string;
  page_access_token?: string;
}

export interface FacebookPagesResponse {
  success: boolean;
  message: string;
  user_id: string;
  pages: FacebookPage[] | FacebookPage | null;
  count: number;
}

export interface FacebookOAuthState {
  loading: boolean;
  error: string | null;
  connected: boolean;
  isPopupOpen: boolean;
}

export interface FacebookTokenResponse {
  success: boolean;
  message: string;
  data?: {
    token: string;
    expires_at?: string;
  };
}

