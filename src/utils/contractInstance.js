import { ethers } from "ethers";
import dotenv from "dotenv";
import { OPTIONS_VAULT_ABI, OPTION_TOKEN_ABI } from "./constants";
dotenv.config();

const {
  VITE_OPTION_TOKEN_CONTRACT_ADDRESS,
  VITE_OPTIONS_VAULT_CONTRACT_ADDRESS,
  VITE_INFURA_API_KEY,
  VITE_PVT_KEY,
} = import.meta.env;

if(
    !VITE_OPTION_TOKEN_CONTRACT_ADDRESS ||
   !VITE_OPTIONS_VAULT_CONTRACT_ADDRESS ||
    !VITE_INFURA_API_KEY ||
    !VITE_PVT_KEY) {
        throw new Error("One or more environment variables missing");
    }

const provider = new ethers.InfuraProvider('sepolia', VITE_INFURA_API_KEY);
const wallet = new ethers.Wallet(VITE_PVT_KEY, provider);

const optionVaultContract = new ethers.Contract(
    VITE_OPTIONS_VAULT_CONTRACT_ADDRESS,
    OPTIONS_VAULT_ABI,
    wallet
  );
  
  const optionTokenContract = new ethers.Contract(
    VITE_OPTION_TOKEN_CONTRACT_ADDRESS,
    OPTION_TOKEN_ABI,
    wallet
  );
  
  export { optionVaultContract, optionTokenContract, wallet, provider };