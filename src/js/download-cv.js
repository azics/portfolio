const cvLink = document.querySelector('.download-cv');

async function downloadCV() {
  const cvFile = await fetch(
    'https://azics.github.io/portfolio/src/files/CV_Giyasov_Azamat_EN_2024.pdf'
  );
  const cvFileBlob = await cvFile.blob();

  const aElement = document.createElement('a');
  aElement.setAttribute('download', 'CV_Giyasov_Azamat_EN_2024.pdf');
  const href = URL.createObjectURL(cvFileBlob);
  aElement.href = href;
  aElement.click();
  URL.revokeObjectURL(href);
}
cvLink.addEventListener('click', downloadCV);
