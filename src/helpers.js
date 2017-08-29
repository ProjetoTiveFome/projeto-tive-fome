const getContent = (content) => content
  .split('\n')
  .filter(el => el !== '')
  .map((paragrafo, i) => (<p key={i}>{paragrafo.replace(/\s{2,}/g, '')}</p>));

export default getContent;
