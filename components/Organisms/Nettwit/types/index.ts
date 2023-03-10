export interface INettwit {
  userName?: string;
  avatar?: string;
  content?: string;
  createdAt?: ICreatedAt;
  id?: number;
  img?: string | null;
}

interface ICreatedAt {
  _nanoseconds: number;
  _seconds: number;
}
