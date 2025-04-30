interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role: 'user' | 'admin' | 'mentor';
    emergencyContact?: string
}