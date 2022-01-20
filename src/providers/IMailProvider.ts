export type AddressMessage = {
  name: string;
  email: string;
};

export type Message = {
  to: AddressMessage;
  from: AddressMessage;
  subject: string;
  body: string;
};

export interface IMailProvider {
  sendMail(message: Message): Promise<void>;
}
