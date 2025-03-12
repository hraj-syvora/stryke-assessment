# Stryke Frontend

This project is a frontend application that allows users to mint and exercise options using their Uniswap V3 LP positions as collateral. Built with React and Vite, it interacts with a smart contract to manage the minting, exercising, and expiration of options. The application provides a clean interface to interact with the blockchain and display relevant data for users.

## Features

- **Mint Options**: Allows users to lock their Uniswap V3 LP position NFT as collateral and mint call and put options with a specified strike price and expiry.
- **Exercise Options**: Users can exercise their options if within the exercise window, receiving profit or loss based on the current market value and strike price.
- **View Transactions**: Displays recent transactions made through the contract via events.
- **Option Metrics**: Provides a detailed overview of available option types (calls and puts), strikes, and expiry for each asset.
- **User's Eligible LP Positions**: Displays the Uniswap V3 LP positions that can be used as collateral.

## Prerequisites

- Node.js (v16 or later)
- npm

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/uniswap-v3-options-frontend.git
   cd uniswap-v3-options-frontend
   ```

2. Install the necessary dependencies:

   ```bash
   npm install
   ```

## Running the Project

To start the development server and run the project locally:

```bash
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173).

## Technologies Used

- **React**: For building the user interface.
- **Vite**: A modern and fast build tool for front-end development.
- **Ethers.js**: For interacting with the Ethereum blockchain and the smart contract.
- **Tailwind CSS**: For styling the frontend.

## Smart Contract Integration

The frontend interacts with a smart contract that allows users to:
- Transfer and store Uniswap V3 LP NFTs.
- Mint, exercise, and handle options.
- Emit events to track transactions.

Ensure the smart contract is deployed and the frontend is configured to connect to the correct network (e.g., Ethereum Mainnet, Rinkeby).

## Contributing

Feel free to open an issue or a pull request if you want to contribute to the development of this project.

## License

This project is licensed under the MIT License.

```