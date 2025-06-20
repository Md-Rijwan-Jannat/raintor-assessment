import React from "react";
import Link from "next/link";
import Container from "../../ui/Container";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({
  href,
  children,
  className = "",
}) => {
  return (
    <Link
      href={href}
      className={`text-gray-300 hover:text-white transition-colors duration-200 text-sm ${className}`}
    >
      {children}
    </Link>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className=" p-1 bg-transparent">
      <Container className="px-4 sm:px-8 md:px-12 py-12 md:py-16 bg-black text-white rounded-3xl md:rounded-4xl">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="flex flex-col w-full">
            <h2 className="text-[34px] leading-[34px] font-bold text-[#C5FF41]">
              DEVELOP.ME
            </h2>
          </div>
          <div className="flex flex-col gap-8 w-full">
            <div className="mb-5 md:mb-20 lg:mb-0 mt-4 lg:mt-0">
              <h1 className="text-3xl md:text-4xl font-bold lg:text-[64px] leading-[64px] font-sporting-grotesque -tracking-tight">
                As You Can
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex flex-col gap-8">
                {/* Say Hello Section */}
                <div>
                  <h3 className="text-sm font-medium mb-4 uppercase text-gray-400">
                    Say hello
                  </h3>
                  <div className="space-y-2">
                    <div>
                      <FooterLink href="mailto:HELLO@DEVLOP.ME.COM">
                        HELLO@DEVLOP.ME.COM
                      </FooterLink>
                    </div>
                    <div>
                      <FooterLink href="mailto:MAHBUBUL@ME.COM">
                        MAHBUBUL@ME.COM
                      </FooterLink>
                    </div>
                  </div>
                </div>
                {/* Call Section */}
                <div>
                  <h3 className="text-sm font-medium mb-4 uppercase text-gray-400">
                    Call
                  </h3>
                  <div className="space-y-2">
                    <div>
                      <FooterLink href="tel:+7845494981">
                        +784549 4981 00
                      </FooterLink>
                    </div>
                    <div>
                      <FooterLink href="tel:+88450100211">
                        +8845 0100 211
                      </FooterLink>
                    </div>
                  </div>
                </div>
                <span className="text-gray-400 mt-[73px] text-sm hidden md:block">
                  © devlop.me 2025
                </span>
              </div>

              {/* Menu Section */}
              <div>
                <h3 className="text-sm font-medium mb-4 uppercase text-gray-400">
                  Menu
                </h3>
                <div className="space-y-2">
                  <div>
                    <FooterLink href="/">HOME</FooterLink>
                  </div>
                  <div>
                    <FooterLink href="/about">ABOUT</FooterLink>
                  </div>
                  <div>
                    <FooterLink href="/portfolio">PORTFOLIO</FooterLink>
                  </div>
                  <div>
                    <FooterLink href="/blog">BLOG</FooterLink>
                  </div>
                </div>
              </div>

              {/* Social Section */}
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-sm font-medium mb-4 uppercase text-gray-400">
                    Social
                  </h3>
                  <div className="space-y-2">
                    <div>
                      <FooterLink href="https://twitter.com">
                        TWITTER
                      </FooterLink>
                    </div>
                    <div>
                      <FooterLink
                        href="https://instagram.com"
                        className="text-[#C5FF41]"
                      >
                        INSTAGRAM
                      </FooterLink>
                    </div>
                    <div>
                      <FooterLink href="https://facebook.com">
                        FACEBOOK
                      </FooterLink>
                    </div>
                    <div>
                      <FooterLink href="https://behance.net">
                        BEHANCE
                      </FooterLink>
                    </div>
                    <div>
                      <FooterLink href="https://dribbble.com">
                        DRIBBBLE
                      </FooterLink>
                    </div>
                  </div>
                </div>
                <div className="md:flex items-center gap-4 mt-auto text-gray-400 pt-8 sm:pt-0 sm:mt-[100px] hidden">
                  <div className="flex gap-6">
                    <FooterLink href="/privacy" className="text-gray-400">
                      PRIVACY
                    </FooterLink>
                    <span className="text-gray-400">-</span>
                    <FooterLink href="/terms" className="text-gray-400">
                      TERMS
                    </FooterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between mt-10 md:-mt-[34px]">
          <div className="flex items-center gap-4 mt-2 mb-4 md:mb-0">
            <span className="text-xl font-bold">BESNIK</span>
          </div>
          <span className="text-gray-400 mb-4 text-sm block md:hidden">
            © devlop.me 2025
          </span>
          <div className="flex items-center gap-4 mt-auto text-gray-400 md:hidden">
            <div className="flex gap-6">
              <FooterLink href="/privacy" className="text-gray-400">
                PRIVACY
              </FooterLink>
              <span className="text-gray-400">-</span>
              <FooterLink href="/terms" className="text-gray-400">
                TERMS
              </FooterLink>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
