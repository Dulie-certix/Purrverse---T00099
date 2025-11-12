export const shadows = {
  soft: '0px 0px 43.22px 0px #FFEDDF',
  medium: '0px 0px 74.1px 0px #FFEDDF',
  strong: '0px 0px 129.67px 0px #FFEDDF'
};

export const getShadow = (type: 'soft' | 'medium' | 'strong') => {
  return shadows[type];
};