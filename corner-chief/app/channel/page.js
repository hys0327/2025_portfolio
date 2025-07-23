import SearchBox from "../components/SearchBox";

export default function Channel() {
    return (
        <div className="row-wrap w-3xl mx-auto py-10">
            <section className="row flex justify-between mb-10">
                <div className="left flex items-center gap-x-10">
                    <div className="img-box w-[90px] h-[90px] drop-shadow-lg bg-white rounded-full">
                        <img
                            src="/images/users/profile_3.webp"
                            alt=""
                            className="w-full h-full rounded-full"
                        />
                    </div>
                    <div className="text-wrap">
                        <div className="accent-text font-extrabold text-gray-500 mb-1">
                            Chief
                        </div>
                        <div className="Heading_B_ln mb-1">정하늘</div>
                        <div className="mb-4">
                            <div className="Caption_B_ln text-gray-400 flex items-center gap-x-1">
                                <span>팔로워 1450</span>
                            </div>
                            <div className="Caption_B_ln text-gray-400 flex items-center gap-x-1">
                                <span>레시피 348</span>
                            </div>
                        </div>
                        <div className="Body_B_ln">
                            한식의 세계화를 꿈꿉니다.
                        </div>
                    </div>
                </div>
                <div className="right flex items-start gap-x-3">
                    <button
                        type="button"
                        className="accent-text font-medium bg-emerald-600 hover:bg-emerald-800 text-white py-1.5 px-4 rounded-full cursor-pointer"
                    >
                        팔로우
                    </button>
                    <button
                        type="button"
                        className="accent-text font-medium bg-emerald-600 hover:bg-emerald-800 text-white py-1.5 px-4 rounded-full cursor-pointer"
                    >
                        후원하기
                    </button>
                </div>
            </section>
            <section className="row">
                <SearchBox />
            </section>
            <section className="row">
                네비 영역<br></br>
                메인 콘텐츠 영역
            </section>
        </div>
    );
}
