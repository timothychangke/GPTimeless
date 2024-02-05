export default function wordByWord(string, setValue) {
    let strArr = string.split('');
    let outputStr = '';
    let i = 0;
    var interval = setInterval(() => {
        outputStr = outputStr + strArr[i];
        i += 1;
        setValue(outputStr);
        if (i >= strArr.length) {
            clearInterval(interval);
        }
    }, 205);
}
