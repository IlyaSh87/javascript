const a =+ prompt('введите первое число');
const b =+ prompt('введите второе число');
const oper = prompt('введите знак операции') 


function mathOperation(a, b, oper) {
 switch(oper) {
        case "+" :
            return 'сумма =' + (a + b); 
            break;
        case "-" : 
            return 'разность ='+ (a - b);
            break;
        case "/" :
            return 'деление='+ (a / b);
            break;
        case "*" : 
            return 'умножение ='+ (a * b);
            break;
        default:
            return 'введите оператор еще раз'
            break

           
    }
    
}

  let result = mathOperation(a, b, oper);
  alert(result);