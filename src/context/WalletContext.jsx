import { createContext, useState, useEffect, useContext } from "react";
import {ethers} from "ethers";
export const WalletContext = createContext();

export const WalletProvider = ({children}) => {
    const [account, setAccount] = useState(null);
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [chainId, setChainId] = useState(null);
    const [isConnecting, setIsConnecting] = useState(false);
    const [error, setError] = useState(null);
    
    const connectWallet = async () => {
        if (!window.ethereum) {
          setError("MetaMask is not installed");
          return;
        }
    
        setIsConnecting(true);
        setError(null);
    
        try {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
          const network = await provider.getNetwork();
          const signerInstance = await provider.getSigner();
    
          setProvider(provider);
          setAccount(accounts[0]);
          setChainId(Number(network.chainId));
          setSigner(signerInstance);
        } catch (err) {
          console.error("Connection error:", err);
          setError("Failed to connect wallet");
        } finally {
          setIsConnecting(false);
        }
      };
    
      const disconnectWallet = () => {
        setAccount(null);
        setProvider(null);
        setSigner(null);
        setChainId(null);
      };
    
      useEffect(() => {
        if (window.ethereum) {
          window.ethereum.on('accountsChanged', (accounts) => {
            if (accounts.length === 0) {
              disconnectWallet();
            } else {
              setAccount(accounts[0]);
            }
          });
    
          window.ethereum.on('chainChanged', (chainIdHex) => {
            setChainId(parseInt(chainIdHex, 16));
          });
    
          return () => {
            window.ethereum.removeAllListeners('accountsChanged');
            window.ethereum.removeAllListeners('chainChanged');
          };
        }
      }, []);

return (
    <WalletContext.Provider value={{ account,
        provider,
        signer,
        chainId,
        connectWallet,
        disconnectWallet,
        isConnecting,
        error
        }}>
        {children}
    </WalletContext.Provider>
)
}

export function useWalletConnection() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWalletConnection must be used within WalletProvider');
  }
  return context;
}
