import Link from "next/link"
import Image from "next/image"

const OurTeam = () => {
    return (
        <div className="our-team-block pt-[100px] sm:pt-16 pt-10 bg-white">
            <div className="container">
                <div className="heading-block">
                    <div className="heading3">Our Professional Team</div>
                </div>
                <div className="list-member md:mt-10 mt-6 grid xl:grid-cols-4 sm:grid-cols-2 gap-8">
                    <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="bg-img w-full"><Image width={1000} height={1000} className="w-full h-full display-block" src="/images/member/328x350.png" alt="" />
                            <div className="list-social bg-white"><Link href="http://facebook.com" target="_blank"> <i className="icon-facebook text-sm"></i></Link><Link href="http://linkedin.com" target="_blank"> <i className="icon-in text-sm"></i></Link><Link href="http://twitter.com" target="_blank"> <i className="icon-twitter fs-12"></i></Link><Link href="http://instagram.com" target="_blank"> <i className="icon-insta fs-12"></i></Link></div>
                        </div>
                        <div className="infor text-center pt-4">
                            <div className="name heading6">Maria Takado</div>
                            <div className="caption1 text-secondary">Senior UI-UX Designer </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="bg-img w-full"><Image width={1000} height={1000} className="w-full h-full display-block" src="/images/member/328x350.png" alt="" />
                            <div className="list-social bg-white"><Link href="http://facebook.com" target="_blank"> <i className="icon-facebook text-sm"></i></Link><Link href="http://linkedin.com" target="_blank"> <i className="icon-in text-sm"></i></Link><Link href="http://twitter.com" target="_blank"> <i className="icon-twitter fs-12"></i></Link><Link href="http://instagram.com" target="_blank"> <i className="icon-insta fs-12"></i></Link></div>
                        </div>
                        <div className="infor text-center pt-4">
                            <div className="name heading6">Kim Naika </div>
                            <div className="caption1 text-secondary">CEO Technology Avitex</div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="bg-img w-full"><Image width={1000} height={1000} className="w-full h-full display-block" src="/images/member/328x350.png" alt="" />
                            <div className="list-social bg-white"><Link href="http://facebook.com" target="_blank"> <i className="icon-facebook text-sm"></i></Link><Link href="http://linkedin.com" target="_blank"> <i className="icon-in text-sm"></i></Link><Link href="http://twitter.com" target="_blank"> <i className="icon-twitter fs-12"></i></Link><Link href="http://instagram.com" target="_blank"> <i className="icon-insta fs-12"></i></Link></div>
                        </div>
                        <div className="infor text-center pt-4">
                            <div className="name heading6">John Doe</div>
                            <div className="caption1 text-secondary">Creative Director at Avitex </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <div className="bg-img w-full"><Image width={1000} height={1000} className="w-full h-full display-block" src="/images/member/328x350.png" alt="" />
                            <div className="list-social bg-white"><Link href="http://facebook.com" target="_blank"> <i className="icon-facebook text-sm"></i></Link><Link href="http://linkedin.com" target="_blank"> <i className="icon-in text-sm"></i></Link><Link href="http://twitter.com" target="_blank"> <i className="icon-twitter fs-12"></i></Link><Link href="http://instagram.com" target="_blank"> <i className="icon-insta fs-12"></i></Link></div>
                        </div>
                        <div className="infor text-center pt-4">
                            <div className="name heading6">Dave Nguyen</div>
                            <div className="caption1 text-secondary">CEO Technology Avitex</div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6 hidden">
                        <div className="bg-img w-full"><Image width={1000} height={1000} className="w-full h-full display-block" src="/images/member/328x350.png" alt="" />
                            <div className="list-social bg-white"><Link href="http://facebook.com" target="_blank"> <i className="icon-facebook text-sm"></i></Link><Link href="http://linkedin.com" target="_blank"> <i className="icon-in text-sm"></i></Link><Link href="http://twitter.com" target="_blank"> <i className="icon-twitter fs-12"></i></Link><Link href="http://instagram.com" target="_blank"> <i className="icon-insta fs-12"></i></Link></div>
                        </div>
                        <div className="infor text-center pt-4">
                            <div className="name heading6">Christina</div>
                            <div className="caption1 text-secondary">CEO Technology Avitex</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurTeam