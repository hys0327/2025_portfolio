export default function SelectionResult({ step1, step2, data }) {
    if (!step1) return null;

    const renderItems = () => {
        if (step1 === "ingredient" && step2) {
            return data.ingredient[step2]?.map((item, idx) => (
                <li key={idx}>
                    <strong>{item.name}</strong> - {item.price}
                </li>
            ));
        }

        if (step1 === "tool" && step2) {
            return data.tool[step2]?.map((item, idx) => (
                <li key={idx} className="bg-white p-3">
                    <div className="img-box">
                        <img
                            src={item.imageUrl}
                            alt=""
                            className="w-full h-full mb-2"
                        />
                    </div>
                    <div className="text-wrap">
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                    </div>
                </li>
            ));
        }

        if (step1 === "shop") {
            return data.shop.map((site, idx) => (
                <li key={idx}>
                    <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        {site.name}
                    </a>
                </li>
            ));
        }
    };

    return (
        <ul className="grid grid-cols-6 gap-x-4 gap-y-6 mt-5">
            {renderItems()}
        </ul>
    );
}
