class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// create node
const TEN = new Node(10);
const ZERO = new Node(0);
const TWELVE = new Node(12);
const NEGATIVEONE = new Node(-1);
const FOUR = new Node(4);
const FIFTEEN = new Node(15);
const ELEVEN = new Node(11);
const TWENTY = new Node(20);
const SEVENTEEN = new Node(17);
const NINETYNINE = new Node(99);

// const ONE = new Node(1);

// create hierarchy
TEN.left = ZERO;
TEN.right = TWELVE;
ZERO.left = NEGATIVEONE;
ZERO.right = FOUR;
NEGATIVEONE.right = FIFTEEN;
TWELVE.left = ELEVEN;
TWELVE.right = TWENTY;
TWENTY.left = SEVENTEEN;
TWENTY.right = NINETYNINE;
// TWENTY.right = ONE;

const validateBST = (node, min = null, max = null) => {
  if (max !== null && node.data > max) return false;

  if (min !== null && node.data < min) return false;

  // going to left
  if (node.left && !validatedBST(node.left, min, node.data)) return false;

  // going to right
  if (node.right && !validateBST(node.right, node.data, max)) return false;

  // if everything lines we've a valid BST
  return true;
};

console.log(validateBST(10));
