import HttpClient from "../HttpClient";

export interface IGroups {
  id: 1;
  name: string;
  imageUrl: string;
}

export interface IMessages {
  id: number;
  createdAt: string;
  updatedAt: string;
  text: string;
  senderId: number;
  receiverId: null;
  groupId: number;
  isMine?: boolean;
  sender: {
    name: string;
    imageUrl: string;

  };
}

class ChatService {
  httpClient;
  path: string;
  constructor() {
    this.httpClient = new HttpClient();
    this.path = "/chat";
  }

  async getGroups() {
    return await this.httpClient.getWithAuth<Promise<IGroups[]>>(
      `${this.path}/groups`
    );
  }

  async getGroupMessages(id: number) {
    return await this.httpClient.getWithAuth<Promise<IMessages[]>>(
      `${this.path}/groups/messages/${id}`
    );
  }

  async creatMessage(
    message: {
      text: string;
    },
    receiverId: number
  ) {
    return await this.httpClient.post<Promise<IGroups[]>>(
      `${this.path}/message/${receiverId}`,
      message
    );
  }
}
export default new ChatService();
