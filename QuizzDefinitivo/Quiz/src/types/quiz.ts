export interface QuizQuestion {
  id: string;
  block: number;
  blockName: string;
  question: string;
  type: "scale" | "multiple" | "yesno";
  options?: string[];
  maxScore: number;
}

export interface QuizAnswer {
  questionId: string;
  value: number;
  answer: string | number;
}

export interface QuizResult {
  totalScore: number;
  maxScore: number;
  percentage: number;
  level: QuizLevel;
  blockScores: BlockScore[];
  recommendations: string[];
  verdict: "accepted" | "not-ready";
}

export interface BlockScore {
  blockNumber: number;
  blockName: string;
  score: number;
  maxScore: number;
  percentage: number;
}

export interface QuizLevel {
  name: string;
  range: [number, number];
  badge: string;
  color: string;
  description: string;
}

export interface UserData {
  name: string;
  email: string;
  startupName: string;
}