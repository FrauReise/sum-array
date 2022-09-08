let numbers = [];

let sumInput = () => {

    for (;;) {
        let count = prompt ('Пожалуйста,введите число', '');

        if (!count || isNaN(count)) 
            break;
    
        numbers.push(count);
    }
        
    function compareNumbers(a, b) {
        return a - b;
    }
    numbers.sort(compareNumbers);

    let sum = 0;
    for(let number of numbers) {
        sum += +number;
    }
    alert(`Отсортированные числа: ${numbers}\nСумма элементов: ${sum}`);
}