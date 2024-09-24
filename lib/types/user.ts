export type UserRole = "CLIENT" | "RIDER";

export interface User {
  id: string;
  name: string;
  role: UserRole;
}
