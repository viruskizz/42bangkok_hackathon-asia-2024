export type UserRole = 'CLIENT' | 'WALKER' | 'LOADER';

export interface User {
  id: string;
  name: string;
  role: UserRole;
}
