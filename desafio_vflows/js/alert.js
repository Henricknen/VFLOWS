document.addEventListener('DOMContentLoaded', function() {
    // Selecione o formulário pelo ID
    const fornecedorForm = document.getElementById('fornecedor-form');
  
    // Adicione um ouvinte de evento para o envio do formulário
    fornecedorForm.addEventListener('submit', async function(event) {
      const razaoSocial = document.getElementById('razao-social').value;
      const nomeFantasia = document.getElementById('nome-fantasia').value;
      const cnpj = document.getElementById('cnpj').value;
      const pessoaContato = document.getElementById('pessoa-contato').value;
      const telefone = document.getElementById('telefone').value;
      const email = document.getElementById('email').value;
  
      if (!razaoSocial || !nomeFantasia || !cnpj || !pessoaContato || !telefone || !email) {
        alert('Preencha todos os campos obrigatórios.');
      } else {
        const respostaServidor = await simularRequisicaoServidor();
  
        if (respostaServidor.fornecedorSalvo) {
          alert('Fornecedor salvo com sucesso');
        } else {
          alert('Falha ao salvar o fornecedor');
        }
      }
    });
  });
  
  function simularRequisicaoServidor() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ fornecedorSalvo: true });
      }, 2000);
    });
  }
  