"use client";
import Link from "next/link";
import { getTopChiefs } from "@/utils/getTopChiefs";
import { getTopRecipe } from "@/utils/getTopRecipe";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
    const chiefs = getTopChiefs();
    const recipes = getTopRecipe();

    // 뱃지
    function getBadgeByRank(rank) {
        if (rank === 1) return { label: "요리왕", type: "rank-1" };
        if (rank === 2) return { label: "소통왕", type: "rank-2" };
        if (rank === 3) return { label: "기대주", type: "rank-3" };
        return { label: "", type: "" };
    }

    return (
        <div className="row-wrap w-7xl mx-auto py-10">
            <section className="row mb-14">
                <h3 className="Heading_B_ln mb-5 flex gap-x-2">
                    <span>이달의 요리사</span>
                    <span>🍣</span>
                </h3>
                <Swiper
                    modules={[Navigation, Scrollbar, Autoplay]}
                    spaceBetween={40}
                    slidesPerView="auto"
                    navigation={true}
                    className="has-shadow"
                >
                    {chiefs.map((chief, idx) => {
                        const { label, type } = getBadgeByRank(idx + 1);

                        return (
                            <SwiperSlide
                                key={idx}
                                style={{ width: "auto" }}
                                className="bg-white p-2.5 drop-shadow-lg border border-gray-400 rounded-lg relative"
                            >
                                <div className="card w-[200px] flex flex-col min-h-[300px] justify-between">
                                    <div className="card-content">
                                        <div className="img-box w-[200px] h-[150px] rounded-lg mb-3 overflow-hidden">
                                            <img
                                                src={chief.imageUrl}
                                                alt=""
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <h4 className="Body_B_ln mb-1">
                                            {chief.name}
                                        </h4>
                                        {/* 2줄 초과 시 줄바꿈 */}
                                        <p className="Caption_R_ln line-clamp-2">
                                            {chief.description}
                                        </p>
                                    </div>
                                    <Link
                                        href="/"
                                        className="Body_B_ln flex items-center justify-center bg-gray-600 hover:bg-gray-900 text-white rounded-xl py-2 "
                                    >
                                        채널 보러가기
                                    </Link>
                                </div>
                                <div className={`badge ${type}`}>
                                    <span className="Caption_B_ln">
                                        {label}
                                    </span>
                                    <div className="diagram d-left"></div>
                                    <div className="diagram d-right"></div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </section>
            <section className="row mb-14">
                <h3 className="Heading_B_ln mb-5 flex gap-x-2">
                    <span>최신 레시피</span>
                    <span>🧈</span>
                </h3>
                <ul className="grid grid-cols-4 gap-x-4">
                    {recipes.map((recipe, idx) => (
                        <li key={idx}>
                            <div className="img-box h-[150px] mb-3">
                                <img
                                    src={recipe.imageUrl}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="Caption_R_ln text-gray-700">
                                {recipe.description}
                            </p>
                            <h4 className="Body_B_ln mb-1">{recipe.name}</h4>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="row bg-gray-100 py-14">
                <h3 className="Heading_B_ln mb-5 flex gap-x-2">
                    <span>방구석 PICK</span>
                    <span>📌</span>
                </h3>
                {/* 
                    사용자가 작성한 레시피 관련 게시글의 내용 중, 가장 많이 언급된 요리 재료, 조리 도구, 웹사이트 주소(대표 도메인만 추출해야함)를 보여줘야 함
                    더미데이터를 어떻게 구성할지 감이 안와서 나중으로 미룸. 25-07-22
                */}
            </section>
        </div>
    );
}
