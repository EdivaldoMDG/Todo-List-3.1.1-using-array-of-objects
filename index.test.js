

const Lists = require('./importfunc');
let tests = new Lists([]);

beforeEach(() => {
 tests = new Lists([]);
});

test("Test first fetch Item", () => {
  const expected = {};

  const result = tests.fetchItems();

  expect(result).toStrictEqual(expected);
});

test("Test fetch after adding one item with same key and value with diferent orders",()=>{
  const expected = {id1:{id:"id1",player:"One"}};
  tests.addItem({player:"One",id:"id1"});
  const result = tests.fetchItems();
  expect(result).toStrictEqual(expected);
});

test("Test fetch after adding one item",()=>{
  const expected = { id2:{id:"id2",player:"Two"}}
  tests.addItem({id:"id2" ,player:"Two"});
  const result = tests.fetchItems();
  expect(result).toStrictEqual(expected);
});

test("Test fetch after adding two item",()=>{
  const expected = {id3:{id:"id3",name:"Daniel",job:"Viado"},
                     id4:{id:"id4",name:"Edivaldo",job:"Professional footballer"}
  }
  tests.addItem({id:"id3",name:"Daniel",job:"Viado"});
  tests.addItem({id:"id4",name:"Edivaldo",job:"Professional footballer"});
  const result = tests.fetchItems();
  expect(result).toStrictEqual(expected);
});

test("Test fetch after removing one item", () => {
  const expected = {};
  tests.addItem({ id: "id1", player: "One" });
  tests.removeItem("id1");
  const result = tests.fetchItems();
  expect(expected).toStrictEqual(result);
});

test("Test fetch after updating one item", () => {
  const expected = { id1: { id: "id1", player: "Two" } };
  tests.addItem({ id: "id1", player: "One" });
  tests.updatedItem("id1", { player: "Two" });
  const result = tests.fetchItems();
  expect(result).toStrictEqual(expected);
});

test("Test fetch after updating one item with diferent order", () => {
  const expected = { id1: { player: "Two",id: "id1" } };
  tests.addItem({ id: "id1", player: "One" });
  tests.updatedItem("id1", { player: "Two" });
  const result = tests.fetchItems();
  expect(result).toStrictEqual(expected);
});

test("Test fetch after adding two item with diferent order",()=>{
  const expected = {id3:{id:"id3",job:"Viado",name:"Daniel"},
                     id4:{id:"id4",job:"Professional footballer",name:"Edivaldo"}
  }
  tests.addItem({id:"id3",name:"Daniel",job:"Viado"});
  tests.addItem({id:"id4",name:"Edivaldo",job:"Professional footballer"});
  const result = tests.fetchItems();
  expect(result).toStrictEqual(expected);
});


/* 


test("Test fetch after adding two items", () => {
  const expected = {
    id2: { id: "id2", name: "Steven Jhonny" },
    id3: { id: "id3", name: "Kidiantoliny" },
  };
  tests.addItem({ id: "id2", name: "Steven Jhonny" });
  tests.addItem({ id: "id3", name: "Kidiantoliny" });
  const result = tests.fetchItems();

  expect(result).toStrictEqual(expected);
});





test("Test fetch after adding two item with the same id", () => {
  const expected = { id2: { id: "id2", name: "daniel" } };
  tests.addItem({ id: "id2", player: "Two" });
  tests.addItem({ id: "id2", name: "daniel" });
  const result = tests.fetchItems();
  expect(result).toStrictEqual(expected);
});

test("Test fetch after removing one item from an empty list", () => {
  const expected = {};
  tests.addItem({ id: "id1", player: "two" });
  tests.removeItem("id1");
  const result = tests.fetchItems();
  expect(result).toStrictEqual(expected);
}); */


/*
function firstFetchItem() {
  const expected = {};

  const result = fetchItems();

  test("Testing firts fetch", () => {
    expect(expected).toStrictEqual(result);
  });
}
firstFetchItem();

function testFetchAfterAddOneItem() {
  const expected = { id: "id3", name: "Capitan America", job: "superHero" };
  addItem(expected);
  const result = fetchItems();

  test("Testing adding one item", () => {
    expect({ [expected.id]: expected }).toStrictEqual(result);
  });
}

testFetchAfterAddOneItem();

function testFetchAfterAddTwoItems() {
  clearList();
  const expected = {
    id4: {
      id: "id4",
      name: "Spider-man",
      job: "Pro footballer",
    },
    id5: {
      id: "id5",
      sport: "Football",
    },
  };

  addItem({
    id: "id4",
    name: "Spider-man",
    job: "Pro footballer",
  });

  addItem({
    id: "id5",
    sport: "Football",
  });

  const result = fetchItems();

  test("Test fetch after adding two items", () => {
    expect(expected).toStrictEqual(result);
  });
}

testFetchAfterAddTwoItems();

function testFetchAfterRemovingOneItem() {
  const expected = {
    id5: {
      id: "id5",
      sport: "Football",
    },
  };
  removeItem("id4");
  const result = fetchItems();

  test("Test fetch after removing one item", () => {
    expect(expected).toStrictEqual(result);
  });
}
testFetchAfterRemovingOneItem();

import * as assert from "assert";

function testInitialFetch() {
  //testing if returns object

  // prepare
  const expected = {};

  // act
  const result = fetchItems();

  // assert
  assert.deepEqual(expected, result);
}

//Test after one add
function testFetchAfterAddOneItem() {
  // prepare
  const expected = {
    id3: { id: "id3", name: "Capitan America", job: "superHero" },
  };

  // act
  addItem({ id: "id3", name: "Capitan America", job: "superHero" });
  const result = fetchItems();
  // assert
  assert.deepEqual(expected, result);
}

//test after two adds
function testFetchAfterAddTwoItems() {
  clearList();
  // prepare
  const expected = {
    id4: {
      id: "id4",
      name: "Spider-man",
      job: "Pro footballer",
    },
    id5: {
      id: "id5",
      sport: "Football",
    },
  };
  addItem({ id: "id4", name: "Spider-man", job: "Pro footballer" });
  addItem({ id: "id5", sport: "Football" });

  // act
  const result = fetchItems();

  // assert
  assert.deepEqual(expected, result);
}

//test after one remove
function testRemoveOneItem() {
  //prepare
  const expected = { id5: { id: "id5", sport: "Football" } };
  //act
  removeItem("id4");
  const result = fetchItems();
  //assert
  assert.deepEqual(expected, result);
}

function testUpdate() {
  //prepare
  const expected = { id5: { id: "id5", sport: "Basketball" } };
  //act
  updateItem("id5", { sport: "Basketball" });
  const result = fetchItems();
  //assert
  assert.deepEqual(expected, result);
}

testFetchAfterAddOneItem();
clearList();
testFetchAfterAddTwoItems();
testRemoveOneItem();
testUpdate();
*/
