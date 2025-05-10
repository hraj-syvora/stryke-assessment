import React from 'react'

const Body = () => {
  return (
    <div className="min-h-screen">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-indigo-300 mb-6">Decentralized Options Trading Platform</h1>
        <p className="text-xl text-gray-300 mb-8">
          A secure and efficient platform for options trading built on Uniswap V3
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-200 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-4">For Liquidity Providers</h2>
            <ul className="text-left space-y-3">
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">✓</span>
                <span>Lock your Uniswap V3 LP positions</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">✓</span>
                <span>Earn additional rewards from locked positions</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">✓</span>
                <span>Write options against your liquidity</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">✓</span>
                <span>Collect premiums from option buyers</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-200 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-4">For Traders</h2>
            <ul className="text-left space-y-3">
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">✓</span>
                <span>Buy and sell options on various token pairs</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">✓</span>
                <span>Exercise options when profitable</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">✓</span>
                <span>Track your trading performance</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 mr-2">✓</span>
                <span>Hedge your portfolio with options strategies</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-gray-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4">
              <div className="text-indigo-600 text-xl font-bold mb-2">1</div>
              <h3 className="font-medium mb-2">Lock LP Positions</h3>
              <p className="text-gray-600">Lock your Uniswap V3 positions to earn rewards and write options</p>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <div className="text-indigo-600 text-xl font-bold mb-2">2</div>
              <h3 className="font-medium mb-2">Trade Options</h3>
              <p className="text-gray-600">Mint Buy Sell Exercise options on various token pairs</p>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <div className="text-indigo-600 text-xl font-bold mb-2">3</div>
              <h3 className="font-medium mb-2">Claim Rewards</h3>
              <p className="text-gray-600">Collect rewards from locked positions and track your profits</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <a href="/positions" className="px-6 py-3 bg-indigo-600 text-white rounded-md text-lg font-medium hover:bg-indigo-700 mr-4">
            Get Started
          </a>
          <a href="/options" className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-md text-lg font-medium hover:bg-indigo-50">
            Explore Options
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Body;