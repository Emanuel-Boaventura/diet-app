export const dateMask = (text: string) => {
  const date = text.replace(/\D/g, '');

  return date
    .replace(/^(\d{2})(\d)/g, '$1/$2')
    .replace(/^(\d{2})\/(\d{2})(\d)/g, '$1/$2/$3')
    .replace(/^(\d{2})\/(\d{2})\/(\d{4}).*/g, '$1/$2/$3');
}



export const timeMask = (text: string) => {
  const time = text.replace(/\D/g, '');

  return time
    .replace(/^(\d{2})(\d)/g, '$1:$2')
    .replace(/(\d{2})(\d)/g, '$1:$2')
    .slice(0, 5);
};
