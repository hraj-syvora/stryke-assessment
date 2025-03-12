import { Link } from "react-router-dom";
import { useWalletConnection } from "../context/WalletContext";

const Navbar = () => {
  const { account, connectWallet, disconnectWallet } = useWalletConnection();
  return (
    <div className="bg-gradient-to-r from-black to-slate-800">
      <div className="flex justify-between">
        <div className="relative">
          <span className="absolute font-bold text-4xl text-indigo-200 mx-4 my-4">
            Stryke
          </span>
        </div>
        <div className="text-indigo-200 my-4 mx-8 font-bold text-lg space-x-8">
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
            <>
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
            </>
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
