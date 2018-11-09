function compress(string) {
    let array = string.split('');
    return array.slice(1)
                .reduce((acc, curr) => {
                   let n = acc.length - 1;
                   acc[n][0] == curr ?
                       ++acc[n][1] : acc.push([curr, 1]);
                   return acc;
                }, [[array[0], 1]])
                .reduce((acc, curr) => {
                   return curr[1] == 1 ? acc + curr[0] : acc + curr[0] + curr[1];
                }, '');
}

function decompress(string) {
    let array = string.split('');
    return array.slice(1)
                .reduce((acc, curr) => {
                    let n = acc.length - 1;
                    !isNaN(parseInt(curr)) ?
                        acc[n][1] += curr : acc.push([curr, ''])
                    return acc;
                }, [[array[0], '']])
                .reduce((acc, curr) => {
                    (curr[1] == '') ?
                        acc += curr[0] : acc += curr[0].repeat(curr[1]);
                    return acc;
                }, '');
}

module.exports = {
    compression: compress,
    decompression: decompress
};