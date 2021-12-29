import '../styles/globals.css'

function Marketplace({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6 text-center">
        <p className="text-4xl font-bold">NFT MINTING ENGINE</p>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default Marketplace