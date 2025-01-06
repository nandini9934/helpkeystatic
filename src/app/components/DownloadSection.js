
export default function DownloadSection() {
    return (
        <div className="container mx-auto bg-gray-50 py-10 px-5">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="flex ml-52">
                    <img src="mobile.png" width={500} />
                </div>
                <div className="text-center lg:text-left">
                    <div className="mb-5">
                        <img src="app.png" width={500} />
                    </div>
                    <div className="mb-5 ml-24 align-center">
                        <img src="/andapp.webp" width={300} />
                    </div>
                    <div className="flex flex-col lg:flex-row items-center gap-5">
                        <img
                            src="scanner.png" width={150}
                        />
                        <p className="text-black">
                            Scan the QR Code to download the App
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
