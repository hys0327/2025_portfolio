"use client";
import { useState } from "react";
import { allChiefs } from "@/data/chiefs";

const dummyData = [
    "김치찌개",
    "된장찌개",
    "불고기",
    "비빔밥",
    "잡채",
    "갈비탕",
    "떡볶이",
    "라면",
    "삼겹살",
    "김밥",
];

export default function SearchBox() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.trim() === "") {
            setResults([]);
        } else {
            const filtered = dummyData.filter((item) =>
                item.toLowerCase().includes(value.toLowerCase())
            );
            // 결과 -> 배열 형태
            // console.log("filtered", filtered);
            setResults(filtered);
        }
    };

    return (
        <div className="max-w-md mx-auto mb-7">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="요리 이름을 검색해보세요"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            {results.length > 0 && (
                <ul className="bg-white shadow-md rounded-xl divide-y divide-gray-100">
                    {results.map((item, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
