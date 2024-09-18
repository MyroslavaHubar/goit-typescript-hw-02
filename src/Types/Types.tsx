export interface Image {
  id: string;
  description: string;
  urls: {
    small: string;
    regular: string;
  };
}

export interface SearchImage {
  results: Image[];
  total: number;
  total_page: number;
}
