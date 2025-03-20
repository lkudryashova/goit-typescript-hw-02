export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string | null;
  user?: {
    name: string;
    profile_image?: {
      small: string;
      medium: string;
      large: string;
    };
    portfolio_url?: string;
  };
}
