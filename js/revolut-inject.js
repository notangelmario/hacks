const transactionsBlock = document.querySelector(`[aria-label="latest-transactions-block"]`)

const firstTransaction = transactionsBlock.children[0];

const transactionDetails = {
	title: "STB SA",
	icon: "https://storage.googleapis.com/revolut-prod-apps_merchant-logo/stbsa.ro",
	time: new Date().getTime() - 15 * 60 * 1000,
	price: 3.00
}

const title = firstTransaction
	.querySelector("button>span>span")

const icon = firstTransaction
	.querySelector("button>div")

const time = firstTransaction
	.querySelector("button>span>span:nth-child(2) div")

const price = firstTransaction
	.querySelector("button>span:nth-child(3) span")


// Update title
title.innerHTML = transactionDetails.title

// Update icon
// turn it into html string, replace the substring: "--rui-image-url: url("https://storage.googleapis.com/revolut-prod-apps_merchant-logo/metrorex.ro");"
// and also background-image: image-set(url(&quot;https://storage.googleapis.com/revolut-prod-apps_merchant-logo/metrorex.ro&quot;) 1x);
// and then turn it back into a node
icon.innerHTML = icon.innerHTML.replace(/--rui-image-url: url\(&quot;.*&quot;\);/, `--rui-image-url: url(${transactionDetails.icon});`)
icon.innerHTML = icon.innerHTML.replace(/background-image: image-set\(url\(&quot;.*&quot;\) 1x\);/, `background-image: image-set(url(${transactionDetails.icon}) 1x);`)

// Update time
// Only hours and minutes
// Remove the 0 from the beginning of the hour
// Also strip PM/AM
time.innerHTML = "Pending&nbsp;&middot;&nbsp;Today, " + new Date(transactionDetails.time).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }).replace(/^0/, "").replace(/(AM|PM)/, "")

// Update price
price.innerHTML = "- RON&nbsp;" + transactionDetails.price;