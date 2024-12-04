const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <nav>
                <h6 className="footer-title">Seek donations for</h6>
                <a className="link link-hover">Medical</a>
                <a className="link link-hover">Emergency</a>
                <a className="link link-hover">Disaster Relief</a>
                <a className="link link-hover">Education</a>
                <a className="link link-hover">Non Profit</a>
                <a className="link link-hover">Personal Goals</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    )
}
export default Footer