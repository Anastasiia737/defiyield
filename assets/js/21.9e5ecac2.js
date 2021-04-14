(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{379:function(e,t,a){"use strict";a.r(t);var o=a(42),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"defiyield-safe-toolkit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defiyield-safe-toolkit"}},[e._v("#")]),e._v(" DefiYield Safe Toolkit")]),e._v(" "),a("h1",{attrs:{id:"approved-contracts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#approved-contracts"}},[e._v("#")]),e._v(" Approved Contracts")]),e._v(" "),a("p",[a("button",{attrs:{onclick:"location.href='https://defiyield.info/approved-contracts'"}},[e._v("Try the Tool")])]),a("style",{attrs:{scoped:""}},[e._v("\nbutton {\nbackground-color: #1452F0;\ncolor: white;\nborder: none;\npadding: 15px 34px;\nfont-size: 20px;\nborder-radius: 12px;\n}\n")]),a("p"),e._v(" "),a("p",[e._v("When you use DApps on Ethereum or alternative blockchains, you approve underlying tokens to be accessed and spent by smart contracts of these Apps. As contracts can’t detect when a token can be accessed by them, each of them is given the right to transfer tokens by itself.\nThere are two ways users can approve the allowance to use their tokens:")]),e._v(" "),a("ul",[a("li",[e._v("limited approvals, where users allow DApps to transfer specified amount of tokens for requested transactions;")]),e._v(" "),a("li",[e._v("unlimited approvals, where DApps are eligible to transfer all user tokens at any time without any additional approval.\nA lot of DeFi apps utilize the approval to use unlimited amount of tokens in their smart contracts, claiming this improves user experience as one approval would be valid for all future transactions.")])]),e._v(" "),a("p",[e._v("Problem with the unlimited token allowance\nUsers face the problem that the token allowance doesn’t expire: the control over the underlying user funds stays forever. Decentralized platforms get permanent and unlimited control over deposited funds and can transfer them to any address they need.")]),e._v(" "),a("p",[a("strong",[e._v("DefiYield's solution")])]),e._v(" "),a("p",[e._v("If you aren’t confident in a specific DApp, modify the approved amount of tokens allowed to be transferred or completely decline the allowance with the Approved Contracts tool.\nUnder each smart contract address, users a shown a list of exposed tokens with the following details:")]),e._v(" "),a("ul",[a("li",[e._v("Token balance")]),e._v(" "),a("li",[e._v("Date of the last balance change")]),e._v(" "),a("li",[e._v("Approved amount")]),e._v(" "),a("li",[e._v("Risk exposure.\nAlso, users can see total exposure for the allowance valued in USD for each smart contract.")])]),e._v(" "),a("h1",{attrs:{id:"timelock-contract-viewer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timelock-contract-viewer"}},[e._v("#")]),e._v(" Timelock Contract Viewer")]),e._v(" "),a("p",[a("button",{attrs:{onclick:"location.href='https://defiyield.info/timelock-contracts'"}},[e._v("Try the Tool")])]),a("style",{attrs:{scoped:""}},[e._v("\nbutton {\nbackground-color: #1452F0;\ncolor: white;\nborder: none;\npadding: 15px 34px;\nfont-size: 20px;\nborder-radius: 12px;\n}\n")]),a("p"),e._v(" "),a("p",[e._v("Timelock is a contract deployed to delay a certain process or transaction performed on a blockchain. DeFi projects can use it to bring an additional security layer for both DeFi projects’ founders and users as far as subject functions are executed with a specified delay. There are a few cases when this tool can be helpful:")]),e._v(" "),a("ul",[a("li",[e._v("First, after a project is launched, its developers can hold a big share of tokens granted to them as a reward. Other large shareholders can be early investors, which use opportunity to purchase large amounts of project tokens at an advantageous price.\nThe project owners may want to limit the developers and the early investors in selling off the project tokens on the open market, causing the price dump, for a specified timeframe. This allows to adjust incentives of the major token holders with the project’s market goals at least for the defined period.")]),e._v(" "),a("li",[e._v("Second, some projects use the Timelock contracts in order to convince liquidity providers that their smart contracts are safe despite presence of certain suspicious functions. But, timelocks have to last for at least a few days so that users have an opportunity to notice, understand and properly react to smart contract changes and transactions affecting their funds.")])]),e._v(" "),a("p",[e._v("As implementation of timelocks doesn't guarantee full security staked funds, users should track timelocked events not to miss important modifications of  staking terms and perform required actions, such as funds unstaking and withdrawal, if some of the events are undesirable.")]),e._v(" "),a("p",[e._v("To keep your investments safe, track functions that can be invoked through a particular timelock by project admins with help of Timelock Contract Viewer by DefiYield. You can get detailed info about Timelock contracts related to your staked funds just by entering the contracts’ addresses:")]),e._v(" "),a("p",[e._v("You’ll see:")]),e._v(" "),a("ul",[a("li",[e._v("Minimum delay")]),e._v(" "),a("li",[e._v("Maximum delay")]),e._v(" "),a("li",[e._v("Admin address")]),e._v(" "),a("li",[e._v("List of transactions ever performed through the analysed Timelock contract")])]),e._v(" "),a("h1",{attrs:{id:"cancel-speed-up-ethereum-transactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cancel-speed-up-ethereum-transactions"}},[e._v("#")]),e._v(" Cancel & Speed Up Ethereum Transactions")]),e._v(" "),a("p",[a("button",{attrs:{onclick:"location.href='https://defiyield.info/cancel-ethereum-transactions'"}},[e._v("Try the Tool")])]),a("style",{attrs:{scoped:""}},[e._v("\nbutton {\nbackground-color: #1452F0;\ncolor: white;\nborder: none;\npadding: 15px 34px;\nfont-size: 20px;\nborder-radius: 12px;\n}\n")]),e._v("\nCurrently, most decentralized apps are based on Ethereum  1.0, whose scalability doesn’t match the huge demand emerged as a result of the DeFi boom. The gas fees fluctuate in correlation with network demand. When the blockchain is congested, miners decide which transaction should be validated first, based on the fees offered.  In this way, a queue of pending transactions is formed. If the average gas price on Ethereum grows, certain pending transactions can be shifted down the processing queue, meaning that users can wait for days or forever until their transactions are approved."),a("p"),e._v(" "),a("p",[e._v("Although the network is being upgraded to the 2.0 version for solving the scalability problems, yield farmers need a tool for handling situations when their transactions get stuck now. DefiYield has designed a solution helping users in solving the stuck transaction problem - the "),a("strong",[e._v("Cancel & Speed Up Ethereum Transactions")]),e._v(" tool.")]),e._v(" "),a("p",[e._v("In order to access the tool, users simply need to connect their wallets. Two options are available for handing stuck transactions:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Speed up")])]),e._v(" "),a("li",[a("strong",[e._v("Cancel")])])]),e._v(" "),a("p",[e._v("Just enter the "),a("strong",[e._v("transaction Hash")]),e._v(" and chose one of the options")]),e._v(" "),a("h1",{attrs:{id:"gas-tracker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gas-tracker"}},[e._v("#")]),e._v(" Gas Tracker")]),e._v(" "),a("p",[a("button",{attrs:{onclick:"location.href='https://defiyield.info/gas-cost-tracker'"}},[e._v("Try the Tool")])]),a("style",{attrs:{scoped:""}},[e._v("\nbutton {\nbackground-color: #1452F0;\ncolor: white;\nborder: none;\npadding: 15px 34px;\nfont-size: 20px;\nborder-radius: 12px;\n}\n")]),a("p"),e._v(" "),a("p",[e._v("By each transaction executed on a blockchain, users have to pay gas. Gas fees on Ethereum fluctuate depending on the network demand as it’s based on the proof-of-work protocol. How fast a transaction will be processed by miners fully depends on the fee offered. The higher the fee, the faster your transaction is executed.\nThis is why every DeFi user has to properly estimate the optimal gas amount that has to be paid to get his transaction executed without being stuck, when the network is clogged.\nDefiYield offers its users "),a("strong",[e._v("Gas Tracker")]),e._v(" - a tool providing all the necessary information and instruments for analysis of gas prices on Ethereum and BinanceSmart Chain and calculating optimal fees for each transaction:")]),e._v(" "),a("ul",[a("li",[e._v("Current gas price for swift, fast, normal and slow transaction processing")]),e._v(" "),a("li",[e._v("Statistics on user wallets featuring total gas spent displayed in crypto and in USD, number of conducted transactions and of failed transactions;")]),e._v(" "),a("li",[e._v("Gas Price Estimator where users can check how long will it take to process their transactions depending on a selected gas price;")]),e._v(" "),a("li",[e._v("Gas Internal")])])])}),[],!1,null,null,null);t.default=n.exports}}]);