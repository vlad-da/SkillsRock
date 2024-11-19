function isPalindrome(str) {
    //Левая часть: прирвнимаем к нижнему регистру, удаляем пробелы, разделяем на символы, переворачиваем, соединяем
    //Правая часть: прирвнимаем к нижнему регистру, удаляем пробелы
    
    //лог оставил для проверки
    // console.log(str.toLowerCase().replace(/ /g,'').split('').reverse().join('') === str.toLowerCase().replace(/ /g,''));
    
    return str.toLowerCase().replace(/ /g,'').split('').reverse().join('') === str.toLowerCase().replace(/ /g,'');
}

isPalindrome("А роза упала на лапу Азора"); // true
isPalindrome("Привет"); // false