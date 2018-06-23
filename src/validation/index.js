// this is to override vee validate messages
import { capitalizeEachWord } from '../utils/functions';

const dictionary = {
  en: {
    messages: {
      required: (fieldName) => `${capitalizeEachWord(fieldName)} is required`
    }
  }
};

export default dictionary;
