export function generateStars(rating: number): string {
  const totalEstrelas = 5;
  const estrelasCheias = Math.floor(rating);
  const meiaEstrela = (rating % 1 >= 0.3 && rating % 1 <= 0.7) ? 1 : 0;
  const estrelasVazias = totalEstrelas - estrelasCheias - meiaEstrela;

  return '★'.repeat(estrelasCheias) + (meiaEstrela ? '⯨' : '') + '☆'.repeat(estrelasVazias);
}