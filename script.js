let inputs = document.querySelectorAll("input");
let previews = document.querySelectorAll("p");
let uploadInput = inputs[0];
let signatureImg = document.querySelector(".signature-img");

// Atualiza o conteúdo do card de assinatura com as informações passadas pelo usuário.
function livePreview(inputValue, inputID) {
  previews.forEach((preview) => {
    // Verifica se o ID do input do usuário é igual ao do preview ou uma substring dele.
    if (preview.id.match(inputID)) {
      // Atualiza cada campo do preview com as informções do usuário em tempo real.
      preview.textContent = inputValue;
    }
  });
}

// Para cada input, é adicionado um EventListener para capturar as informações do usuário.
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    livePreview(input.value, input.id);
  });
});

// Exibe a imagem que o usuário selecionar no input type file.
function showImage() {
  const reader = new FileReader();
  reader.onload = () => {
    let dataURL = reader.result;
    signatureImg.src = dataURL;
  };

  reader.readAsDataURL(uploadInput.files[0]);
}

// Chama a função showImage assim que o usuário seleciona a imeagem.
uploadInput.addEventListener("change", showImage);
