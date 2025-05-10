import { Link } from "react-router-dom";
import { useWalletConnection } from "../context/WalletContext";

const Navbar = () => {
  const { account, connectWallet, disconnectWallet } = useWalletConnection();
  
  return (
    <div className="bg-gradient-to-r from-black to-slate-800">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <span className="font-bold text-4xl text-indigo-200 mx-6">
            Stryke
          </span>
        </div>
        <div className="w-full flex flex-wrap justify-center md:justify-end items-center text-indigo-200 my-4 mx-8 font-bold text-lg space-x-6 ">
          <Link to="/rewards">
            <span className="hover:text-white">Rewards</span>
          </Link>
          <Link to="/options">
            <span className="hover:text-white">Options</span>
          </Link>
          <Link to="/analytics">
            <span className="hover:text-white">Analytics</span>
          </Link>
          <Link to="/lp-positions">
            <span className="hover:text-white">LP Positions</span>
          </Link>
          {account ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm">
                {`${account.substring(0, 6)}...${account.substring(
                  account.length - 4
                )}`}
              </span>
              <button
                onClick={disconnectWallet}
                className="hover:text-white"
              >
                Disconnect
              </button>
            </div>
          ) : (
            <button onClick={connectWallet} className="hover:text-white">
              Connect
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
