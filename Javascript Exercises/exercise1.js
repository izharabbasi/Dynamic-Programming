//Excercise No 1

const getFileExtention = (str) => {
    return str.slice(str.lastIndexOf('.'));
}

console.log(getFileExtention("hello.html"));