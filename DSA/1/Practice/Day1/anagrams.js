let str1 = "listen";
let str2 = "silent";

const isAnagrams = (str1, str2) => {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    if (str1.length === 0 || str2.length === 0) {
        console.log("Enter valid strings");
        return false;
    } else {
        const finalstr1 = str1.split('').sort().join('');
        const finalstr2 = str2.split('').sort().join('');

        if (finalstr1 === finalstr2) {
            console.log("Strings are Anagrams");
            return true;
        } else {
            console.log("Strings are NOT Anagrams");
            return false;
        }
    }
}

isAnagrams(str1, str2);
