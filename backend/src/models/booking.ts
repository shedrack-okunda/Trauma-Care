interface IBooking extends Document {
  userId: string;
  mentorId: string;
  date: Date;
  status: "pending" | "confirmed" | "cancelled";
}
