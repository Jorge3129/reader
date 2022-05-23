
import nodemailer, {Transporter} from 'nodemailer'

class MailService {
    transporter: Transporter

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || "",
            port: 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                //pass: process.env.SMTP_PASSWORD
            }
        })
    }

    async sendActivationMail(to: string, link: string) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Activation ' + process.env.API_URL,
            text: '',
            html:
                `
                    <div>
                        <h1>Click link to activate</h1>
                        <a href="${link}">${link}</a>
                    </div>
                `
        })
    }
}

export default new MailService();