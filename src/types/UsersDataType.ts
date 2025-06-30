export interface UsersDataType {
  /** Row id */
  id: number;
  /** Admin name */
  name: string;
  /** Admin type */
  type: string;
  /** Date created */
  date: string;
  /** Admin status */
  status: string;
  /** Admin users */
  users: string[];
  /** Total admin users */
  totalUser?: number;
}
