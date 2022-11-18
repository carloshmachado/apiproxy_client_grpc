import app from './app'
import config from './config'

app.listen(config.API_PORT, '0.0.0.0')
console.log(`listening on port ${config.API_PORT}`)

async function shutDown() {
    console.log('Sinal de shutdown recebido, iniciando processo de desligamento')
    console.log('Finalizado aplicação')
    process.exit(0)
}

process.on('SIGTERM', shutDown)
process.on('SIGINT', shutDown)

process.on('uncaughtException', async (err) => {
    console.log('erro: ' + err)
    if (err.message != 'SSL connection has been closed unexpectedly\n') {
        await shutDown()
    }
})

process.on('unhandledRejection', async (reason, p) => {
    console.log(reason, 'Unhandled Rejection at Promise', p);
    await shutDown()
})

process.on('beforeExit', (code) => {
    console.log('Process beforeExit event with code: ', code);
});

process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
});