module.exports = function getFlagValue(nameFlag){
    const index = process.argv.indexOf(nameFlag) + 1;
    return process.argv[index];
}