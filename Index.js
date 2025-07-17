// List of 100 unique wallets (subset of original list)
const wallets = [
    "0x8233ff21f16bdd4DfEb3945292d6f77046E7E59f",
    "0x2B36789C1aa44eE2De10014590D9988B11B53dcd",
    "0xC84839229a27b288c94323141A69Ea5b5560de7c",
    "0x8e358111b9D81CE3f30122545cdCfF09f2A28e4A",
    "0x729733577b0318dE4eC1CE03cAe9AC6ee066F463",
    "0xfed0505a73e4ed443d12c13702c864c5042b1878",
    "0xa940695df800f7745ed536c71afbe26f807e8c8d",
    "0xc2816ae084166e698ff30ff9e90d36049e193",
    "0xeF45D7De46321307376eA55611db13B8d2D5177",
    "0x8765593E3bc24c19e2b5c26151BaC6089D353a9",
    "0xC479092bfbd84c24BDf35DF52C7f981f85f7aDf",
    "0x1a9924717aa7d8825450b656e6b448b99832e01",
    "0xeB87db53c6307acf931fef3f4a7e14f23129621",
    "0x2a494c4137Db2371cd9007A40151d49ca3D4C06",
    "0xb092496B0672De2d1c6CB1743B1474F4c1b493",
    "0xb8a655748E1d738b6ce0Ef358bDD2300918565A",
    "0x8418d569Fc9E20596b402b61063a95910031",
    "0x565d62B4b60b23840Bce03E16673F00c8F21A7",
    "0xb0542f3F934a26F8100A98aeF804bE5E0aDEcad",
    "0x4eF8A36a9D7E4cBE699Bc4fe26615FD8744497fb",
    "0xe9b03b9ef6bf4b05ad8c22aead469be12027b",
    "0x2817ae084166e698ff30ff9e90d36049e193",
    "0x3645227aE185A01F441E615aB5aBBC6c17A6A",
    "0x9341260A04cC45894c27beC9FFA1BcaB37327E2",
    "0xb05bb4b320f45a236b7f89424927be7a39dd047",
    "0x9Be1c42d03494BB0C08417E28D402b92FBC8626",
    "0x9b55748E1d738b6ce0Ef358bDD2300918565A",
    "0x5348ef9CD0141E950934Fa40Eb4697aafC97F5d1",
    "0x384e43fff25735b891bd821a5e9ca24fcbaac",
    "0xe6f78dd74361162049ecE35EcAA9EDEDa02bc2",
    "0x20c1A778FEEEA6302Ed47831304951565D4E6",
    "0x37aFb9f9d96AD1EfEe5B35E1c85E17d668753448",
    "0x4a926709F51c97622c19491aa0f2Bb62fD0ocD",
    "0x8b0de39922dfbf1968b36c4ccb00ad3cfa91ab",
    "0xd3a9ca3176c419e6ade84eeade472dd53a081",
    "0x894dFfA76d55b9a2902cf81519e9DAeE66bC29",
    "0x281eD726930aF72FE20ED0A23f45F20c3F511a",
    "0xc46217F7132D78ED5dFda6301713E0a7875fa6A6",
    "0x7594645f06dabca1bc32f51ab1a0fe8f37a4359d",
    "0xB735597e830149C570901e44441292D0736430AA",
    "0x21fba5456cd1f1304642c25293dc58976fdc4059",
    "0xadeleke_nad",
    "0xdf0B7c9b9cEd89821d9D5514Bbf8602e71aB61e9",
    "0x462aF030a04be0e613008F94450Cb6386CB27C85",
    "0x96463e29607f0F400dec7905b375F07Ac7E24cb7",
    "0x668331696e1FBb6C8BFb9Fb4a8e86678A33Bb810",
    "0x4d7855b5bea3761129716db8f7d85fec646b84bc",
    "0x9c9bfa2622e20ad011f246b3d030ac3746ae616a", // Special wallet
    "0x2B36789C1aa44eE2De10014590D9988B11B53dcd",
    "0xC84839229a27b288c94323141A69Ea5b5560de7c",
    "0x8e358111b9D81CE3f30122545cdCfF09f2A28e4A",
    "0x729733577b0318dE4eC1CE03cAe9AC6ee066F463",
    "0xa940695df800f7745ed536c71afbe26f807e8c8d",
    "0xc2816ae084166e698ff30ff9e90d36049e193",
    "0xeF45D7De46321307376eA55611db13B8d2D5177",
    "0x8765593E3bc24c19e2b5c26151BaC6089D353a9",
    "0xC479092bfbd84c24BDf35DF52C7f981f85f7aDf",
    "0x1a9924717aa7d8825450b656e6b448b99832e01",
    "0xeB87db53c6307acf931fef3f4a7e14f23129621",
    "0x2a494c4137Db2371cd9007A40151d49ca3D4C06",
    "0xb092496B0672De2d1c6CB1743B1474F4c1b493",
    "0xb8a655748E1d738b6ce0Ef358bDD2300918565A",
    "0x8418d569Fc9E20596b402b61063a95910031",
    "0x565d62B4b60b23840Bce03E16673F00c8F21A7",
    "0xb0542f3F934a26F8100A98aeF804bE5E0aDEcad",
    "0xe9b03b9ef6bf4b05ad8c22aead469be12027b",
    "0x2817ae084166e698ff30ff9e90d36049e193",
    "0x3645227aE185A01F441E615aB5aBBC6c17A6A",
    "0x9341260A04cC45894c27beC9FFA1BcaB37327E2",
    "0xb05bb4b320f45a236b7f89424927be7a39dd047",
    "0x9Be1c42d03494BB0C08417E28D402b92FBC8626",
    "0x9b55748E1d738b6ce0Ef358bDD2300918565A",
    "0x384e43fff25735b891bd821a5e9ca24fcbaac",
    "0xe6f78dd74361162049ecE35EcAA9EDEDa02bc2",
    "0x20c1A778FEEEA6302Ed47831304951565D4E6",
    "0x4a926709F51c97622c19491aa0f2Bb62fD0ocD",
    "0x8b0de39922dfbf1968b36c4ccb00ad3cfa91ab",
    "0xd3a9ca3176c419e6ade84eeade472dd53a081",
    "0x894dFfA76d55b9a2902cf81519e9DAeE66bC29",
    "0x281eD726930aF72FE20ED0A23f45F20c3F511a",
    "0xc46217F7132D78ED5dFda6301713E0a7875fa6A6",
    "0x7594645f06dabca1bc32f51ab1a0fe8f37a4359d",
    "0xB735597e830149C570901e44441292D0736430AA",
    "0x21fba5456cd1f1304642c25293dc58976fdc4059",
    "0xadeleke_nad",
    "0xdf0B7c9b9cEd89821d9D5514Bbf8602e71aB61e9",
    "0x462aF030a04be0e613008F94450Cb6386CB27C85",
    "0x96463e29607f0F400dec7905b375F07Ac7E24cb7",
    "0x668331696e1FBb6C8BFb9Fb4a8e86678A33Bb810",
    "0x4d7855b5bea3761129716db8f7d85fec646b84bc"
];

// Function to get random integer within range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize wallet allocations
const walletAllocations = {};
const totalWallets = 100;
const ineligibleCount = 20;
const range1200_3700Count = 40;
const range2500_4500Count = 30;
const range5200_10000Count = 10;
const specialWallet = "0x9c9bfa2622e20ad011f246b3d030ac3746ae616a";

// Randomly assign ineligible wallets
let ineligibleWallets = new Set();
while (ineligibleWallets.size < ineligibleCount) {
    const randomIndex = getRandomInt(0, totalWallets - 1);
    if (wallets[randomIndex] !== specialWallet) {
        ineligibleWallets.add(wallets[randomIndex]);
    }
}

// Assign remaining wallets to token ranges
let eligibleWallets = wallets.filter(w => !ineligibleWallets.has(w) && w !== specialWallet);
const remainingCount = eligibleWallets.length - (range1200_3700Count + range2500_4500Count + range5200_10000Count);
if (remainingCount < 0) {
    console.error("Not enough wallets for allocation!");
} else {
    // Shuffle eligible wallets
    for (let i = eligibleWallets.length - 1; i > 0; i--) {
        const j = getRandomInt(0, i);
        [eligibleWallets[i], eligibleWallets[j]] = [eligibleWallets[j], eligibleWallets[i]];
    }

    // Assign tokens to eligible wallets
    let currentIndex = 0;
    for (let i = 0; i < range1200_3700Count && currentIndex < eligibleWallets.length; i++, currentIndex++) {
        walletAllocations[eligibleWallets[currentIndex]] = {
            status: "eligible",
            tokens: getRandomInt(1200, 3700)
        };
    }
    for (let i = 0; i < range2500_4500Count && currentIndex < eligibleWallets.length; i++, currentIndex++) {
        walletAllocations[eligibleWallets[currentIndex]] = {
            status: "eligible",
            tokens: getRandomInt(2500, 4500)
        };
    }
    for (let i = 0; i < range5200_10000Count && currentIndex < eligibleWallets.length; i++, currentIndex++) {
        walletAllocations[eligibleWallets[currentIndex]] = {
            status: "eligible",
            tokens: getRandomInt(5200, 10000)
        };
    }

    // Assign special wallet
    walletAllocations[specialWallet] = {
        status: "special",
        tokens: 25000
    };

    // Mark ineligible wallets
    ineligibleWallets.forEach(wallet => {
        walletAllocations[wallet] = { status: "ineligible", tokens: 0 };
    });
}

// Display wallet list
const walletList = document.getElementById("walletList");
wallets.forEach(wallet => {
    const allocation = walletAllocations[wallet] || { status: "ineligible", tokens: 0 };
    const item = document.createElement("div");
    item.className = "wallet-item";
    item.innerHTML = `
        <span class="wallet-address">${wallet}</span>
        <span class="status ${allocation.status === "eligible" ? "eligible" : allocation.status === "special" ? "special" : "ineligible"}">
            ${allocation.status === "eligible" || allocation.status === "special" ? `Tokens: ${allocation.tokens}` : "Ineligible"}
        </span>
    `;
    walletList.appendChild(item);
});

// Handle wallet check input
const checkWalletInput = document.getElementById("checkWalletInput");
const checkWalletBtn = document.getElementById("checkWalletBtn");
const checkResult = document.getElementById("checkResult");

checkWalletBtn.addEventListener("click", () => {
    const wallet = checkWalletInput.value.trim();
    if (!wallet) {
        checkResult.textContent = "Please enter a wallet address.";
        checkResult.style.display = "block";
        return;
    }

    let result = { status: "ineligible", tokens: 0 };
    if (walletAllocations[wallet]) {
        result = walletAllocations[wallet];
    } else {
        // Handle unsubmitted wallets
        if (Math.random() < 0.5) { // 50% chance of being eligible
            result = {
                status: "eligible",
                tokens: getRandomInt(0, 2800)
            };
        }
    }

    checkResult.textContent = `Wallet: ${wallet} - Status: ${result.status === "eligible" ? "Eligible" : result.status === "special" ? "Special" : "Ineligible"} ${result.tokens > 0 ? `- Tokens: ${result.tokens}` : ""}`;
    checkResult.style.display = "block";
    checkWalletInput.value = "";
});
