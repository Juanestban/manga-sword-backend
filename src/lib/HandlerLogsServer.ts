export class HandlerLogsServer {
  HandlerLogsServer(): void {
    console.log('handler logs server')
  }

  getNormalMessage(message: string): void {
    console.log(`[+] ${message}`)
  }

  getErrorMessage(msgError: string): void {
    console.error(`[-] ${msgError}`)
  }
}
