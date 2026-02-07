import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-war-gold/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-foreground/80 hover:text-war-gold transition-colors duration-300 group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
                        <span className="text-sm uppercase tracking-wider font-medium">Return to HQ</span>
                    </Link>
                    <span className="font-military text-xl md:text-2xl text-gradient-gold">
                        WAR OF DOTS
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;
