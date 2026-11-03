# Meu Banco

Controle financeiro pessoal que roda **sozinho no celular**: sem servidor, sem conta e sem enviar dados para lugar nenhum. Funciona sem internet depois de instalado.

**Abrir o app:** https://joaoxh11.github.io/APP---Claude-IA/

## Instalar no celular

- **iPhone:** abra o link no **Safari** → botão **Compartilhar** → **Adicionar à Tela de Início**
- **Android:** abra o link no **Chrome** → **⋮** → **Instalar app** (ou *Adicionar à tela inicial*)

Depois, abra sempre pelo ícone. Em **Ajustes → Este aparelho** dá para ativar o bloqueio com PIN.

## Privacidade

- Este repositório tem só o **código do app**. Os lançamentos, saldos e metas ficam **apenas no aparelho** de quem usa, no armazenamento do navegador. Nada é enviado ao GitHub nem a nenhum servidor.
- Cada aparelho tem os seus próprios dados, sem sincronização.
- Com o PIN ativado, os dados ficam criptografados no aparelho (AES-256-GCM, com a chave derivada do PIN por PBKDF2).

## Cuidados

- **Faça backup** em *Ajustes → Baixar backup* e guarde no Drive, iCloud ou e-mail. Se o aparelho for perdido, trocado ou formatado, só o backup recupera os dados.
- **Se esquecer o PIN, não há como recuperar os dados.** Só restaurando um backup.
- No iPhone, use pela **Tela de Início**: o Safari pode apagar os dados de sites que ficam 7 dias sem uso.

## O que tem

- **Lançamentos:** despesas, receitas, transferências e compras parceladas.
- **Contas a pagar:** contas fixas com aviso de vencimento.
- **Orçamento** por categoria, com alertas.
- **Metas de economia.**
- **Importar extrato** do banco (OFX ou CSV).
- **Backup** e exportação para planilha.

## Atualizar o app

Os arquivos desta pasta são gerados pelo comando `npm run app` do projeto Meu Banco (pasta `app-celular/`). Para atualizar, substitua os arquivos aqui. Os aparelhos pegam a versão nova na próxima vez que abrirem o app com internet, sem perder os dados.
