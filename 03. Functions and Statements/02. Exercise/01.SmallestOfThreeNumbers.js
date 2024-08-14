function findSmallestNumber(...args) {
    console.log(args.sort((a, b) => a - b)[0]);
}