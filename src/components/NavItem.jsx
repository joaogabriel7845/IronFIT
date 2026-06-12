function NavItem({ label }) {
    return (
        <p className="transition-all font-['Google_Sans'] text-white border-transparent hover:border-redFit hover:border-b-2 hover:cursor-pointer hover:-translate-y-1">
            {label}
        </p>
    )
}

export default NavItem;