// const Counter = artifacts.require("Counter");

// module.exports = function (deployer) {
//   deployer.deploy(Counter);
// };

// 获取对应的合约文件
var Counter = artifacts.require("./Counter.sol");

// JavaScript export
module.exports = function(deployer) {
    // deployer 是用来部署

    // 部署
    deployer.deploy(Counter);
}

