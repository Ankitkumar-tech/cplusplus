const fs = require("fs");
const path = require("path");

// Ensure directories exist or create them
const ensureDirectoryExists = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
};

// Paths for input and output folders
const inputFolder = path.join(__dirname, "input_files");
const outputFolder = path.join(__dirname, "output_files");

ensureDirectoryExists(inputFolder);
ensureDirectoryExists(outputFolder);

const readNewFile = (fileIn, fileOut) => {
    let value = fs.readFileSync(fileIn, "utf8");
    writeNewFile(fileOut, code(value));
};

const writeNewFile = (file, data) => {
    fs.writeFileSync(file, String(data), (err) => {
        if (err) {
            console.log(err);
        }
    });
};

const testCaseGenerator = () => {
    // Generate 10 test cases with increasing sizes
    let lengthsArr = [10, 20, 50, 100, 200, 500, 1000, 5000, 10000, 20000];
    for (let i = 0; i < 10; i++) {
        let N = lengthsArr[i];
        let k = Math.floor(Math.random() * N) + 1; // Random k within the range [1, N]
        let A = generateUniqueRandomArray(N, 1, 1e6); // Array with unique random integers in the range [1, 1e6]

        let inp = `${N}\n${A.join(" ")}\n${k}`;
        let inputFilePath = path.join(inputFolder, `${i + 1}.in`);
        let outputFilePath = path.join(outputFolder, `${i + 1}.out`);

        writeNewFile(inputFilePath, String(inp));
        readNewFile(inputFilePath, outputFilePath);
    }
};

const code = (input) => {
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].split(" ").map(Number);
    let k = +input[2];

    // Find the kth smallest element without using sort
    let minHeap = buildMinHeap(arr);
    let result;
    for (let i = 0; i < k; i++) {
        result = extractMin(minHeap);
    }
    return result;
};

// Min Heap helper functions
const buildMinHeap = (arr) => {
    let heap = [...arr];
    for (let i = Math.floor(heap.length / 2) - 1; i >= 0; i--) {
        heapify(heap, i);
    }
    return heap;
};

const heapify = (heap, i) => {
    let smallest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < heap.length && heap[left] < heap[smallest]) {
        smallest = left;
    }
    if (right < heap.length && heap[right] < heap[smallest]) {
        smallest = right;
    }
    if (smallest !== i) {
        [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
        heapify(heap, smallest);
    }
};

const extractMin = (heap) => {
    if (heap.length === 0) return null;
    let min = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    heapify(heap, 0);
    return min;
};

// Function to generate a unique random array
const generateUniqueRandomArray = (length, min, max) => {
    let set = new Set();
    while (set.size < length) {
        set.add(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return Array.from(set);
};

testCaseGenerator();
