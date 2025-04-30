interface IReminder extends Document {
  userId: string;
  medication: string;
  dosage: string;
  time: string;
  frequency: string;
}
