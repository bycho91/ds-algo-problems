// Given an integer, return an integer with the digits
// reversed.
// --- Examples
//   reverseInt(13) === 31
//   reverseInt(404) === 404
//   reverseInt(100) === 1
//   reverseInt(-13) === -31
//   reverseInt(-100) === -1

function reverseInt(n) {
  let newN = n.toString().replace("-", "");
  let rev = "";

  for (let i = newN.length - 1; i >= 0; i--) {
    rev = rev + newN[i];
  }

  if (n < 0) {
    return parseInt(rev) * -1;
  }
  return parseInt(rev);
}

console.log(reverseInt(-30));

// function reverseInt(n) {
//   let stringN = n.toString().split("");
//   let reversed = "";

//   for (let i = 0; i <= stringN.length - 1; i++) {
//     if (stringN[i] === "-") continue;

//     reversed = stringN[i] + reversed;
//   }

//   if (n < 0) {
//     return parseInt(reversed) * -1;
//   }
//   return parseInt(reversed);
// }

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup("bdd");
const { assert } = chai;

describe("Integer Reversal", () => {
  it("reverseInt() works on positive numbers", () => {
    assert.equal(reverseInt(3), 3);
    assert.equal(reverseInt(13), 31);
    assert.equal(reverseInt(100), 1);
    assert.equal(reverseInt(1408), 8041);
  });

  it("reverseInt() works on negative numbers numbers", () => {
    assert.equal(reverseInt(-3), -3);
    assert.equal(reverseInt(-13), -31);
    assert.equal(reverseInt(-100), -1);
    assert.equal(reverseInt(-1408), -8041);
  });
});

mocha.run();
