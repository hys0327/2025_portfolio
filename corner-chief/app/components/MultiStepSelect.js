"use client";

import { useState, useEffect } from "react";
import SelectBox from "./SelectBox";
import SelectionResult from "./SelectionResult";

// 1단계
const FIRST_OPTIONS = [
    { value: "ingredient", text: "요리 재료" },
    { value: "tool", text: "조리 도구" },
    { value: "shop", text: "상품 구매 사이트" },
];

// 2단계
const SECOND_OPTIONS = {
    ingredient: [
        { value: "meat", text: "고기류" },
        { value: "vege", text: "채소류" },
        { value: "sea", text: "해산물류" },
    ],
    tool: [
        { value: "board", text: "도마" },
        { value: "knife", text: "칼" },
        { value: "pan", text: "냄비" },
    ],
};

const DUMMY_PRODUCTS = {
    ingredient: {
        meat: [
            { name: "한우 등심", price: "25,000원" },
            { name: "돼지 목살", price: "12,000원" },
            { name: "닭 가슴살", price: "8,000원" },
            { name: "소불고기용", price: "18,000원" },
            { name: "양념 LA갈비", price: "22,000원" },
        ],
        vege: [
            { name: "양파", price: "1,200원" },
            { name: "당근", price: "1,000원" },
            { name: "파프리카", price: "2,000원" },
            { name: "브로콜리", price: "2,500원" },
            { name: "애호박", price: "1,800원" },
        ],
        sea: [
            { name: "오징어", price: "5,000원" },
            { name: "문어", price: "15,000원" },
            { name: "새우", price: "10,000원" },
            { name: "홍합", price: "7,000원" },
            { name: "가리비", price: "9,000원" },
        ],
    },
    tool: {
        board: [
            {
                name: "스텐&나무 도마 양면",
                price: "39,900원",
                imageUrl: "/images/products/product_001.jfif",
            },
            {
                name: "엔드그레인 도마",
                price: "139,000원",
                imageUrl: "/images/products/product_002.jfif",
            },
            {
                name: "느티나무 도마",
                price: "43,800원",
                imageUrl: "/images/products/product_003.jpg",
            },
            {
                name: "프리미엄 실리콘 도마",
                price: "20,800원",
                imageUrl: "/images/products/product_004.jpg",
            },
            {
                name: "도블레 이유식 도마",
                price: "23,300원",
                imageUrl: "/images/products/product_005.jfif",
            },
            {
                name: "모도리 깔끔 도마 세트",
                price: "63,900원",
                imageUrl: "/images/products/product_006.jpg",
            },
            {
                name: "COMMA 원목 플레이팅 윌넛 양면 도마",
                price: "59,900원",
                imageUrl: "/images/products/product_007.jpg",
            },
        ],
        knife: [
            { name: "셰프 나이프", price: "25,000원" },
            { name: "과도", price: "10,000원" },
            { name: "빵칼", price: "15,000원" },
            { name: "일본식 칼", price: "30,000원" },
            { name: "만능칼", price: "12,500원" },
        ],
        pan: [
            { name: "논스틱 팬", price: "18,000원" },
            { name: "스테인리스 팬", price: "22,000원" },
            { name: "무쇠 팬", price: "28,000원" },
            { name: "궁중팬", price: "24,000원" },
            { name: "웍팬", price: "26,000원" },
        ],
    },
    shop: [
        { name: "쿠팡", url: "https://www.coupang.com" },
        { name: "마켓컬리", url: "https://www.kurly.com" },
        { name: "11번가", url: "https://www.11st.co.kr" },
        { name: "G마켓", url: "https://www.gmarket.co.kr" },
        { name: "SSG.COM", url: "https://www.ssg.com" },
    ],
};

export default function MultiStepSelect() {
    // 임의, 조리 도구 - 도마
    const [step1, setStep1] = useState("tool");
    const [step2, setStep2] = useState("board");

    const handleStep1 = (value) => {
        setStep1(value);
        setStep2("");
    };

    const handleStep2 = (value) => {
        setStep2(value);
    };

    return (
        <>
            <div className="inline-flex gap-4">
                <SelectBox
                    label="분류를 선택하세요"
                    options={FIRST_OPTIONS}
                    onChange={handleStep1}
                    value={step1}
                />

                {step1 && SECOND_OPTIONS[step1] && (
                    <SelectBox
                        label="카테고리를 선택하세요"
                        options={SECOND_OPTIONS[step1]}
                        onChange={handleStep2}
                        value={step2}
                    />
                )}
            </div>

            {(step1 === "shop" || (step1 && step2)) && (
                <SelectionResult
                    step1={step1}
                    step2={step2}
                    data={DUMMY_PRODUCTS}
                />
            )}
        </>
    );
}
