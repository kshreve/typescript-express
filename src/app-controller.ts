import { Request, Response } from 'express'

export default class AppController {
  constructor(private request: Request, private response: Response) {
    this.request = request;
    this.response = response;
  }

  async index (): Promise<string> {
    return 'Hello world'
  }
}
