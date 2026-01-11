import { Injectable } from '@nestjs/common';

@Injectable()
export class MailgunService {
  sendEmail(to: string, subject: string, body: string): string {
    // Logic to send email using Mailgun API
    return `Email sent to ${to} with subject "${subject}"`;
  }
}
