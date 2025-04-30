interface IMoodEntry extends Document {
  userId: string;
  mood: "happy" | "neutral" | "sad" | "anxious";
  createdAt: Date;
}
