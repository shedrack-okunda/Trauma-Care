interface ISymptomCheck extends Document {
  userId: string;
  answers: string[];
  riskLevel: "low" | "medium" | "high";
  createdAt: Date;
}
