var canConstruct = function(ransomNote, magazine) {
    if (magazine.length < ransomNote.length) return false;

    let map = new Map();

    let i = 0;

    while (i < magazine.length) {
        let value = map.get(magazine[i]) ?? 0;
        map.set(magazine[i], value + 1);

        i++;
    }

    let j = 0;

    while (j < ransomNote.length) {
        if (map.has(ransomNote[j])) {
            let value = map.get(ransomNote[j]) ?? 0;
            if (value == 0) {
                return false;
            }
            map.set(ransomNote[j], value - 1);
        } else {
            return false;
        }

        j++;
    }

    return true;
};

var result=canConstruct("baa","aab");
console.log(result);
