const CONTRACT_ADDRESS = '0xa2A833c6445989D416E6EDA3c975799f2d4bF2d6';

/*
 * Add this method and make sure to export it on the bottom!
 */
const transformCharacterData = (characterData) => {
    return {
      name: characterData.name,
      imageURI: characterData.imageURI,
      hp: characterData.hp.toNumber(),
      maxHp: characterData.maxHp.toNumber(),
      attackDamage: characterData.attackDamage.toNumber(),
    };
  };
  
  export { CONTRACT_ADDRESS, transformCharacterData };