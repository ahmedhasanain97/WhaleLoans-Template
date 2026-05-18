// // 1. Define the media query
// const mediaQuery = window.matchMedia('(max-width: 767px)');

// // 2. Create a handler function
// function handleTabletChange(e) {
//   if (e.matches) {
//     let header = document.querySelector("header")
//     console.log(header)
//     header.innerHTML="";
//     let logo = document.createElement("img")
//     logo.src='Gemini_Generated_Image_4iq7274iq7274iq7-removebg-preview.png'
//     logo.style.cssText="width:25%; object-fit:cover;"
//     let connectWalletBTN = document.createElement("button")
//     connectWalletBTN.classList.add("connect-wallet-btn")
//     connectWalletBTN.innerHTML="Connect Wallet"
//     let navBtn = document.createElement("button")
//     navBtn.classList.add("dark-mode")
//     navBtn.innerHTML='<i class="fa-solid fa-bars-staggered"></i>'
//     header.append(logo,connectWalletBTN,navBtn)
//   }

// }

// // 3. Register the listener for real-time changes
// mediaQuery.addEventListener('change', handleTabletChange);

// // 4. Run the check once at startup
// handleTabletChange(mediaQuery);
