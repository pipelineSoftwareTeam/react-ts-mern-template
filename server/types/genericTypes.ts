import { JwtPayload } from 'jsonwebtoken';

export type StringArray = string[];

export interface IDecode extends JwtPayload {
	id: string;
}
