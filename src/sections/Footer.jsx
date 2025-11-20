
const Footer = () => {
    return(
        <section class="sm:px-10 px-5 pt-7 pb-3 border-t border-neutral-600 flex justify-between items-center flex-wrap gap-5">
            <div className="text-neutral-300 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>
            <div className="flex gap-3">
                <div className="w-12 h-12 rounded-full flex justify-center items-center bg-black-300 border border-black-200">
                    <img src="/assets/github.svg" alt="GitHub" className="w-1/2 h-1/2"/>
                </div>
                <div className="w-12 h-12 rounded-full flex justify-center items-center bg-black-300 border border-black-200">
                    <img src="/assets/instagram.svg" alt="Instagram" className="w-1/2 h-1/2"/>
                </div>
                <div className="w-12 h-12 rounded-full flex justify-center items-center">
                    <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-1/2 h-1/2"/>
                </div>
                <div className="w-12 h-12 rounded-full flex justify-center items-center bg-black-300 border border-black-200">
                    <img src="/assets/x.svg" alt="X" className="w-1/2 h-1/2"/>
                </div>
            </div>
        </section>
    )
}

export default Footer;