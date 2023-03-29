interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}
interface TeacherInterface {

    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}
class Director implements DirectorInterface {
    workFromHome() {
        return 'Working from home';
    }
    getCoffeeBreak() {
        return 'Getting a coffee break';
    }
    workDirectorTasks() {
        return 'Getting to director tasks';
    }
}
class Teacher implements TeacherInterface {
    workFromHome() {
        return 'Cannot work from home';
    }
    getCoffeeBreak() {
        return 'Cannot have a break';
    }
    workTeacherTasks() {
        return 'Getting to work';
    }
}
const createEmployee = (s: string | number): Teacher | Director => {
   if (typeof s === 'number' && s < 500) {
       return new Teacher();
   }
    return new Director();
}
const isDirector = (employee: Teacher | Director): employee is Director => {
    return employee instanceof Director;
}
const executeWork = (employee: Teacher | Director): string => {

    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    return employee.workTeacherTasks();
}
type Subjects = 'Math' | 'History';
const teachClass = (todayClass: Subjects): string => {
   if (todayClass === 'Math') {
        return 'Teaching Math';
    }
    return 'Teaching History';
}
