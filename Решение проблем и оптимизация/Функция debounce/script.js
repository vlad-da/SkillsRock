function debounce(func, delay) {
    let timeoutId; //айдишник для очистки
    return function(...args) {
        // Очищаем таймер, если функция вызвана снова до истечения задержки
        clearTimeout(timeoutId);
        // Устанавливаем новый таймер для отложенного выполнения
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

const debouncedFunction = debounce(() => {
console.log('Вызвана функция с задержкой');
}, 5000);
debouncedFunction();
debouncedFunction(); // Этот вызов должен сбросить таймер и предотвратить мгновенный вызов функции