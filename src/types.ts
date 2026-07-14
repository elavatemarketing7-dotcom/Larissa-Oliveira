export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    value: string;
  }[];
}

export interface QuizAnswers {
  [questionId: number]: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title?: string;
  category: 'sorrisos' | 'harmonizacao' | 'bastidores';
}
