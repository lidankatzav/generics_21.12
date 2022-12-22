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

class PalindromeProperty implements Property<string | number> {

    isProperty(element: string | number): boolean {

        if(typeof element === 'string') {
            return element == element.split('').reverse().join('');
        }

        if(typeof element === 'number') {
            let reverse = 0;
            let temp = element;
            while (temp != 0) {
                reverse = (reverse * 10) + (temp % 10);
                temp = Math.floor(temp / 10);
            }
            return reverse == element; 
        }

    }
}

class Person {

    public name: string;
    public id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

}

class PersonPalindromeProperty implements Property<Person> {

    isProperty(element: Person): boolean {
        const palindromeProp = new PalindromeProperty();
        return palindromeProp.isProperty(element.id);
    }
    
}

console.log(countElementsByProperty([1,2,3,4,5], new OddProperty));
console.log(countElementsByProperty([1,2,3,4,5], new PrimeProperty));
console.log(countElementsByProperty(['kayak', 'hello', 'madam', 'sing', 'redder', 'racecar'], new PalindromeProperty));
console.log(countElementsByProperty([new Person('Lidan', 12321), new Person('Or', 1451), new Person('Lior', 5)], new PersonPalindromeProperty));

// Expected output -->
//      3-3-4-2

