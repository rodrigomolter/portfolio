export function TransferenciaEntreContasFeature() {
  return (
    <pre className="bg-accent-content p-4 lg:p-8 max-w-[80vw] overflow-auto inline-block text-sm">
      <code className="whitespace-pre">
        {`Funcionalidade: Transferência entre contas

  Como um usuário do BugBank,
  Eu quero transferir fundos para outra conta,
  Para que eu possa realizar transações financeiras com facilidade.
  
  Contexto: Usuário na tela de Transferência
    Dado que o usuário está na tela de transferência do BugBank

    Cenário: Transferência com sucesso
    E o saldo da conta do usuário é de "R$ 1.500,00"
    Quando o usuário preencher todos os campos corretamente
    E tentar realizar a transferência
    Então o sistema deve debitar o valor transferido da conta do usuário
    E a mensagem "Transferencia realizada com sucesso" deve ser exibida
    E o sistema deve redirecionar o usuário para a página de extrato`}
      </code>
    </pre>
  )
}
