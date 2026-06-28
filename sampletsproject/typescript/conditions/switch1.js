var char = 'Z';
switch (char) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        console.log(char + " is a Vowel");
        break;
    default:
        console.log(char + " is a Consonant");
        break;
}
