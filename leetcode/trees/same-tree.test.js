const { isSameTree, TreeNode } = require("./same-tree");

test("Should compare two trees for equality (structural & node values)", () => {
  const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  const tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  expect(isSameTree(tree1, tree2)).toBe(true);
  const tree3 = new TreeNode(1, new TreeNode(2));
  const tree4 = new TreeNode(1, undefined, new TreeNode(2));
  expect(isSameTree(tree3, tree4)).toBe(false);
  const tree5 = new TreeNode(1);
  const tree6 = new TreeNode(1);
  expect(isSameTree(tree5, tree6)).toBe(true);
  const tree7 = new TreeNode(1, new TreeNode(2), new TreeNode(1));
  const tree8 = new TreeNode(1, new TreeNode(1), new TreeNode(2));
  expect(isSameTree(tree7, tree8)).toBe(false);
  const tree9 = null;
  const tree10 = null;
  expect(isSameTree(tree9, tree10)).toBe(true);
  expect(isSameTree(tree6, tree9)).toBe(false);
  const tree11 = new TreeNode(10, new TreeNode(5), new TreeNode(15));
  const tree12 = new TreeNode(10, new TreeNode(5, undefined, new TreeNode(15)));
  expect(isSameTree(tree11, tree12)).toBe(false);
  const tree13 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  const tree14 = new TreeNode(
    1,
    new TreeNode(2),
    new TreeNode(3, new TreeNode(4), new TreeNode(5))
  );
  expect(isSameTree(tree13, tree14)).toBe(false);
});
