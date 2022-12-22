interface Property<T> { 
    isProperty(element: T): boolean;
}

function countElementsByProperty<T>(array: T[], prop: Property<T>): number {
    const arrAfterFilter = array.filter((value) => 
        prop.isProperty(value));
    return arrAfterFilter.length;
}

class OddProperty implements Property<number> {
    isProperty(element: number): boolean {
        return element % 2 !== 0;
    }
}
class PrimeProperty implements Property<number> {
    isProperty(element: number): boolean {
       for(let i = 2, s = Math.sqrt(element); i <= s; i++) {
        if(element % i === 0) return false; 
       }     
       return element > 1;
    } 
}

class PalindromesProperty implements Property<string | number> {
    isProperty(element: string | number): boolean {
        return String(element) == String(element).split('').reverse().join('');
    }
}


console.log(countElementsByProperty([1,2,3,4,5], new OddProperty));
console.log(countElementsByProperty([1,2,3,4,5], new PrimeProperty));
console.log(countElementsByProperty(['kayak', 'hello', 'madam', 'sing', 'redder', 'racecar'], new PalindromesProperty));